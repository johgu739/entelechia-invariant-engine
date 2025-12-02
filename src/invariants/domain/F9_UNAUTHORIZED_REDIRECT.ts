/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F9: Unauthorized Redirect
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: ON_AUTH_CHECK
 * 
 * When a user is unauthorized, they MUST be redirected immediately.
 * No partial rendering, no flash of protected content.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F9_UNAUTHORIZED_REDIRECT: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F9',
  name: 'Unauthorized Redirect',
  description: 'When a user is unauthorized, they MUST be redirected immediately. No partial rendering, no flash of protected content.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const unauthorizedAccessDetected = context.unauthorizedAccessDetected as boolean | undefined
    const redirectExecuted = context.redirectExecuted as boolean | undefined
    const redirectDelay = context.redirectDelay as number | undefined
    const sourceComponent = context.sourceComponent as string | undefined
    const sourceFile = context.sourceFile as string | undefined

    if (unauthorizedAccessDetected === true && redirectExecuted !== true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F9',
        'DOMAIN_LOGIC',
        'F9',
        'F9 violation: Unauthorized access detected but redirect not executed. User must be redirected immediately.',
        {
          unauthorizedAccessDetected: true,
          redirectExecuted: false,
          source: sourceComponent || sourceFile || 'unknown',
        }
      )
    }

    if (unauthorizedAccessDetected === true && redirectDelay !== undefined && redirectDelay > 0) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F9',
        'DOMAIN_LOGIC',
        'F9',
        `F9 violation: Unauthorized redirect delayed by ${redirectDelay}ms. Redirect must be immediate.`,
        {
          unauthorizedAccessDetected: true,
          redirectExecuted: true,
          redirectDelay,
          source: sourceComponent || sourceFile || 'unknown',
        }
      )
    }
  },
}


