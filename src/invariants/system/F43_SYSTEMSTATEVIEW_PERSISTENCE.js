/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F43: SystemStateView-Persistence
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */
import { InvariantViolationError } from '../../core/errors';
export const F43_SYSTEMSTATEVIEW_PERSISTENCE = {
    category: 'SYSTEM_STATE',
    code: 'F43',
    name: 'SystemStateView-Persistence',
    description: 'SystemStateView must be persisted and loaded synchronously on boot. Persisted SystemStateView must be available before first render. Verified at module-load stage.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const systemStateViewNotPersisted = context.systemStateViewNotPersisted;
        const persistedSSVNotLoaded = context.persistedSSVNotLoaded;
        const hasPersistedSSV = context.hasPersistedSSV;
        if (systemStateViewNotPersisted) {
            throw new InvariantViolationError('SYSTEM_STATE.F43', 'SYSTEM_STATE', 'F43', 'F43 violation: SystemStateView not persisted. Must persist after each update.', {
                systemStateViewNotPersisted,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (persistedSSVNotLoaded && hasPersistedSSV) {
            throw new InvariantViolationError('SYSTEM_STATE.F43', 'SYSTEM_STATE', 'F43', 'F43 violation: Persisted SystemStateView exists but was not loaded synchronously. Must load on boot.', {
                persistedSSVNotLoaded,
                hasPersistedSSV,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F43_SYSTEMSTATEVIEW_PERSISTENCE.js.map