/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F82: Mutation StateView Synchrony
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: AFTER_MUTATION_COMPLETE
 *
 * Telos: Mutations and StateView refreshes must be synchronized.
 * After a mutation completes, the StateView must be refreshed before navigation or UI updates.
 * This ensures FORM → ACT → STATE coherence.
 *
 * NOTE: This is different from UI_SCROLL.F82 (Single Scroll Container).
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F82_MUTATION_STATEVIEW_SYNCHRONY: InvariantDefinition;
//# sourceMappingURL=F82_MUTATION_STATEVIEW_SYNCHRONY.d.ts.map