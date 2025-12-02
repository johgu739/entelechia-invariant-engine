/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F98: Cross-Component Motion Parity
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F98_CROSS_COMPONENT_MOTION_PARITY = {
    category: 'UI_TYPOGRAPHY',
    code: 'F98',
    name: 'Cross-Component Motion Parity',
    description: 'Child motion cannot contradict parent motion. Global nav defines baseline grammar; workspace nav inherits; node tabs refine.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const crossComponentViolations = context.crossComponentViolations;
        if (crossComponentViolations && crossComponentViolations.length > 0) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F98', 'UI_TYPOGRAPHY', 'F98', 'F98 violation: Cross-component motion parity violations detected. Child motion cannot contradict parent motion.', {
                crossComponentViolations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F98_CROSS_COMPONENT_MOTION_PARITY.js.map