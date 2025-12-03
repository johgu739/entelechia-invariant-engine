/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I01: Intent Exists
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BUILD
 * 
 * Ensures that all intents referenced in IntentGraph exist in IntentRegistry.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const I01_INTENT_EXISTS: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'I01',
  name: 'Intent-Exists',
  description: 'All intents referenced in IntentGraph must exist in IntentRegistry. This invariant is enforced at ACT build time.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const intentId = context.intentId as string | undefined
    const intentExists = context.intentExists as boolean | undefined

    if (intentId && intentExists === false) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.I01',
        'SYSTEM_STATE',
        'I01',
        `I01 violation: Intent "${intentId}" referenced in IntentGraph does not exist in IntentRegistry.`,
        {
          intentId,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

