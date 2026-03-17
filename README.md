# Team Project Page Template

This repository is a standalone starter for a polished team project page.

Students should be able to use it without redesigning anything.

In most cases, they only need to do two things:

1. edit `src/data/projectData.ts`
2. add files to `public/project-assets/`

## Fast start

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Read these first

- `START_HERE.md`
- `src/data/projectData.ts`
- `public/project-assets/README.md`

## The two folders that matter most

Main content file:

- `src/data/projectData.ts`

Assets folder:

- `public/project-assets/`

## What goes in `public/project-assets/`

Students can place any of these there:

- screenshots
- diagrams
- photos
- exported slide decks as PDF
- technical reports as PDF
- any other downloadable project file

Example paths to use inside `src/data/projectData.ts`:

- `/project-assets/hero-screen.png`
- `/project-assets/system-diagram.png`
- `/project-assets/final-slides.pdf`
- `/project-assets/report.pdf`

## Recommended student workflow

1. Open `src/data/projectData.ts`.
2. Replace all bracketed placeholder text like `[Project Title]`.
3. Add screenshots, diagrams, or PDFs to `public/project-assets/`.
4. Update the gallery, links, stack, features, and roadmap in `src/data/projectData.ts`.
5. Run `npm run dev` and refresh the browser as you edit.
6. Run `npm run build` before submitting or sharing.

## What students usually should NOT edit

Most students should leave these files alone:

- `src/App.tsx`
- `src/styles.css`
- `vite.config.ts`
- `tsconfig*.json`

Only edit those if you intentionally want to redesign the page.

## What the template supports

- title and summary
- team member section
- problem and solution
- project links
- screenshot / diagram gallery
- methods and technical stack
- feature cards
- architecture explanation
- code snippets
- roadmap
- risks and constraints
- final closing section

## Minimum viable submission

If students are short on time, they should still fill in at least:

- title
- subtitle
- executive summary
- problem
- solution
- team members
- 1 to 3 screenshots
- stack
- 2 to 3 feature cards

## Common mistakes to avoid

- leaving bracketed placeholder text in the final page
- putting files in the wrong folder instead of `public/project-assets/`
- using local filesystem paths instead of `/project-assets/...`
- rewriting layout code when the data file was enough
- pasting huge code samples instead of one or two focused examples

## Before sharing the page

Check these quickly:

- all placeholders are replaced
- all links open correctly
- images render correctly
- PDF links work
- page still runs with `npm run dev`
- project still builds with `npm run build`

## Instructor integration note

This repo also includes:

- `INTEGRATE_INTO_FOSTER_AI_HUB.md`
- `src/data/fosterAiHubExport.ts`

Those exist to make it easier for me to bring student work back into the main `foster-ai-hub` app later.
