/**
 * ✅ ENTELECHIA INVARIANT ENGINE — A2: Auth SPA Identity Preservation
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 * 
 * Telos: SPA identity must be preserved during auth flows.
 * No hard reloads (window.location.reload) that would destroy SPA state.
 * WebSocket connections and React state must be preserved.
 * 
 * Enforcement:
 * - Prevents hard reloads during auth flows
 * - Ensures SPA state is preserved
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const A2_AUTH_SPA_IDENTITY_PRESERVATION: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'A2',
  name: 'Auth SPA Identity Preservation',
  description: 'SPA identity must be preserved during auth flows. No hard reloads (window.location.reload) that would destroy SPA state.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasHardReload = context.hasHardReload as boolean | undefined
    const spaStatePreserved = context.spaStatePreserved as boolean | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If hard reload detected, that's a violation
    if (hasHardReload === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.A2',
        'DOMAIN_LOGIC',
        'A2',
        'A2_AUTH_SPA_IDENTITY_PRESERVATION violation: Hard reload (window.location.reload) detected during auth flow. Hard reloads destroy SPA state and WebSocket connections. SPA identity must be preserved.',
        {
          hasHardReload: true,
          spaStatePreserved: false,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    // If SPA state is not preserved, that's a violation
    if (spaStatePreserved === false) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.A2',
        'DOMAIN_LOGIC',
        'A2',
        'A2_AUTH_SPA_IDENTITY_PRESERVATION violation: SPA state not preserved during auth flow. SPA identity (React state, WebSocket connections) must be preserved.',
        {
          spaStatePreserved: false,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


