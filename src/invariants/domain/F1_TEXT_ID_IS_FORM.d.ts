/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F1: Text-ID Is FORM
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_ROUTER_GUARD
 *
 * Telos: Text-ID (nodeId) is FORM - it must be deterministic and absolute.
 * Text-ID is the canonical identifier for nodes and must be used consistently.
 *
 * Enforcement:
 * - Verifies nodeId is a valid text-ID (non-empty string)
 * - Ensures text-ID is used as FORM (canonical identifier)
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F1_TEXT_ID_IS_FORM: InvariantDefinition;
//# sourceMappingURL=F1_TEXT_ID_IS_FORM.d.ts.map