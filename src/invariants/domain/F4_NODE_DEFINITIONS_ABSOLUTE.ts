/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F4: Node Definitions Absolute
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_ROUTER_GUARD
 * 
 * Telos: Node definitions must be absolute - no fallbacks, no heuristics.
 * If a node doesn't exist in SystemStateView, it must be treated as non-existent.
 * 
 * Enforcement:
 * - Prevents fallback behavior when node doesn't exist
 * - Prevents heuristic node resolution
 * - Ensures absolute node existence checks
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F4_NODE_DEFINITIONS_ABSOLUTE: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F4',
  name: 'Node Definitions Absolute',
  description: 'Node definitions must be absolute - no fallbacks, no heuristics. If a node doesn\'t exist in SystemStateView, it must be treated as non-existent.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasFallback = context.hasFallback as boolean | undefined
    const hasHeuristic = context.hasHeuristic as boolean | undefined
    const nodeId = context.nodeId as string | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If fallback behavior detected, that's a violation
    if (hasFallback === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F4',
        'DOMAIN_LOGIC',
        'F4',
        `F4_NODE_DEFINITIONS_ABSOLUTE violation: Fallback behavior detected for node ${nodeId || 'unknown'}. Node definitions must be absolute - no fallbacks allowed.`,
        {
          nodeId,
          hasFallback: true,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    // If heuristic resolution detected, that's a violation
    if (hasHeuristic === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F4',
        'DOMAIN_LOGIC',
        'F4',
        `F4_NODE_DEFINITIONS_ABSOLUTE violation: Heuristic resolution detected for node ${nodeId || 'unknown'}. Node definitions must be absolute - no heuristics allowed.`,
        {
          nodeId,
          hasHeuristic: true,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


