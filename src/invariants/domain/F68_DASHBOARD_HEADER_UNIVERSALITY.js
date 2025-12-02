/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F68: Dashboard Header Universality
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 *
 * Telos: All page headers must have identical spacing, height, and scroll boundaries.
 * This ensures visual consistency across all dashboard pages.
 */
import { InvariantViolationError } from '../../core/errors';
export const F68_DASHBOARD_HEADER_UNIVERSALITY = {
    category: 'DOMAIN_LOGIC',
    code: 'F68',
    name: 'Dashboard Header Universality',
    description: 'All page headers must have identical spacing, height, and scroll boundaries. This ensures visual consistency across all dashboard pages.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const headerHeight = context.headerHeight;
        const spacing = context.spacing;
        const scrollBoundary = context.scrollBoundary;
        const CANONICAL_HEADER_HEIGHT = 64; // h-16 = 64px
        const CANONICAL_SPACING = 24; // px-6 = 24px
        const CANONICAL_SCROLL_BOUNDARY = 'none'; // Headers never scroll
        const violations = [];
        if (headerHeight !== undefined && headerHeight !== CANONICAL_HEADER_HEIGHT) {
            violations.push(`Header height: ${headerHeight}px (expected: ${CANONICAL_HEADER_HEIGHT}px)`);
        }
        if (spacing !== undefined && spacing !== CANONICAL_SPACING) {
            violations.push(`Spacing: ${spacing}px (expected: ${CANONICAL_SPACING}px)`);
        }
        if (scrollBoundary !== undefined && scrollBoundary !== CANONICAL_SCROLL_BOUNDARY) {
            violations.push(`Scroll boundary: ${scrollBoundary} (expected: ${CANONICAL_SCROLL_BOUNDARY})`);
        }
        if (violations.length > 0) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F68', 'DOMAIN_LOGIC', 'F68', `F68_DASHBOARD_HEADER_UNIVERSALITY violation: Header does not match canonical dimensions. ${violations.join(', ')}`, {
                headerHeight,
                spacing,
                scrollBoundary,
                canonicalHeight: CANONICAL_HEADER_HEIGHT,
                canonicalSpacing: CANONICAL_SPACING,
                canonicalScrollBoundary: CANONICAL_SCROLL_BOUNDARY,
                violations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F68_DASHBOARD_HEADER_UNIVERSALITY.js.map