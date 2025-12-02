/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I16: Backend Readiness Check
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: BEFORE_AUTH_REQUEST
 * 
 * Telos: Backend readiness must be checked before making auth requests.
 * Prevents "Load failed" errors on refresh when backend is starting up.
 * This follows Stripe/Apple standard: health check before auth requests.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const I16_BACKEND_READINESS_CHECK: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'I16',
  name: 'Backend Readiness Check',
  description: 'Backend readiness must be checked before making auth requests. Prevents "Load failed" errors on refresh when backend is starting up.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const isCheckingReadiness = context.isCheckingReadiness as boolean | undefined
    const backendReady = context.backendReady as boolean | undefined
    const timeout = context.timeout as boolean | undefined
    const waitTime = context.waitTime as number | undefined
    const maxWaitTime = context.maxWaitTime as number | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If readiness check is being performed, that's good - no violation
    if (isCheckingReadiness === true) {
      return
    }

    // If backend is ready, that's good - no violation
    if (backendReady === true) {
      return
    }

    // If timeout occurred, that's a violation (backend not ready)
    if (timeout === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.I16',
        'DOMAIN_LOGIC',
        'I16',
        `I16_BACKEND_READINESS_CHECK violation: Backend not ready after timeout (${waitTime}ms / ${maxWaitTime}ms). Auth requests must wait for backend readiness.`,
        {
          timeout: true,
          waitTime,
          maxWaitTime,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    // If backendReady is explicitly false and no timeout occurred, that's a violation
    // TypeScript: After checking timeout === true above, timeout can only be false | undefined here
    if (backendReady === false && (timeout === false || timeout === undefined)) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.I16',
        'DOMAIN_LOGIC',
        'I16',
        'I16_BACKEND_READINESS_CHECK violation: Backend readiness check failed. Auth requests must wait for backend readiness.',
        {
          backendReady: false,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}

