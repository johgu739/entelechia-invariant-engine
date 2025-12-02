/**
 * ✅ ENTELECHIA INVARIANT ENGINE — A3: No Double Mounts
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_COMPONENT_MOUNT
 *
 * Telos: Components should not mount twice in the same render cycle.
 * Mount count should be 1 (except React StrictMode double mount in dev).
 * Double mounts cause duplicate effects, duplicate API calls, and state inconsistencies.
 *
 * Enforcement:
 * - Prevents double mounts (mountCount > 1 in production, > 2 in dev)
 * - Allows React StrictMode double mount in dev (mountCount === 2)
 */
import type { InvariantDefinition } from '../../core/types';
export declare const A3_NO_DOUBLE_MOUNTS: InvariantDefinition;
//# sourceMappingURL=A3_NO_DOUBLE_MOUNTS.d.ts.map