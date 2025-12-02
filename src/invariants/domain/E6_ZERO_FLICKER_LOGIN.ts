/**
 * ✅ ENTELECHIA INVARIANT ENGINE — E6: Zero Flicker Login
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: RUNTIME
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const E6_ZERO_FLICKER_LOGIN: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'E6',
  name: 'Zero Flicker Login',
  description: 'Ensures login flow has zero visual flicker - user must not see login form flash or content shift during authentication.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasFlicker = context.hasFlicker as boolean | undefined
    const hasContentShift = context.hasContentShift as boolean | undefined
    const loginFormVisible = context.loginFormVisible as boolean | undefined
    const authenticatedContentVisible = context.authenticatedContentVisible as boolean | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    if (hasFlicker === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.E6',
        'DOMAIN_LOGIC',
        'E6',
        'E6_ZERO_FLICKER_LOGIN violation: Visual flicker detected during login flow. User must not see login form flash or content shift.',
        {
          hasFlicker: true,
          hasContentShift,
          loginFormVisible,
          authenticatedContentVisible,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    if (hasContentShift === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.E6',
        'DOMAIN_LOGIC',
        'E6',
        'E6_ZERO_FLICKER_LOGIN violation: Content shift detected during login flow. Layout must remain stable.',
        {
          hasFlicker: false,
          hasContentShift: true,
          loginFormVisible,
          authenticatedContentVisible,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


