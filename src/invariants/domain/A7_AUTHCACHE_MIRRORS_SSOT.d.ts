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
import type { InvariantDefinition } from '../../core/types';
export declare const A7_AUTHCACHE_MIRRORS_SSOT: InvariantDefinition;
//# sourceMappingURL=A7_AUTHCACHE_MIRRORS_SSOT.d.ts.map