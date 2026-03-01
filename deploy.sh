#!/bin/bash
set -e  # Exit on any error

# Configuration
BUCKET_NAME="vvv.admin.ai"
REGION="eu-west-1"
CLOUDFRONT_DIST_ID=""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Admin.ai Next.js Deployment ===${NC}"
echo ""

# Step 1: Validate AWS credentials
echo -e "${BLUE}[1/6] Validating AWS credentials...${NC}"
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}Error: AWS credentials not configured properly${NC}"
    echo -e "${YELLOW}Run: aws configure${NC}"
    exit 1
fi
echo -e "${GREEN}✓ AWS credentials valid${NC}"
echo ""

# Step 2: Install dependencies
echo -e "${BLUE}[2/6] Installing dependencies...${NC}"
npm ci
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 3: Build Next.js
echo -e "${BLUE}[3/6] Building Next.js site...${NC}"
npm run build
echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# Step 4: Get CloudFront distribution ID if not set
echo -e "${BLUE}[4/6] Finding CloudFront distribution...${NC}"
CLOUDFRONT_DIST_ID=$(aws cloudfront list-distributions \
    --query "DistributionList.Items[?Origins.Items[?contains(DomainName, '$BUCKET_NAME')]].Id | [0]" \
    --output text 2>/dev/null || echo "")

if [ -z "$CLOUDFRONT_DIST_ID" ] || [ "$CLOUDFRONT_DIST_ID" == "None" ]; then
    echo -e "${YELLOW}Warning: CloudFront distribution not found. Skipping invalidation.${NC}"
else
    echo -e "${GREEN}✓ CloudFront distribution found: $CLOUDFRONT_DIST_ID${NC}"
fi
echo ""

# Step 5: Sync files to S3
echo -e "${BLUE}[5/6] Syncing to S3...${NC}"
aws s3 sync out/ s3://$BUCKET_NAME/ \
    --region $REGION \
    --delete \
    --cache-control "max-age=300, public" \
    --metadata-directive REPLACE

# Set long cache for _next/ assets (immutable Next.js build files)
if aws s3 ls s3://$BUCKET_NAME/_next/ &> /dev/null; then
    aws s3 cp s3://$BUCKET_NAME/_next/ s3://$BUCKET_NAME/_next/ \
        --recursive \
        --cache-control "max-age=31536000, public, immutable" \
        --metadata-directive REPLACE \
        &> /dev/null
    echo -e "${GREEN}✓ Files synced with optimized cache headers${NC}"
else
    echo -e "${GREEN}✓ Files synced to S3${NC}"
fi
echo ""

# Step 6: Invalidate CloudFront cache
if [ -n "$CLOUDFRONT_DIST_ID" ] && [ "$CLOUDFRONT_DIST_ID" != "None" ]; then
    echo -e "${BLUE}[6/6] Creating CloudFront invalidation...${NC}"
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DIST_ID \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)

    echo -e "${GREEN}✓ CloudFront invalidation created: $INVALIDATION_ID${NC}"
    echo -e "${BLUE}Note: Invalidation may take 1-2 minutes to complete${NC}"
else
    echo -e "${BLUE}[6/6] Skipping CloudFront invalidation (no distribution found)${NC}"
fi
echo ""

echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo -e "Website URL: ${BLUE}https://vvv.admin.ai${NC}"
echo -e "S3 Bucket: ${BLUE}s3://$BUCKET_NAME/${NC}"
echo ""
