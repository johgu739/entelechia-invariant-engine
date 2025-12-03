/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I03: Invariant Exists
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BUILD
 * 
 * Ensures that all invariants referenced in IntentGraph exist in invariant-engine.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const I03_INVARIANT_EXISTS: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'I03',
  name: 'Invariant-Exists',
  description: 'All invariants referenced in IntentGraph must exist in invariant-engine. This invariant is enforced at ACT build time.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const invariantId = context.invariantId as string | undefined
    const invariantExists = context.invariantExists as boolean | undefined

    if (invariantId && invariantExists === false) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.I03',
        'SYSTEM_STATE',
        'I03',
        `I03 violation: Invariant "${invariantId}" referenced in IntentGraph does not exist in invariant-engine.`,
        {
          invariantId,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

