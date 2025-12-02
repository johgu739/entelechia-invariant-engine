/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F3: Router Guard Deterministic
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_ROUTER_GUARD
 * 
 * Telos: Router guard must be deterministic - no async work, no network calls.
 * Router guard should use cached data (snapshot) only.
 * 
 * Enforcement:
 * - Prevents async work in router guard
 * - Prevents network calls in router guard
 * - Ensures router guard uses cached data only
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F3_ROUTER_GUARD_DETERMINISTIC: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F3',
  name: 'Router Guard Deterministic',
  description: 'Router guard must be deterministic - no async work, no network calls. Router guard should use cached data (snapshot) only.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasAsyncWork = context.hasAsyncWork as boolean | undefined
    const hasNetworkCall = context.hasNetworkCall as boolean | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If async work detected, that's a violation
    if (hasAsyncWork === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F3',
        'DOMAIN_LOGIC',
        'F3',
        'F3_ROUTER_GUARD_DETERMINISTIC violation: Async work detected in router guard. Router guard must be deterministic and use cached data (snapshot) only.',
        {
          hasAsyncWork: true,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    // If network call detected, that's a violation
    if (hasNetworkCall === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F3',
        'DOMAIN_LOGIC',
        'F3',
        'F3_ROUTER_GUARD_DETERMINISTIC violation: Network call detected in router guard. Router guard must be deterministic and use cached data (snapshot) only.',
        {
          hasNetworkCall: true,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


