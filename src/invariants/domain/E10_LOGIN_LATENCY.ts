/**
 * ✅ ENTELECHIA INVARIANT ENGINE — E10: Login Latency
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: RUNTIME
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const E10_LOGIN_LATENCY: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'E10',
  name: 'Login Latency',
  description: 'Ensures login operation completes within latency budget (≤ 200ms for perceived instant response).',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const loginLatency = context.loginLatency as number | undefined
    const loginStartTime = context.loginStartTime as number | undefined
    const loginCompleteTime = context.loginCompleteTime as number | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    const LATENCY_BUDGET_MS = 200

    if (loginLatency !== undefined && loginLatency > LATENCY_BUDGET_MS) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.E10',
        'DOMAIN_LOGIC',
        'E10',
        `E10_LOGIN_LATENCY violation: Login latency ${loginLatency}ms exceeds budget of ${LATENCY_BUDGET_MS}ms. Login must complete within latency budget for perceived instant response.`,
        {
          loginLatency,
          loginStartTime,
          loginCompleteTime,
          latencyBudget: LATENCY_BUDGET_MS,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    if (loginStartTime !== undefined && loginCompleteTime !== undefined) {
      const calculatedLatency = loginCompleteTime - loginStartTime
      if (calculatedLatency > LATENCY_BUDGET_MS) {
        throw new InvariantViolationError(
          'DOMAIN_LOGIC.E10',
          'DOMAIN_LOGIC',
          'E10',
          `E10_LOGIN_LATENCY violation: Calculated login latency ${calculatedLatency}ms exceeds budget of ${LATENCY_BUDGET_MS}ms.`,
          {
            loginLatency: calculatedLatency,
            loginStartTime,
            loginCompleteTime,
            latencyBudget: LATENCY_BUDGET_MS,
            sourceComponent,
            source: context.sourceFile || 'unknown',
          }
        )
      }
    }
  },
}


