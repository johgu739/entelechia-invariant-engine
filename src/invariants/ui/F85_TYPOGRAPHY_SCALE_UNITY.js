/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F85: Typography Scale Unity
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F85_TYPOGRAPHY_SCALE_UNITY = {
    category: 'UI_TYPOGRAPHY',
    code: 'F85',
    name: 'Typography Scale Unity',
    description: 'All navigation components must use consistent typography scale from design tokens. TYPOGRAPHY_PRIMARY (text-lg, 18px) for primary items, TYPOGRAPHY_SECONDARY (text-sm, 14px) for secondary items.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const globalHeaderUsesCorrectTypography = context.globalHeaderUsesCorrectTypography;
        const sidebarUsesCorrectTypography = context.sidebarUsesCorrectTypography;
        const nodeDetailHeaderUsesCorrectTypography = context.nodeDetailHeaderUsesCorrectTypography;
        const typographyViolations = context.typographyViolations;
        const routerPath = context.routerPath;
        if (globalHeaderUsesCorrectTypography === false ||
            sidebarUsesCorrectTypography === false ||
            nodeDetailHeaderUsesCorrectTypography === false) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F85', 'UI_TYPOGRAPHY', 'F85', 'F85 violation: Typography scale inconsistency detected. Navigation components must use design tokens (TYPOGRAPHY_PRIMARY = text-lg, TYPOGRAPHY_SECONDARY = text-sm).', {
                globalHeaderUsesCorrectTypography,
                sidebarUsesCorrectTypography,
                nodeDetailHeaderUsesCorrectTypography,
                typographyViolations,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F85_TYPOGRAPHY_SCALE_UNITY.js.map