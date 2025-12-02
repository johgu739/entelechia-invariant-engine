/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F1: Text-ID Is FORM
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_ROUTER_GUARD
 * 
 * Telos: Text-ID (nodeId) is FORM - it must be deterministic and absolute.
 * Text-ID is the canonical identifier for nodes and must be used consistently.
 * 
 * Enforcement:
 * - Verifies nodeId is a valid text-ID (non-empty string)
 * - Ensures text-ID is used as FORM (canonical identifier)
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F1_TEXT_ID_IS_FORM: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F1',
  name: 'Text-ID Is FORM',
  description: 'Text-ID (nodeId) is FORM - it must be deterministic and absolute. Text-ID is the canonical identifier for nodes.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const nodeId = context.nodeId as string | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If nodeId is missing or empty, that's a violation
    if (!nodeId || typeof nodeId !== 'string' || nodeId.trim() === '') {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F1',
        'DOMAIN_LOGIC',
        'F1',
        'F1_TEXT_ID_IS_FORM violation: nodeId is missing, empty, or not a valid text-ID. Text-ID must be a non-empty string and is the canonical identifier (FORM) for nodes.',
        {
          nodeId,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


