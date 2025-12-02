/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I16: Backend Readiness Check
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: BEFORE_AUTH_REQUEST
 *
 * Telos: Backend readiness must be checked before making auth requests.
 * Prevents "Load failed" errors on refresh when backend is starting up.
 * This follows Stripe/Apple standard: health check before auth requests.
 */
import type { InvariantDefinition } from '../../core/types';
export declare const I16_BACKEND_READINESS_CHECK: InvariantDefinition;
//# sourceMappingURL=I16_BACKEND_READINESS_CHECK.d.ts.map