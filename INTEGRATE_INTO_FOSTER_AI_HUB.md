# Integrate Back Into foster-ai-hub

This repo was structured to make integration back into `foster-ai-hub` easy.

## What I would copy back

### 1. Assets
Copy the student's files from:

- `public/project-assets/`

into the main app's public folder, for example:

- `foster-ai-hub/public/student-projects/<slug>/`

### 2. Data
Open:

- `src/data/fosterAiHubExport.ts`

That file contains two export-ready objects:

- `fosterAiHubPageData`
- `fosterAiHubCardData`

These are intentionally shaped to match the current `foster-ai-hub` data model closely.

## Why this is convenient

Students edit only:

- `src/data/projectData.ts`
- `public/project-assets/`

Then I can use `fosterAiHubExport.ts` as the bridge back into the main app.

## Current limitation

The standalone repo supports a few things the current `foster-ai-hub` team template page does not fully use yet, such as:

- explicit external links section
- code highlight section
- owner line

Those do not block integration. They just mean I may either:

1. keep them only in the standalone page, or
2. extend the main app later to render them too

## Recommended student habit

Students should keep these fields accurate because they help later import:

- `slug`
- `keywords`
- first real gallery image
- project links
