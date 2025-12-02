/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F76: Refresh Prompt Required
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: AFTER_STATE_STALE_DETECTED
 *
 * Telos: When state becomes stale, a refresh prompt must be shown to the user.
 * User must be able to refresh to get the latest state.
 * This ensures user awareness of stale state and provides recovery mechanism.
 */
import { InvariantViolationError } from '../../core/errors';
export const F76_REFRESH_PROMPT_REQUIRED = {
    category: 'DOMAIN_LOGIC',
    code: 'F76',
    name: 'Refresh Prompt Required',
    description: 'When state becomes stale, a refresh prompt must be shown to the user. User must be able to refresh to get the latest state.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const stateStale = context.stateStale;
        const refreshPromptShown = context.refreshPromptShown;
        const sourceComponent = context.sourceComponent;
        // If state is stale but refresh prompt not shown, that's a violation
        if (stateStale === true && refreshPromptShown !== true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F76', 'DOMAIN_LOGIC', 'F76', 'F76_REFRESH_PROMPT_REQUIRED violation: State is stale but refresh prompt not shown. User must be notified and able to refresh.', {
                stateStale: true,
                refreshPromptShown: false,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F76_REFRESH_PROMPT_REQUIRED.js.map