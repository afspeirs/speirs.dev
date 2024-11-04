#!/bin/bash

# Check if a new version number is provided
if [ -z "$1" ]; then
  echo "Error: No new version number provided."
  echo "Usage: $0 <new_version>"
  exit 1
fi

# Define the new version
new_version=$1

# Check if package.json file exists
if [ ! -f "package.json" ]; then
  echo "Error: package.json not found in the current directory."
  exit 1
fi

# Run a Node.js script to update package.json
node -e "
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json'));

packageJson.version = '$new_version';

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('Version updated to', '$new_version');
"
