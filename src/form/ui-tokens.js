/**
 * ✅ ENTELECHIA INVARIANT ENGINE — UI Tokens (Canonical FORM)
 *
 * This module exports canonical UI design tokens derived from Codex ontology.
 *
 * FORM → ACT → STATE:
 * - FORM: Semantic tokens defined in Codex (codex/10-ontology/ui/tokens/)
 * - ACT: Tailwind classes mapped in Codex (codex/10-ontology/ui/canonical-mapping/)
 * - STATE: Runtime verification uses these tokens
 *
 * This is the SINGLE SOURCE OF TRUTH for UI tokens.
 * UI components MUST import from here, never define tokens locally.
 */
/**
 * Typography Tokens
 *
 * Semantic typography tokens mapped to Tailwind classes.
 * All typography must use these tokens.
 */
export const TYPOGRAPHY = {
    /**
     * Primary navigation items, node names
     * Tailwind: text-lg (18px)
     */
    PRIMARY: 'text-lg',
    /**
     * Secondary navigation items, hierarchy paths, metadata
     * Tailwind: text-sm (14px)
     */
    SECONDARY: 'text-sm',
    /**
     * Node names, page titles, section headers
     * Tailwind: text-xl (20px)
     */
    TITLE: 'text-xl',
    /**
     * Section headers (sidebar headers, tab labels)
     * Tailwind: text-sm font-semibold tracking-wide uppercase
     */
    SECTION_HEADER: 'text-sm font-semibold tracking-wide uppercase',
};
/**
 * Spacing Tokens
 *
 * Semantic spacing tokens mapped to Tailwind classes.
 * All spacing must use these tokens (4px base unit).
 */
export const SPACING = {
    /**
     * Minimal spacing (4px)
     * Tailwind: space-1
     */
    MICRO: 'space-1',
    /**
     * Small spacing (8px)
     * Tailwind: space-2
     */
    SMALL: 'space-2',
    /**
     * Medium spacing (12px)
     * Tailwind: space-3
     */
    MEDIUM: 'space-3',
    /**
     * Large spacing (16px)
     * Tailwind: space-4
     */
    LARGE: 'space-4',
    /**
     * Extra large spacing (24px)
     * Tailwind: space-6
     */
    XLARGE: 'space-6',
    /**
     * Horizontal padding for navigation components (24px)
     * Tailwind: px-6
     */
    PADDING_X: 'px-6',
    /**
     * Vertical padding for navigation components (16px)
     * Tailwind: py-4
     */
    PADDING_Y: 'py-4',
};
/**
 * Layout Tokens
 *
 * Semantic layout tokens for containers and geometry.
 */
export const LAYOUT = {
    /**
     * Width of domain navigation sidebar (320px)
     */
    SIDEBAR_WIDTH: 320,
    /**
     * Flex grow to fill available space
     * Tailwind: flex-1
     */
    FLEX_1: 'flex-1',
    /**
     * Minimum height zero for flex children
     * Tailwind: min-h-0
     */
    MIN_HEIGHT_ZERO: 'min-h-0',
    /**
     * Hide overflow (for scroll boundaries)
     * Tailwind: overflow-hidden
     */
    OVERFLOW_HIDDEN: 'overflow-hidden',
    /**
     * Header height (56px)
     * Tailwind: h-14
     */
    HEADER_HEIGHT: 'h-14',
    /**
     * Header horizontal padding (24px)
     * Tailwind: px-6
     */
    HEADER_PADDING_X: 'px-6',
};
/**
 * Combined UI Tokens Export
 *
 * Single export object for convenient importing.
 */
export const UI = {
    typography: TYPOGRAPHY,
    spacing: SPACING,
    layout: LAYOUT,
};
//# sourceMappingURL=ui-tokens.js.map