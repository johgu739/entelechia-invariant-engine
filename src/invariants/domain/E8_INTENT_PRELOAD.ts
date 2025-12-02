/**
 * ✅ ENTELECHIA INVARIANT ENGINE — E8: Intent Preload
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: RUNTIME
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const E8_INTENT_PRELOAD: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'E8',
  name: 'Intent Preload',
  description: 'Ensures intent-based preloading succeeds - when user hovers over navigation item, data must be preloaded before navigation occurs.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const preloadSucceeded = context.preloadSucceeded as boolean | undefined
    const preloadFailed = context.preloadFailed as boolean | undefined
    const preloadError = context.preloadError as string | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    if (preloadFailed === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.E8',
        'DOMAIN_LOGIC',
        'E8',
        `E8_INTENT_PRELOAD violation: Intent preload failed. Data must be preloaded before navigation. Error: ${preloadError || 'unknown'}`,
        {
          preloadSucceeded: false,
          preloadFailed: true,
          preloadError,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    if (!preloadSucceeded && !preloadFailed) {
      // Preload not attempted - this is acceptable (not all navigation requires preload)
      return
    }
  },
}

