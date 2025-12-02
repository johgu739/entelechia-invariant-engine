/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F58: Viewport Scroll Purity
 *
 * CATEGORY: UI_SCROLL
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 *
 * Guarantees no vertical scroll on document root.
 * No scrollbars except inside content region.
 * No layout may introduce content that forces <html> height > 100vh.
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F58_VIEWPORT_SCROLL_PURITY: InvariantDefinition;
//# sourceMappingURL=F58_VIEWPORT_SCROLL_PURITY.d.ts.map