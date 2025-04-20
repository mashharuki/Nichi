#!/bin/bash

source ./.env

docker push $REGION-docker.pkg.dev/$PROJECT_ID/agent-api-repo/agent-api:latest
