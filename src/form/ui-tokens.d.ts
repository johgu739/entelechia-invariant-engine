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
export declare const TYPOGRAPHY: {
    /**
     * Primary navigation items, node names
     * Tailwind: text-lg (18px)
     */
    readonly PRIMARY: "text-lg";
    /**
     * Secondary navigation items, hierarchy paths, metadata
     * Tailwind: text-sm (14px)
     */
    readonly SECONDARY: "text-sm";
    /**
     * Node names, page titles, section headers
     * Tailwind: text-xl (20px)
     */
    readonly TITLE: "text-xl";
    /**
     * Section headers (sidebar headers, tab labels)
     * Tailwind: text-sm font-semibold tracking-wide uppercase
     */
    readonly SECTION_HEADER: "text-sm font-semibold tracking-wide uppercase";
};
/**
 * Spacing Tokens
 *
 * Semantic spacing tokens mapped to Tailwind classes.
 * All spacing must use these tokens (4px base unit).
 */
export declare const SPACING: {
    /**
     * Minimal spacing (4px)
     * Tailwind: space-1
     */
    readonly MICRO: "space-1";
    /**
     * Small spacing (8px)
     * Tailwind: space-2
     */
    readonly SMALL: "space-2";
    /**
     * Medium spacing (12px)
     * Tailwind: space-3
     */
    readonly MEDIUM: "space-3";
    /**
     * Large spacing (16px)
     * Tailwind: space-4
     */
    readonly LARGE: "space-4";
    /**
     * Extra large spacing (24px)
     * Tailwind: space-6
     */
    readonly XLARGE: "space-6";
    /**
     * Horizontal padding for navigation components (24px)
     * Tailwind: px-6
     */
    readonly PADDING_X: "px-6";
    /**
     * Vertical padding for navigation components (16px)
     * Tailwind: py-4
     */
    readonly PADDING_Y: "py-4";
};
/**
 * Layout Tokens
 *
 * Semantic layout tokens for containers and geometry.
 */
export declare const LAYOUT: {
    /**
     * Width of domain navigation sidebar (320px)
     */
    readonly SIDEBAR_WIDTH: 320;
    /**
     * Flex grow to fill available space
     * Tailwind: flex-1
     */
    readonly FLEX_1: "flex-1";
    /**
     * Minimum height zero for flex children
     * Tailwind: min-h-0
     */
    readonly MIN_HEIGHT_ZERO: "min-h-0";
    /**
     * Hide overflow (for scroll boundaries)
     * Tailwind: overflow-hidden
     */
    readonly OVERFLOW_HIDDEN: "overflow-hidden";
    /**
     * Header height (56px)
     * Tailwind: h-14
     */
    readonly HEADER_HEIGHT: "h-14";
    /**
     * Header horizontal padding (24px)
     * Tailwind: px-6
     */
    readonly HEADER_PADDING_X: "px-6";
};
/**
 * Combined UI Tokens Export
 *
 * Single export object for convenient importing.
 */
export declare const UI: {
    readonly typography: {
        /**
         * Primary navigation items, node names
         * Tailwind: text-lg (18px)
         */
        readonly PRIMARY: "text-lg";
        /**
         * Secondary navigation items, hierarchy paths, metadata
         * Tailwind: text-sm (14px)
         */
        readonly SECONDARY: "text-sm";
        /**
         * Node names, page titles, section headers
         * Tailwind: text-xl (20px)
         */
        readonly TITLE: "text-xl";
        /**
         * Section headers (sidebar headers, tab labels)
         * Tailwind: text-sm font-semibold tracking-wide uppercase
         */
        readonly SECTION_HEADER: "text-sm font-semibold tracking-wide uppercase";
    };
    readonly spacing: {
        /**
         * Minimal spacing (4px)
         * Tailwind: space-1
         */
        readonly MICRO: "space-1";
        /**
         * Small spacing (8px)
         * Tailwind: space-2
         */
        readonly SMALL: "space-2";
        /**
         * Medium spacing (12px)
         * Tailwind: space-3
         */
        readonly MEDIUM: "space-3";
        /**
         * Large spacing (16px)
         * Tailwind: space-4
         */
        readonly LARGE: "space-4";
        /**
         * Extra large spacing (24px)
         * Tailwind: space-6
         */
        readonly XLARGE: "space-6";
        /**
         * Horizontal padding for navigation components (24px)
         * Tailwind: px-6
         */
        readonly PADDING_X: "px-6";
        /**
         * Vertical padding for navigation components (16px)
         * Tailwind: py-4
         */
        readonly PADDING_Y: "py-4";
    };
    readonly layout: {
        /**
         * Width of domain navigation sidebar (320px)
         */
        readonly SIDEBAR_WIDTH: 320;
        /**
         * Flex grow to fill available space
         * Tailwind: flex-1
         */
        readonly FLEX_1: "flex-1";
        /**
         * Minimum height zero for flex children
         * Tailwind: min-h-0
         */
        readonly MIN_HEIGHT_ZERO: "min-h-0";
        /**
         * Hide overflow (for scroll boundaries)
         * Tailwind: overflow-hidden
         */
        readonly OVERFLOW_HIDDEN: "overflow-hidden";
        /**
         * Header height (56px)
         * Tailwind: h-14
         */
        readonly HEADER_HEIGHT: "h-14";
        /**
         * Header horizontal padding (24px)
         * Tailwind: px-6
         */
        readonly HEADER_PADDING_X: "px-6";
    };
};
/**
 * Type exports
 */
export type TypographyToken = typeof TYPOGRAPHY[keyof typeof TYPOGRAPHY];
export type SpacingToken = typeof SPACING[keyof typeof SPACING];
export type LayoutToken = typeof LAYOUT[keyof typeof LAYOUT];
//# sourceMappingURL=ui-tokens.d.ts.map