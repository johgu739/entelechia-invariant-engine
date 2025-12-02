/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F93_MICRO: Micro-Layout Stability
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F93_MICRO_LAYOUT_STABILITY = {
    category: 'UI_TYPOGRAPHY',
    code: 'F93_MICRO',
    name: 'Micro-Layout Stability',
    description: 'No pixel jumps, line-height jumps, font-weight shifts pushing layout, or padding changes that cause reflow. All structural properties must remain constant.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasLayoutJumps = context.hasLayoutJumps;
        const hasLineHeightJumps = context.hasLineHeightJumps;
        const hasWeightShifts = context.hasWeightShifts;
        const hasPaddingChanges = context.hasPaddingChanges;
        if (hasLayoutJumps || hasLineHeightJumps || hasWeightShifts || hasPaddingChanges) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F93_MICRO', 'UI_TYPOGRAPHY', 'F93_MICRO', 'F93 violation: Micro-layout instability detected. No pixel jumps, line-height jumps, font-weight shifts, or padding changes during transitions.', {
                hasLayoutJumps,
                hasLineHeightJumps,
                hasWeightShifts,
                hasPaddingChanges,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F93_MICRO_LAYOUT_STABILITY.js.map