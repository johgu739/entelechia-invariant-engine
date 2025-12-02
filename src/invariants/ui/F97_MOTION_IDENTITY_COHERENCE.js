/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F97: Motion-Identity Coherence
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F97_MOTION_IDENTITY_COHERENCE = {
    category: 'UI_TYPOGRAPHY',
    code: 'F97',
    name: 'Motion-Identity Coherence',
    description: 'Components of the same visual class must animate identically. All "list items" share the same hover/active motion across global nav, workspace nav, and section nav.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const motionIdentityViolations = context.motionIdentityViolations;
        if (motionIdentityViolations && motionIdentityViolations.length > 0) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F97', 'UI_TYPOGRAPHY', 'F97', 'F97 violation: Motion-identity coherence violations detected. Components of the same visual class must animate identically.', {
                motionIdentityViolations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F97_MOTION_IDENTITY_COHERENCE.js.map