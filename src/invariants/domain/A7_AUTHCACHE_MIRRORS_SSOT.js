/**
 * ✅ ENTELECHIA INVARIANT ENGINE — A7: AuthCache Mirrors SSOT
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: AFTER_AUTH_STATE_CHANGE
 *
 * Telos: Auth cache must mirror the single source of truth (backend session state).
 * Cache must be invalidated when backend session changes.
 * This ensures FORM → ACT → STATE coherence.
 */
import { InvariantViolationError } from '../../core/errors';
export const A7_AUTHCACHE_MIRRORS_SSOT = {
    category: 'DOMAIN_LOGIC',
    code: 'A7',
    name: 'AuthCache Mirrors SSOT',
    description: 'Auth cache must mirror the single source of truth (backend session state). Cache must be invalidated when backend session changes.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const cacheStale = context.cacheStale;
        const backendSessionId = context.backendSessionId;
        const cacheSessionId = context.cacheSessionId;
        const sourceComponent = context.sourceComponent;
        // If cache is stale, that's a violation
        if (cacheStale === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.A7', 'DOMAIN_LOGIC', 'A7', 'A7_AUTHCACHE_MIRRORS_SSOT violation: Auth cache is stale. Cache must be invalidated when backend session changes.', {
                cacheStale: true,
                backendSessionId,
                cacheSessionId,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        // If session IDs don't match, that's a violation
        if (backendSessionId !== undefined && cacheSessionId !== undefined && backendSessionId !== cacheSessionId) {
            throw new InvariantViolationError('DOMAIN_LOGIC.A7', 'DOMAIN_LOGIC', 'A7', `A7_AUTHCACHE_MIRRORS_SSOT violation: Auth cache session ID (${cacheSessionId}) does not match backend session ID (${backendSessionId}). Cache must mirror backend state.`, {
                backendSessionId,
                cacheSessionId,
                mismatch: true,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=A7_AUTHCACHE_MIRRORS_SSOT.js.map