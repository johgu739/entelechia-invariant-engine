/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F4: Node Definitions Absolute
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_ROUTER_GUARD
 *
 * Telos: Node definitions must be absolute - no fallbacks, no heuristics.
 * If a node doesn't exist in SystemStateView, it must be treated as non-existent.
 *
 * Enforcement:
 * - Prevents fallback behavior when node doesn't exist
 * - Prevents heuristic node resolution
 * - Ensures absolute node existence checks
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F4_NODE_DEFINITIONS_ABSOLUTE: InvariantDefinition;
//# sourceMappingURL=F4_NODE_DEFINITIONS_ABSOLUTE.d.ts.map