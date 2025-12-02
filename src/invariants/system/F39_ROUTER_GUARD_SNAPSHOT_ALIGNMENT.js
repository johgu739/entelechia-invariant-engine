/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F39: Router-Guard-Snapshot-Alignment
 *
 * CATEGORY: SYSTEM_ROUTER
 * ENFORCEMENT: BEFORE_ROUTE_RESOLUTION
 */
import { InvariantViolationError } from '../../core/errors';
export const F39_ROUTER_GUARD_SNAPSHOT_ALIGNMENT = {
    category: 'SYSTEM_ROUTER',
    code: 'F39',
    name: 'Router-Guard-Snapshot-Alignment',
    description: 'Router guard must align with persisted snapshots, not just network state. Guard must use persisted SystemStateView if available.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const guardUsesNetworkBeforeSnapshot = context.guardUsesNetworkBeforeSnapshot;
        const hasPersistedSSV = context.hasPersistedSSV;
        const routerPath = context.routerPath;
        if (guardUsesNetworkBeforeSnapshot && hasPersistedSSV) {
            throw new InvariantViolationError('SYSTEM_ROUTER.F39', 'SYSTEM_ROUTER', 'F39', 'F39 violation: Router guard uses network before persisted snapshot. Guard must prioritize persisted SystemStateView.', {
                guardUsesNetworkBeforeSnapshot,
                hasPersistedSSV,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F39_ROUTER_GUARD_SNAPSHOT_ALIGNMENT.js.map