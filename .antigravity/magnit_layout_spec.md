# UI/UX Structural Specification: "Magnit" Design Language

## Core Philosophy
The objective is to achieve an enterprise-grade, modern, and highly legible interface. The design relies on bold typography, generous whitespace, asymmetrical geometric accents, and structured card grids rather than color to create visual hierarchy.

## 1. Typography & Scale
*   **Headings:** Oversized, bold sans-serif. Line heights should be tight (1.1 - 1.2) to make multi-line headings look like cohesive blocks.
*   **Body Text:** Clean, highly legible sans-serif with relaxed line height (1.6) for readability.
*   **Hierarchy:** Extreme contrast between H1/H2 sizes and body copy. Use font weight (e.g., 800 vs 400) to create distinction instead of color.

## 2. Layout & Spacing
*   **Section Padding:** Massive vertical padding between distinct sections (e.g., `padding: 120px 0;` on desktop) to let content breathe.
*   **Grid Systems:** 
    *   Use asymmetric CSS grids for hero sections (e.g., text taking up 60% width, imagery/abstract shapes taking 40%).
    *   Use standard, evenly spaced CSS grids for feature/service cards.
*   **Containment:** Content should be max-width constrained (e.g., `max-width: 1280px;`) and centered, keeping the layout grounded.

## 3. UI Components & Shapes
*   **Cards:** Clean edges, subtle box-shadows on hover, and significant internal padding (e.g., 40px). 
*   **Buttons:** Solid, pill-shaped or slightly rounded rectangular buttons with bold text and distinct hover states (scaling or shadow changes).
*   **Accents:** Use geometric shapes (circles, quarter-circles, subtle background grids) as decorative background elements. These should be subtle and not distract from the content.

## 4. Color Policy (STRICT CONSTRAINT)
*   **DO NOT** use the Magnit Global color palette (no electric blues, oranges, or specific dark mode blacks unless they match the original Evezas branding).
*   **DO** retain the existing Evezas color palette. If no palette exists, default to a high-contrast monochromatic scheme (pure white background, deep charcoal text) until the user specifies brand colors.