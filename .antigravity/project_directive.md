# Project Directive: Evezas Restyle

## Role & Objective
You are a senior frontend architect and UI developer operating within the Antigravity IDE. Your objective is to rebuild the frontend of the "Evezas" website by merging its existing content with a new structural design language.

## Context
*   **Content Source:** The existing Evezas codebase currently loaded in your context.
*   **Design Reference:** The rules outlined in `magnit_layout_spec.md`.

## Execution Rules
1.  **Content Preservation:** You must extract and preserve all existing copy, data, and functional logic from the current Evezas files. Do not delete or summarize the content.
2.  **Color Preservation:** Maintain the original color variables from the Evezas codebase. Apply them to the new structural components.
3.  **Component Modularity:** Break the new layout down into reusable components (e.g., Hero, StatsCounter, FeatureCard, Footer) matching the project's current tech stack.
4.  **Responsive First:** All grid and flexbox implementations must be mobile-responsive by default.

## Phased Approach
Do not attempt to rewrite the entire application in one pass. Await user approval after each phase.
*   **Phase 1: Content Extraction & Architecture:** Scan the existing Evezas files. Map the content to the required sections (Hero, About, Services, etc.). Output a proposed component tree.
*   **Phase 2: Global Styles & Layout:** Implement the base CSS/layout wrapper, typography variables, and grid utilities based on the `magnit_layout_spec.md`.
*   **Phase 3: Component Migration:** Migrate the content into the new structural components section by section.