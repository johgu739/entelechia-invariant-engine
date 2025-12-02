/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I13: No Await For Cache Operations
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_CACHE_OPERATIONS
 *
 * Telos: Cache operations must be synchronous, not async.
 * No await for cache operations (invalidateQueries, setQueryData, etc.).
 * Cache operations should be fire-and-forget to avoid blocking.
 *
 * Enforcement:
 * - Prevents await for cache operations
 * - Ensures cache operations are synchronous/fire-and-forget
 */
import type { InvariantDefinition } from '../../core/types';
export declare const I13_NO_AWAIT_FOR_CACHE_OPERATIONS: InvariantDefinition;
//# sourceMappingURL=I13_NO_AWAIT_FOR_CACHE_OPERATIONS.d.ts.map