/**
 * ✅ ENTELECHIA INVARIANT ENGINE — E8: Intent Preload
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: RUNTIME
 */
import { InvariantViolationError } from '../../core/errors';
export const E8_INTENT_PRELOAD = {
    category: 'DOMAIN_LOGIC',
    code: 'E8',
    name: 'Intent Preload',
    description: 'Ensures intent-based preloading succeeds - when user hovers over navigation item, data must be preloaded before navigation occurs.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const preloadSucceeded = context.preloadSucceeded;
        const preloadFailed = context.preloadFailed;
        const preloadError = context.preloadError;
        const sourceComponent = context.sourceComponent;
        if (preloadFailed === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.E8', 'DOMAIN_LOGIC', 'E8', `E8_INTENT_PRELOAD violation: Intent preload failed. Data must be preloaded before navigation. Error: ${preloadError || 'unknown'}`, {
                preloadSucceeded: false,
                preloadFailed: true,
                preloadError,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        if (!preloadSucceeded && !preloadFailed) {
            // Preload not attempted - this is acceptable (not all navigation requires preload)
            return;
        }
    },
};
//# sourceMappingURL=E8_INTENT_PRELOAD.js.map