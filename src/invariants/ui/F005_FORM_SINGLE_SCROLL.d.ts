/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F005: Form Single Scroll Container
 *
 * CATEGORY: UI_FORM
 * ENFORCEMENT: ON_FORM_RENDER
 *
 * Telos: Forms must have exactly one scroll container.
 * Multiple scroll containers cause competing scroll contexts and user confusion.
 * FORM: Single scroll region (flex-1 min-h-0 overflow-y-auto). ACT: User scrolls one region. STATE: Scroll position maintained correctly.
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F005_FORM_SINGLE_SCROLL: InvariantDefinition;
//# sourceMappingURL=F005_FORM_SINGLE_SCROLL.d.ts.map