/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I06: No Orphans
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BUILD
 * 
 * Ensures that all IntentGraph nodes are reachable from root intents (no orphaned nodes).
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const I06_NO_ORPHANS: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'I06',
  name: 'No-Orphans',
  description: 'All IntentGraph nodes must be reachable from root intents (no orphaned nodes). This invariant is enforced at ACT build time.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const orphanedNodes = context.orphanedNodes as string[] | undefined

    if (orphanedNodes && orphanedNodes.length > 0) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.I06',
        'SYSTEM_STATE',
        'I06',
        `I06 violation: IntentGraph contains orphaned nodes: ${orphanedNodes.join(', ')}. All nodes must be reachable from root intents.`,
        {
          orphanedNodes,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

