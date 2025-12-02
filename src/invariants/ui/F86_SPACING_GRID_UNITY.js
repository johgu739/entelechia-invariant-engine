/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F86: Spacing Grid Unity
 *
 * CATEGORY: UI_SPACING
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F86_SPACING_GRID_UNITY = {
    category: 'UI_SPACING',
    code: 'F86',
    name: 'Spacing Grid Unity',
    description: 'All navigation components must use 4px spacing grid (Apple/Linear spacing scale). All padding/margin values must be multiples of 4px.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const spacingViolations = context.spacingViolations;
        const globalHeaderUsesCorrectSpacing = context.globalHeaderUsesCorrectSpacing;
        const sidebarUsesCorrectSpacing = context.sidebarUsesCorrectSpacing;
        const nodeDetailHeaderUsesCorrectSpacing = context.nodeDetailHeaderUsesCorrectSpacing;
        const routerPath = context.routerPath;
        if (spacingViolations && spacingViolations.length > 0) {
            throw new InvariantViolationError('UI_SPACING.F86', 'UI_SPACING', 'F86', 'F86 violation: Spacing grid inconsistency detected. All spacing values must be multiples of 4px (4, 8, 12, 16, 24px).', {
                spacingViolations,
                globalHeaderUsesCorrectSpacing,
                sidebarUsesCorrectSpacing,
                nodeDetailHeaderUsesCorrectSpacing,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (globalHeaderUsesCorrectSpacing === false ||
            sidebarUsesCorrectSpacing === false ||
            nodeDetailHeaderUsesCorrectSpacing === false) {
            throw new InvariantViolationError('UI_SPACING.F86', 'UI_SPACING', 'F86', 'F86 violation: Navigation components do not use correct spacing. All components must use PADDING_X (24px) for horizontal padding.', {
                globalHeaderUsesCorrectSpacing,
                sidebarUsesCorrectSpacing,
                nodeDetailHeaderUsesCorrectSpacing,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F86_SPACING_GRID_UNITY.js.map