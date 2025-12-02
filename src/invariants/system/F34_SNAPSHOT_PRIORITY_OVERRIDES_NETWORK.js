/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F34: Snapshot-Priority-Overrides-Network
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */
import { InvariantViolationError } from '../../core/errors';
export const F34_SNAPSHOT_PRIORITY_OVERRIDES_NETWORK = {
    category: 'SYSTEM_STATE',
    code: 'F34',
    name: 'Snapshot-Priority-Overrides-Network',
    description: 'Persisted snapshots must always take priority over network data on first frame. Network data may silently replace persisted data after first frame. Runs synchronously.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const networkDataUsedBeforeSnapshot = context.networkDataUsedBeforeSnapshot;
        const hasPersistedSnapshot = context.hasPersistedSnapshot;
        const isFirstFrame = context.isFirstFrame;
        if (isFirstFrame && hasPersistedSnapshot && networkDataUsedBeforeSnapshot) {
            throw new InvariantViolationError('SYSTEM_STATE.F34', 'SYSTEM_STATE', 'F34', 'F34 violation: Network data used before persisted snapshot on first frame. Snapshot must take priority.', {
                networkDataUsedBeforeSnapshot,
                hasPersistedSnapshot,
                isFirstFrame,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F34_SNAPSHOT_PRIORITY_OVERRIDES_NETWORK.js.map