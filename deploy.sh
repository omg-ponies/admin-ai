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

echo -e "${BLUE}=== Admin.ai Deployment to AWS S3 ===${NC}"
echo ""

# Step 1: Validate AWS credentials
echo -e "${BLUE}[1/5] Validating AWS credentials...${NC}"
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}Error: AWS credentials not configured properly${NC}"
    echo -e "${YELLOW}Run: aws configure${NC}"
    exit 1
fi
echo -e "${GREEN}✓ AWS credentials valid${NC}"
echo ""

# Step 2: Get CloudFront distribution ID if not set
echo -e "${BLUE}[2/5] Finding CloudFront distribution...${NC}"
CLOUDFRONT_DIST_ID=$(aws cloudfront list-distributions \
    --query "DistributionList.Items[?Origins.Items[?contains(DomainName, '$BUCKET_NAME')]].Id | [0]" \
    --output text 2>/dev/null || echo "")

if [ -z "$CLOUDFRONT_DIST_ID" ] || [ "$CLOUDFRONT_DIST_ID" == "None" ]; then
    echo -e "${YELLOW}Warning: CloudFront distribution not found. Skipping invalidation.${NC}"
else
    echo -e "${GREEN}✓ CloudFront distribution found: $CLOUDFRONT_DIST_ID${NC}"
fi
echo ""

# Step 3: Sync files to S3
echo -e "${BLUE}[3/5] Syncing files to S3...${NC}"
aws s3 sync . s3://$BUCKET_NAME/ \
    --region $REGION \
    --delete \
    --exclude ".git/*" \
    --exclude "deploy.sh" \
    --exclude ".gitignore" \
    --exclude "README.md" \
    --exclude ".DS_Store" \
    --cache-control "max-age=300, public" \
    --metadata-directive REPLACE

echo -e "${GREEN}✓ Files synced to S3${NC}"
echo ""

# Step 4: Set longer cache for static assets
echo -e "${BLUE}[4/5] Optimizing cache headers for static assets...${NC}"
if aws s3 ls s3://$BUCKET_NAME/favicon.ico &> /dev/null; then
    aws s3 cp s3://$BUCKET_NAME/favicon.ico s3://$BUCKET_NAME/favicon.ico \
        --cache-control "max-age=31536000, public, immutable" \
        --metadata-directive REPLACE \
        &> /dev/null
    echo -e "${GREEN}✓ Cache headers optimized for favicon.ico${NC}"
else
    echo -e "${YELLOW}Note: favicon.ico not found, skipping cache optimization${NC}"
fi
echo ""

# Step 5: Invalidate CloudFront cache
if [ -n "$CLOUDFRONT_DIST_ID" ] && [ "$CLOUDFRONT_DIST_ID" != "None" ]; then
    echo -e "${BLUE}[5/5] Creating CloudFront invalidation...${NC}"
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DIST_ID \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)

    echo -e "${GREEN}✓ CloudFront invalidation created: $INVALIDATION_ID${NC}"
    echo -e "${BLUE}Note: Invalidation may take 1-2 minutes to complete${NC}"
else
    echo -e "${BLUE}[5/5] Skipping CloudFront invalidation (no distribution found)${NC}"
fi
echo ""

echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo -e "Website URL: ${BLUE}https://admin.ai${NC}"
echo -e "S3 Bucket: ${BLUE}s3://$BUCKET_NAME/${NC}"
echo ""
