/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F91: Command-Intent Binding Coherence
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BUILD
 * 
 * Ensures that command-intent bindings are coherent:
 * - Domain commands MUST have intentId that exists in IntentGraph
 * - Non-domain commands MUST NOT have intentId
 * - Domain commands MUST have requiresIntent=true and mustExistInIntentGraph=true
 * - Non-domain commands MUST have requiresIntent=false and mustExistInIntentGraph=false
 * 
 * This invariant is enforced at ACT Phase 7.8 (Command Canonicalization).
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F91_COMMAND_INTENT_BINDING_COHERENCE: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F91',
  name: 'Command-Intent-Binding-Coherence',
  description: 'Command-intent bindings must be coherent: domain commands must have valid intentIds in IntentGraph, non-domain commands must not have intentIds.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    // This invariant is enforced at ACT build time (Phase 7.8)
    // Runtime enforcement is not needed as violations are caught during canonicalization
    // However, we can still check at runtime if a command is used incorrectly
    const commandId = context.commandId as string | undefined
    const commandScope = context.commandScope as 'domain' | 'navigation' | 'system' | 'devtools' | undefined
    const intentId = context.intentId as string | undefined
    const intentExists = context.intentExists as boolean | undefined

    if (commandId && commandScope === 'domain') {
      // Domain command must have intentId
      if (!intentId) {
        throw new InvariantViolationError(
          'SYSTEM_STATE.F91',
          'SYSTEM_STATE',
          'F91',
          `F91 violation: Domain command "${commandId}" must have intentId.`,
          {
            commandId,
            commandScope,
            source: context.sourceComponent || context.sourceFile || 'unknown',
          }
        )
      }
      
      // Domain command intentId must exist in IntentGraph
      if (intentExists === false) {
        throw new InvariantViolationError(
          'SYSTEM_STATE.F91',
          'SYSTEM_STATE',
          'F91',
          `F91 violation: Domain command "${commandId}" intentId "${intentId}" not found in IntentGraph.`,
          {
            commandId,
            commandScope,
            intentId,
            source: context.sourceComponent || context.sourceFile || 'unknown',
          }
        )
      }
    } else if (commandId && ['navigation', 'system', 'devtools'].includes(commandScope || '')) {
      // Non-domain command must NOT have intentId
      if (intentId) {
        throw new InvariantViolationError(
          'SYSTEM_STATE.F91',
          'SYSTEM_STATE',
          'F91',
          `F91 violation: Non-domain command "${commandId}" (scope=${commandScope}) must not have intentId.`,
          {
            commandId,
            commandScope,
            intentId,
            source: context.sourceComponent || context.sourceFile || 'unknown',
          }
        )
      }
    }
  },
}

