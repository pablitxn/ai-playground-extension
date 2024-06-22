#!/bin/bash

# Directory where the manifest.json is located
manifest_path="./src/static/manifest.json"

# Get the current version from the manifest.json file
current_version=$(jq -r '.version' "$manifest_path")
echo "Current version: $current_version"

new_version="$1"
echo "New version: $new_version"

# Update the manifest.json file with the new version.
jq --arg new_version "$new_version" '.version = $new_version' "$manifest_path" > temp.json && mv temp.json "$manifest_path"

exit 0
