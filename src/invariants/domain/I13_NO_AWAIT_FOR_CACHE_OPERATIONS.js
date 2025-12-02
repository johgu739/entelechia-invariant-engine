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
import { InvariantViolationError } from '../../core/errors';
export const I13_NO_AWAIT_FOR_CACHE_OPERATIONS = {
    category: 'DOMAIN_LOGIC',
    code: 'I13',
    name: 'No Await For Cache Operations',
    description: 'Cache operations must be synchronous, not async. No await for cache operations (invalidateQueries, setQueryData, etc.).',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasAwaitForCache = context.hasAwaitForCache;
        const cacheOperationType = context.cacheOperationType;
        const sourceComponent = context.sourceComponent;
        // If await for cache operation detected, that's a violation
        if (hasAwaitForCache === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.I13', 'DOMAIN_LOGIC', 'I13', `I13_NO_AWAIT_FOR_CACHE_OPERATIONS violation: Await detected for cache operation${cacheOperationType ? ` (${cacheOperationType})` : ''}. Cache operations must be synchronous/fire-and-forget, not awaited.`, {
                hasAwaitForCache: true,
                cacheOperationType,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=I13_NO_AWAIT_FOR_CACHE_OPERATIONS.js.map