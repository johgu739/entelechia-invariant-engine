/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F32: Zero-Placeholder-First-Frame
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */
import { InvariantViolationError } from '../../core/errors';
export const F32_ZERO_PLACEHOLDER_FIRST_FRAME = {
    category: 'SYSTEM_STATE',
    code: 'F32',
    name: 'Zero-Placeholder-First-Frame',
    description: 'No placeholder UI may appear on the first frame after page reload. Persisted data must be available synchronously.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasPlaceholderOnFirstFrame = context.hasPlaceholderOnFirstFrame;
        const hasPersistedSSV = context.hasPersistedSSV;
        const hasPersistedViewModel = context.hasPersistedViewModel;
        const hasPersistedNodeSelection = context.hasPersistedNodeSelection;
        if (hasPlaceholderOnFirstFrame) {
            throw new InvariantViolationError('SYSTEM_STATE.F32', 'SYSTEM_STATE', 'F32', 'F32 violation: Placeholder UI appeared on first frame. Persisted data must be used immediately.', {
                hasPlaceholderOnFirstFrame,
                hasPersistedSSV,
                hasPersistedViewModel,
                hasPersistedNodeSelection,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F32_ZERO_PLACEHOLDER_FIRST_FRAME.js.map