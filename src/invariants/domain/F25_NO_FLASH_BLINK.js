/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F25: No Flash Blink
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_RENDER_AND_TRANSITIONS
 *
 * Telos: No flash/blink during transitions, no placeholder ViewModels replacing real ViewModels,
 * no transient DOM swaps. UI must maintain continuity during state transitions.
 *
 * Enforcement:
 * - Prevents placeholder ViewModels from replacing real ViewModels after continuity baseline is initialized
 * - Prevents transient DOM swaps that cause visual flash/blink
 * - Ensures continuity cache stability during transitions
 * - Prevents WorkspaceFrame remounts (except intentional full reload)
 */
import { InvariantViolationError } from '../../core/errors';
export const F25_NO_FLASH_BLINK = {
    category: 'DOMAIN_LOGIC',
    code: 'F25',
    name: 'No Flash Blink',
    description: 'No flash/blink during transitions, no placeholder ViewModels replacing real ViewModels, no transient DOM swaps.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasFlash = context.hasFlash;
        const hasBlink = context.hasBlink;
        const hasPlaceholderWithoutForm = context.hasPlaceholderWithoutForm;
        const hasTransientDOMSwap = context.hasTransientDOMSwap;
        const workspaceFrameRemounted = context.workspaceFrameRemounted;
        const continuityBaselineInitialized = context.continuityBaselineInitialized;
        const sourceComponent = context.sourceComponent;
        // If flash or blink detected, that's a violation
        if (hasFlash === true || hasBlink === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F25', 'DOMAIN_LOGIC', 'F25', 'F25_NO_FLASH_BLINK violation: Flash or blink detected during transition. UI must maintain continuity during state transitions.', {
                hasFlash,
                hasBlink,
                hasPlaceholderWithoutForm,
                hasTransientDOMSwap,
                workspaceFrameRemounted,
                continuityBaselineInitialized,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        // If placeholder ViewModel replaces real ViewModel after continuity baseline is initialized, that's a violation
        if (hasPlaceholderWithoutForm === true && continuityBaselineInitialized === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F25', 'DOMAIN_LOGIC', 'F25', 'F25_NO_FLASH_BLINK violation: Placeholder ViewModel replaced real ViewModel after continuity baseline was initialized. Placeholder ViewModels must not replace real ViewModels once continuity is established.', {
                hasPlaceholderWithoutForm: true,
                continuityBaselineInitialized: true,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        // If transient DOM swap detected, that's a violation
        if (hasTransientDOMSwap === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F25', 'DOMAIN_LOGIC', 'F25', 'F25_NO_FLASH_BLINK violation: Transient DOM swap detected. DOM must maintain stable identity during transitions.', {
                hasTransientDOMSwap: true,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        // If WorkspaceFrame remounts (except intentional full reload), that's a violation
        if (workspaceFrameRemounted === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F25', 'DOMAIN_LOGIC', 'F25', 'F25_NO_FLASH_BLINK violation: WorkspaceFrame remounted. WorkspaceFrame should only mount once per app lifecycle. Remounts cause flash/blink.', {
                workspaceFrameRemounted: true,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F25_NO_FLASH_BLINK.js.map