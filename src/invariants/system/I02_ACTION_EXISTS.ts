/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I02: Action Exists
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BUILD
 * 
 * Ensures that all actions referenced in IntentGraph exist in ActionRegistry.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const I02_ACTION_EXISTS: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'I02',
  name: 'Action-Exists',
  description: 'All actions referenced in IntentGraph must exist in ActionRegistry. This invariant is enforced at ACT build time.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const actionId = context.actionId as string | undefined
    const actionExists = context.actionExists as boolean | undefined

    if (actionId && actionExists === false) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.I02',
        'SYSTEM_STATE',
        'I02',
        `I02 violation: Action "${actionId}" referenced in IntentGraph does not exist in ActionRegistry.`,
        {
          actionId,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

