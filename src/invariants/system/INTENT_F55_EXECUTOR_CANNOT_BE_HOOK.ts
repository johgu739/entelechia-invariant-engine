/**
 * ✅ ENTELECHIA INVARIANT ENGINE — INTENT.F55: Executor Cannot Be Hook
 * 
 * CATEGORY: INTENT
 * ENFORCEMENT: BUILD + RUNTIME
 * 
 * INVARIANT: Mutation executors must be pure async functions, never React hooks.
 * 
 * PRINCIPLE: FORM → ACT → STATE → RUNTIME
 * - FORM: IntentGraph declares executor name
 * - ACT: MutationFactory validates executor is not a hook
 * - STATE: mutation-metadata.generated.ts contains executor name
 * - RUNTIME: useFunctionalMutation enforces executor is not a hook
 * 
 * ONTOLOGICAL CORRECTNESS:
 * - Executors are pure async functions (no React dependencies)
 * - Hooks are React-specific (require component context)
 * - Mixing hooks as executors breaks React rules and ontological hierarchy
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const INTENT_F55_EXECUTOR_CANNOT_BE_HOOK: InvariantDefinition = {
  category: 'INTENT',
  code: 'F55',
  name: 'Executor-Cannot-Be-Hook',
  description: 'Mutation executors must be pure async functions, never React hooks. Executor names starting with "use" are forbidden.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const intentId = context.intentId as string | undefined
    const executorName = context.executorName as string | undefined
    
    if (executorName && executorName.startsWith('use')) {
      throw new InvariantViolationError(
        'INTENT.F55',
        'INTENT',
        'F55',
        `F55 violation: Intent "${intentId || 'unknown'}" has executor "${executorName}" which is a hook. Executors must be pure async functions (e.g., "executeCreateNodeIntent"), not React hooks.`,
        {
          intentId,
          executorName,
          violation: 'hook_as_executor',
          expectedPattern: 'execute*Intent',
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

