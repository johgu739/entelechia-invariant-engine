/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F5: Auth Single Source of Truth
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 *
 * Telos: Authentication state must have a single source of truth (React Query).
 * No duplicate auth state in Zustand, localStorage, or other stores.
 * Auth status must come from React Query only.
 *
 * Enforcement:
 * - Verifies React Query is the only source of auth status
 * - Ensures Zustand only stores UI metadata (email), never auth status
 * - Prevents auth cache from diverging from React Query
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F5_AUTH_SINGLE_SOURCE_OF_TRUTH: InvariantDefinition;
//# sourceMappingURL=F5_AUTH_SINGLE_SOURCE_OF_TRUTH.d.ts.map