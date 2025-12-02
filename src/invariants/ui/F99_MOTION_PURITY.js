/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F99: Motion Purity (No Jank)
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F99_MOTION_PURITY = {
    category: 'UI_TYPOGRAPHY',
    code: 'F99',
    name: 'Motion Purity (No Jank)',
    description: 'Motion must not cause reflow, blink, remount, scroll jumps, or layout-affecting mutations. Must not violate F57 (frame purity) or F83 (bounding box integrity).',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const causesReflow = context.causesReflow;
        const causesBlink = context.causesBlink;
        const causesRemount = context.causesRemount;
        const causesScrollJumps = context.causesScrollJumps;
        const causesLayoutMutations = context.causesLayoutMutations;
        const violatesF57 = context.violatesF57;
        const violatesF83 = context.violatesF83;
        if (causesReflow || causesBlink || causesRemount || causesScrollJumps || causesLayoutMutations || violatesF57 || violatesF83) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F99', 'UI_TYPOGRAPHY', 'F99', 'F99 violation: Motion purity violations detected. Motion must not cause reflow, blink, remount, scroll jumps, or layout mutations.', {
                causesReflow,
                causesBlink,
                causesRemount,
                causesScrollJumps,
                causesLayoutMutations,
                violatesF57,
                violatesF83,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F99_MOTION_PURITY.js.map