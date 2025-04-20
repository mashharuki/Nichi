#!/bin/bash

source ./.env

docker build . -t $REGION-docker.pkg.dev/$PROJECT_ID/agent-api-repo/agent-api:latest
