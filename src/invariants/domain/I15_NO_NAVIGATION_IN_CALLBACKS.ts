/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I15: No Navigation In Callbacks
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_CALLBACK_EXECUTION
 * 
 * Telos: Navigation must not happen in callbacks (event handlers, promise callbacks, etc.).
 * Navigation should happen in effects or explicit event handlers, not in nested callbacks.
 * This ensures deterministic navigation timing.
 * 
 * Enforcement:
 * - Prevents navigation in callbacks (promise callbacks, nested handlers, etc.)
 * - Ensures navigation happens in effects or explicit event handlers
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const I15_NO_NAVIGATION_IN_CALLBACKS: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'I15',
  name: 'No Navigation In Callbacks',
  description: 'Navigation must not happen in callbacks (event handlers, promise callbacks, etc.). Navigation should happen in effects or explicit event handlers.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const navigationInCallback = context.navigationInCallback as boolean | undefined
    const callbackType = context.callbackType as string | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If navigation in callback detected, that's a violation
    if (navigationInCallback === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.I15',
        'DOMAIN_LOGIC',
        'I15',
        `I15_NO_NAVIGATION_IN_CALLBACKS violation: Navigation detected in callback${callbackType ? ` (${callbackType})` : ''}. Navigation must not happen in callbacks. Navigation should happen in effects or explicit event handlers, not in nested callbacks.`,
        {
          navigationInCallback: true,
          callbackType,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


