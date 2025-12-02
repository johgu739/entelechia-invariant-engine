/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F49: Zero-Invisible-Renders
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_DEMAND
 */
import { InvariantViolationError } from '../../core/errors';
export const F49_ZERO_INVISIBLE_RENDERS = {
    category: 'SYSTEM_STATE',
    code: 'F49',
    name: 'Zero-Invisible-Renders',
    description: 'No component may render invisibly or off-screen. All renders must be visible and meaningful.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasInvisibleRender = context.hasInvisibleRender;
        const hasOffScreenRender = context.hasOffScreenRender;
        if (hasInvisibleRender || hasOffScreenRender) {
            throw new InvariantViolationError('SYSTEM_STATE.F49', 'SYSTEM_STATE', 'F49', 'F49 violation: Component rendered invisibly or off-screen. All renders must be visible.', {
                hasInvisibleRender,
                hasOffScreenRender,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F49_ZERO_INVISIBLE_RENDERS.js.map