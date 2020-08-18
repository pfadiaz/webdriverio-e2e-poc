#!/usr/bin/env bash

function teardown {
  docker-compose down
}

# Delete stack after EXIT
trap teardown EXIT

# Create new stack
docker-compose up -d

# Give wdio time to start up
sleep 2

npm run test:e2e:local
