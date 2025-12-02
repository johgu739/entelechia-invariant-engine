/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F93: State Transition Consistency
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F93_STATE_TRANSITION_CONSISTENCY = {
    category: 'UI_TYPOGRAPHY',
    code: 'F93',
    name: 'State Transition Consistency',
    description: 'A given state must always trigger the same motion. Hover = opacity + subtle color, Active = background + opacity, Selected = background + weight shift.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const stateTransitionViolations = context.stateTransitionViolations;
        if (stateTransitionViolations && stateTransitionViolations.length > 0) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F93', 'UI_TYPOGRAPHY', 'F93', 'F93 violation: State transition inconsistencies detected. Same state must trigger same motion across all components.', {
                stateTransitionViolations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F93_STATE_TRANSITION_CONSISTENCY.js.map