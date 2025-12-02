/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I19: No Auth Race Conditions
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 * 
 * Telos: Auth flows must not have race conditions.
 * Multiple concurrent auth requests must be serialized or deduplicated.
 * This ensures deterministic auth state transitions.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const I19_NO_AUTH_RACE_CONDITIONS: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'I19',
  name: 'No Auth Race Conditions',
  description: 'Auth flows must not have race conditions. Multiple concurrent auth requests must be serialized or deduplicated.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const concurrentAuthRequests = context.concurrentAuthRequests as number | undefined
    const hasRaceCondition = context.hasRaceCondition as boolean | undefined
    const authRequestIds = context.authRequestIds as string[] | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If race condition detected, that's a violation
    if (hasRaceCondition === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.I19',
        'DOMAIN_LOGIC',
        'I19',
        'I19_NO_AUTH_RACE_CONDITIONS violation: Race condition detected in auth flow. Multiple concurrent auth requests must be serialized or deduplicated.',
        {
          hasRaceCondition: true,
          concurrentAuthRequests,
          authRequestIds,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    // If more than one concurrent auth request, that's a violation
    if (concurrentAuthRequests !== undefined && concurrentAuthRequests > 1) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.I19',
        'DOMAIN_LOGIC',
        'I19',
        `I19_NO_AUTH_RACE_CONDITIONS violation: ${concurrentAuthRequests} concurrent auth requests detected. Auth requests must be serialized or deduplicated.`,
        {
          concurrentAuthRequests,
          authRequestIds,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


