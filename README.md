# Void Text Releases

Public release repository for Void Text distribution artifacts.

## Current Release Index

- `Releases/v0.2`

## Upload Flow

1. Build and notarize the `.dmg` from the main `Void-Text` repository.
2. Create a GitHub Release tagged `v0.2`.
3. Upload the notarized `.dmg` and optional checksum file to that release.
4. Record the asset name, download link, and checksum in `Releases/v0.2/README.md`.

## Notes

- Do not pre-create versions that are not shipped yet.
- Keep binary artifacts in GitHub Release assets instead of Git history.
