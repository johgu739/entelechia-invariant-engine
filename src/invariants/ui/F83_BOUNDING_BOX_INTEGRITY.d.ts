/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F83: Bounding Box Integrity
 *
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 *
 * Telos: A child element may not claim 100% height, or shrink to min-height:0,
 * unless the parent has explicit size constraints — FORM requires bounding-box determinacy.
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F83_BOUNDING_BOX_INTEGRITY: InvariantDefinition;
//# sourceMappingURL=F83_BOUNDING_BOX_INTEGRITY.d.ts.map