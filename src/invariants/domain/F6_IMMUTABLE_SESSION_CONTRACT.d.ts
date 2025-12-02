/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F6: Immutable Session Contract
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 *
 * Telos: Session contract must be immutable and have a fixed shape.
 * Session shape must be: { userId, email, issuedAt, expiresAt }
 * This ensures session data consistency across the application.
 *
 * Enforcement:
 * - Verifies session has required fields (userId, email, issuedAt, expiresAt)
 * - Ensures session contract is not mutated after creation
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F6_IMMUTABLE_SESSION_CONTRACT: InvariantDefinition;
//# sourceMappingURL=F6_IMMUTABLE_SESSION_CONTRACT.d.ts.map