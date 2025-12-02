/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F106: State-Based Text Color Rules
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F106_STATE_BASED_TEXT_COLOR_RULES = {
    category: 'UI_TYPOGRAPHY',
    code: 'F106',
    name: 'State-Based Text Color Rules',
    description: 'Semantic text colors must follow: Default (gray-900), Secondary (gray-600), Muted (gray-500), Disabled (gray-400). All transitions must obey F94.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const textColorViolations = context.textColorViolations;
        if (textColorViolations && textColorViolations.length > 0) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F106', 'UI_TYPOGRAPHY', 'F106', 'F106 violation: State-based text color violations detected. Semantic text colors must follow approved rules: Default (gray-900), Secondary (gray-600), Muted (gray-500), Disabled (gray-400).', {
                textColorViolations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F106_STATE_BASED_TEXT_COLOR_RULES.js.map