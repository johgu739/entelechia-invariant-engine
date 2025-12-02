/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F55_ROUTER: Router No Hard Refresh
 *
 * CATEGORY: SYSTEM_ROUTER
 * ENFORCEMENT: BEFORE_ROUTE_RESOLUTION
 */
import { InvariantViolationError } from '../../core/errors';
export const F55_ROUTER_NO_HARD_REFRESH = {
    category: 'SYSTEM_ROUTER',
    code: 'F55_ROUTER',
    name: 'Router No Hard Refresh',
    description: 'The system must never cause a browser-level full page reload. All navigation must remain inside the SPA router.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        if (typeof window !== 'undefined' && window.performance) {
            const navigation = window.performance.getEntriesByType('navigation')[0];
            // navigation.type: 0 = navigate, 1 = reload, 2 = back_forward, 255 = prerender
            if (navigation && navigation.type === 1) {
                throw new InvariantViolationError('SYSTEM_ROUTER.F55_ROUTER', 'SYSTEM_ROUTER', 'F55_ROUTER', 'F55_ROUTER_NO_HARD_REFRESH violation: Browser hard refresh detected. All navigation must use SPA router.', {
                    navigationType: navigation.type,
                    source: context.sourceComponent || context.sourceFile || 'unknown',
                    routerPath: context.routerPath || window.location.pathname,
                });
            }
        }
        const usedAnchorTag = context.usedAnchorTag;
        const usesAHref = context.usesAHref;
        if (usedAnchorTag === true || usesAHref === true) {
            throw new InvariantViolationError('SYSTEM_ROUTER.F55_ROUTER', 'SYSTEM_ROUTER', 'F55_ROUTER', 'F55_ROUTER_NO_HARD_REFRESH violation: <a href> used instead of router.navigate(). All navigation must use SPA router.', {
                usedAnchorTag: usedAnchorTag || usesAHref,
                source: context.sourceComponent || context.sourceFile || 'unknown',
                routerPath: context.routerPath || (typeof window !== 'undefined' ? window.location.pathname : 'unknown'),
            });
        }
        const usesDirectAnchorNavigation = context.usesDirectAnchorNavigation;
        if (usesDirectAnchorNavigation === true) {
            throw new InvariantViolationError('SYSTEM_ROUTER.F55_ROUTER', 'SYSTEM_ROUTER', 'F55_ROUTER', 'F55_ROUTER_NO_HARD_REFRESH violation: Direct anchor navigation detected. All navigation must use router.navigate().', {
                usesDirectAnchorNavigation: true,
                source: context.sourceComponent || context.sourceFile || 'unknown',
                routerPath: context.routerPath || (typeof window !== 'undefined' ? window.location.pathname : 'unknown'),
            });
        }
        const misusesHistoryReplaceState = context.misusesHistoryReplaceState;
        if (misusesHistoryReplaceState === true) {
            throw new InvariantViolationError('SYSTEM_ROUTER.F55_ROUTER', 'SYSTEM_ROUTER', 'F55_ROUTER', 'F55_ROUTER_NO_HARD_REFRESH violation: history.replaceState misuse detected. All navigation must use router.navigate().', {
                misusesHistoryReplaceState: true,
                source: context.sourceComponent || context.sourceFile || 'unknown',
                routerPath: context.routerPath || (typeof window !== 'undefined' ? window.location.pathname : 'unknown'),
            });
        }
        const routerProviderMissing = context.routerProviderMissing;
        if (routerProviderMissing === true) {
            throw new InvariantViolationError('SYSTEM_ROUTER.F55_ROUTER', 'SYSTEM_ROUTER', 'F55_ROUTER', 'F55_ROUTER_NO_HARD_REFRESH violation: RouterProvider missing. All pages must be wrapped in RouterProvider.', {
                routerProviderMissing: true,
                source: context.sourceComponent || context.sourceFile || 'unknown',
                routerPath: context.routerPath || (typeof window !== 'undefined' ? window.location.pathname : 'unknown'),
            });
        }
        const navigationType = context.navigationType;
        const isSpaNavigation = context.isSpaNavigation;
        if (navigationType === 1 || isSpaNavigation === false) {
            throw new InvariantViolationError('SYSTEM_ROUTER.F55_ROUTER', 'SYSTEM_ROUTER', 'F55_ROUTER', 'F55_ROUTER_NO_HARD_REFRESH violation: Navigation event handled by browser instead of SPA router.', {
                navigationType,
                isSpaNavigation,
                source: context.sourceComponent || context.sourceFile || 'unknown',
                routerPath: context.routerPath || (typeof window !== 'undefined' ? window.location.pathname : 'unknown'),
            });
        }
    },
};
//# sourceMappingURL=F55_ROUTER_NO_HARD_REFRESH.js.map