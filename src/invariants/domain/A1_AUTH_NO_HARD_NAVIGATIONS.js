/**
 * ✅ ENTELECHIA INVARIANT ENGINE — A1: Auth No Hard Navigations
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 *
 * Telos: No hard navigations (window.location.href) after login or during auth flows.
 * Must use SPA navigation (router.navigate) to preserve WebSocket connections and SPA state.
 *
 * Enforcement:
 * - Prevents window.location.href usage after login
 * - Ensures SPA navigation is used instead
 */
import { InvariantViolationError } from '../../core/errors';
export const A1_AUTH_NO_HARD_NAVIGATIONS = {
    category: 'DOMAIN_LOGIC',
    code: 'A1',
    name: 'Auth No Hard Navigations',
    description: 'No hard navigations (window.location.href) after login or during auth flows. Must use SPA navigation (router.navigate) to preserve WebSocket connections and SPA state.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasHardNavigation = context.hasHardNavigation;
        const navigationType = context.navigationType;
        const sourceComponent = context.sourceComponent;
        // If hard navigation detected, that's a violation
        if (hasHardNavigation === true || navigationType === 'hard') {
            throw new InvariantViolationError('DOMAIN_LOGIC.A1', 'DOMAIN_LOGIC', 'A1', 'A1_AUTH_NO_HARD_NAVIGATIONS violation: Hard navigation (window.location.href) detected after login or during auth flow. Must use SPA navigation (router.navigate) to preserve WebSocket connections and SPA state.', {
                hasHardNavigation: true,
                navigationType,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=A1_AUTH_NO_HARD_NAVIGATIONS.js.map