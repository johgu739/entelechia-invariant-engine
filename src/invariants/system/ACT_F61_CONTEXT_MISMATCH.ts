/**
 * ✅ ENTELECHIA INVARIANT ENGINE — ACT.F61: Context Mismatch
 * 
 * CATEGORY: ACT
 * ENFORCEMENT: BUILD
 * 
 * INVARIANT: Functional binding context must match FORM-level context requirements.
 * 
 * PRINCIPLE: FORM → ACT → STATE → RUNTIME
 * - FORM: IntentGraph defines requiredContext for each intent
 * - ACT: Phase 7.x/8.x validates that useFunctionalMutation can provide required context
 * - STATE: Generated mutation-metadata includes requiredContext
 * - RUNTIME: Executors assume context matches requirements (no validation needed)
 * 
 * ONTOLOGICAL CORRECTNESS:
 * - This invariant MUST be enforced at ACT build-time
 * - RUNTIME should never need to validate context structure
 * - If context mismatch occurs, ACT pipeline must fail
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const ACT_F61_CONTEXT_MISMATCH: InvariantDefinition = {
  category: 'ACT',
  code: 'F61',
  name: 'Context-Mismatch',
  description: 'Functional binding context does not match FORM-level context requirements. ACT must validate context contracts at build-time.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const intentId = context.intentId as string | undefined
    const requiredContext = context.requiredContext as Record<string, boolean> | undefined
    const availableContext = context.availableContext as Record<string, boolean> | undefined
    const missingContext = context.missingContext as string[] | undefined

    if (!intentId || !requiredContext) {
      return // Not applicable
    }

    if (missingContext && missingContext.length > 0) {
      throw new InvariantViolationError(
        'ACT.F61_CONTEXT_MISMATCH',
        'ACT',
        'F61',
        `F61 violation: Intent "${intentId}" requires context that cannot be provided: ${missingContext.join(', ')}. ` +
        `FORM requiredContext: ${Object.keys(requiredContext).filter(k => requiredContext[k]).join(', ')}. ` +
        `useFunctionalMutation must provide: ${Object.keys(requiredContext).filter(k => requiredContext[k]).join(', ')}. ` +
        `Fix functional binding or update FORM requiredContext.`,
        {
          intentId,
          requiredContext,
          availableContext,
          missingContext,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

