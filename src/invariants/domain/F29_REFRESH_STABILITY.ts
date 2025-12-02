/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F29: Refresh Stability
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: RUNTIME
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F29_REFRESH_STABILITY: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F29',
  name: 'Refresh Stability',
  description: 'Ensures refresh token stability - refresh token must not be invalidated during refresh operation unless explicitly required (e.g., security rotation).',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const refreshTokenInvalidated = context.refreshTokenInvalidated as boolean | undefined
    const invalidatedReason = context.invalidatedReason as string | undefined
    const isSecurityRotation = context.isSecurityRotation as boolean | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    if (refreshTokenInvalidated === true && isSecurityRotation !== true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F29',
        'DOMAIN_LOGIC',
        'F29',
        `F29_REFRESH_STABILITY violation: Refresh token was invalidated during refresh operation without security rotation. Reason: ${invalidatedReason || 'unknown'}`,
        {
          refreshTokenInvalidated: true,
          invalidatedReason,
          isSecurityRotation: false,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


