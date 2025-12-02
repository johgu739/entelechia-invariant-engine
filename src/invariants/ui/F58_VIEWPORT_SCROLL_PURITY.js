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
import { InvariantViolationError } from '../../core/errors';
export const F58_VIEWPORT_SCROLL_PURITY = {
    category: 'UI_SCROLL',
    code: 'F58',
    name: 'Viewport Scroll Purity',
    description: 'Guarantees no vertical scroll on document root. No scrollbars except inside content region. No layout may introduce content that forces <html> height > 100vh. Rejects modals improperly mounted, components using fixed positioning without frame constraints, container leakage.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const htmlHasVerticalScroll = context.htmlHasVerticalScroll;
        const htmlHeightExceedsViewport = context.htmlHeightExceedsViewport;
        const hasScrollbarOutsideContentRegion = context.hasScrollbarOutsideContentRegion;
        const modalImproperlyMounted = context.modalImproperlyMounted;
        const componentUsesFixedPositionWithoutFrameConstraints = context.componentUsesFixedPositionWithoutFrameConstraints;
        const hasContainerLeakage = context.hasContainerLeakage;
        if (htmlHasVerticalScroll === true) {
            throw new InvariantViolationError('UI_SCROLL.F58', 'UI_SCROLL', 'F58', 'F58_VIEWPORT_SCROLL_PURITY violation: <html> has vertical scroll. Document root must not scroll.', {
                htmlHasVerticalScroll: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (htmlHeightExceedsViewport === true) {
            throw new InvariantViolationError('UI_SCROLL.F58', 'UI_SCROLL', 'F58', 'F58_VIEWPORT_SCROLL_PURITY violation: <html> height exceeds viewport (100vh). Layout must not force <html> height > 100vh.', {
                htmlHeightExceedsViewport: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (hasScrollbarOutsideContentRegion === true) {
            throw new InvariantViolationError('UI_SCROLL.F58', 'UI_SCROLL', 'F58', 'F58_VIEWPORT_SCROLL_PURITY violation: Scrollbar detected outside content region. Only content region may have scrollbars.', {
                hasScrollbarOutsideContentRegion: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (modalImproperlyMounted === true) {
            throw new InvariantViolationError('UI_SCROLL.F58', 'UI_SCROLL', 'F58', 'F58_VIEWPORT_SCROLL_PURITY violation: Modal improperly mounted. Modals must be mounted within frame constraints.', {
                modalImproperlyMounted: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (componentUsesFixedPositionWithoutFrameConstraints === true) {
            throw new InvariantViolationError('UI_SCROLL.F58', 'UI_SCROLL', 'F58', 'F58_VIEWPORT_SCROLL_PURITY violation: Component uses fixed positioning without frame constraints. Fixed positioning must respect frame boundaries.', {
                componentUsesFixedPositionWithoutFrameConstraints: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (hasContainerLeakage === true) {
            throw new InvariantViolationError('UI_SCROLL.F58', 'UI_SCROLL', 'F58', 'F58_VIEWPORT_SCROLL_PURITY violation: Container leakage detected. Containers must not leak outside frame boundaries.', {
                hasContainerLeakage: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F58_VIEWPORT_SCROLL_PURITY.js.map