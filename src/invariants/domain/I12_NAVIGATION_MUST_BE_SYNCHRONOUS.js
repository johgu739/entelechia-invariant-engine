/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I12: Navigation Must Be Synchronous
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_NAVIGATION
 *
 * Telos: Navigation must be synchronous, not async.
 * Navigation should not await promises or async operations.
 * This ensures deterministic navigation behavior.
 *
 * Enforcement:
 * - Prevents async navigation (await in navigation code)
 * - Ensures navigation is synchronous
 */
import { InvariantViolationError } from '../../core/errors';
export const I12_NAVIGATION_MUST_BE_SYNCHRONOUS = {
    category: 'DOMAIN_LOGIC',
    code: 'I12',
    name: 'Navigation Must Be Synchronous',
    description: 'Navigation must be synchronous, not async. Navigation should not await promises or async operations.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const isAsyncNavigation = context.isAsyncNavigation;
        const hasAwait = context.hasAwait;
        const sourceComponent = context.sourceComponent;
        // If async navigation detected, that's a violation
        if (isAsyncNavigation === true || hasAwait === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.I12', 'DOMAIN_LOGIC', 'I12', 'I12_NAVIGATION_MUST_BE_SYNCHRONOUS violation: Async navigation detected. Navigation must be synchronous, not async. Navigation should not await promises or async operations.', {
                isAsyncNavigation: true,
                hasAwait: true,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=I12_NAVIGATION_MUST_BE_SYNCHRONOUS.js.map