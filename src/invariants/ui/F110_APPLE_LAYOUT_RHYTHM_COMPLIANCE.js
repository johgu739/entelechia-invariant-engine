/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F110: Apple Layout Rhythm Compliance
 *
 * CATEGORY: UI_SPACING
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 *
 * Note: This is a duplicate of F109 but with different code number.
 * Keeping both for compatibility.
 */
import { InvariantViolationError } from '../../core/errors';
export const F110_APPLE_LAYOUT_RHYTHM_COMPLIANCE = {
    category: 'UI_SPACING',
    code: 'F110',
    name: 'Apple Layout Rhythm Compliance',
    description: 'Spacing rhythm must match Apple\'s 4/8/12/16/24 grid. Typography spacing (margins, vertical separation) must follow this beat. No arbitrary spacing values.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const rhythmViolations = context.rhythmViolations;
        const approvedMultiples = [4, 8, 12, 16, 24];
        if (rhythmViolations && rhythmViolations.length > 0) {
            const invalidValues = rhythmViolations.filter(v => !approvedMultiples.includes(v.value));
            if (invalidValues.length > 0) {
                throw new InvariantViolationError('UI_SPACING.F110', 'UI_SPACING', 'F110', 'F110 violation: Apple layout rhythm violations detected. Typography spacing must follow 4/8/12/16/24 grid. No arbitrary spacing values.', {
                    rhythmViolations: invalidValues,
                    approvedMultiples,
                    source: context.sourceComponent || context.sourceFile || 'unknown',
                });
            }
        }
    },
};
//# sourceMappingURL=F110_APPLE_LAYOUT_RHYTHM_COMPLIANCE.js.map