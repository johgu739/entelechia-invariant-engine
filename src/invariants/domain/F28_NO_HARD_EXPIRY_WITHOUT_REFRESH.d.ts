/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F28: No Hard Expiry Without Refresh
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 *
 * Telos: Access tokens must be refreshed silently BEFORE requests, never after 401.
 * If refresh token is valid, expired access tokens must be refreshed proactively.
 * This ensures users never see 401 errors when refresh is possible.
 *
 * Enforcement:
 * - Ensures silent refresh happens BEFORE requests (has401FromExpiredToken should be false)
 * - Verifies refresh token is valid before allowing 401 (refreshTokenValid check)
 * - Prevents 401 errors from expired access tokens when refresh is possible
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F28_NO_HARD_EXPIRY_WITHOUT_REFRESH: InvariantDefinition;
//# sourceMappingURL=F28_NO_HARD_EXPIRY_WITHOUT_REFRESH.d.ts.map