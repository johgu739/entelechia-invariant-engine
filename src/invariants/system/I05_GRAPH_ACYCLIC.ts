/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I05: Graph Acyclic
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BUILD
 * 
 * Ensures that IntentGraph causality graph is acyclic (no cycles).
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const I05_GRAPH_ACYCLIC: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'I05',
  name: 'Graph-Acyclic',
  description: 'IntentGraph causality graph must be acyclic (no cycles). This invariant is enforced at ACT build time.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasCycle = context.hasCycle as boolean | undefined
    const cyclePath = context.cyclePath as string[] | undefined

    if (hasCycle === true) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.I05',
        'SYSTEM_STATE',
        'I05',
        `I05 violation: IntentGraph causality graph contains a cycle: ${cyclePath?.join(' → ') || 'unknown'}.`,
        {
          hasCycle,
          cyclePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

