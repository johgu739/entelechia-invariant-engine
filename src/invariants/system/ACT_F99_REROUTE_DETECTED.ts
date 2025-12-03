/**
 * ✅ ENTELECHIA INVARIANT ENGINE — ACT.F99: Reroute Detected
 * 
 * CATEGORY: ACT
 * ENFORCEMENT: RUNTIME
 * 
 * INVARIANT: RUNTIME must never compensate for incorrect STATE.
 * If STATE says X but teleology says Y, ACT must regenerate STATE.
 * 
 * PRINCIPLE: FORM → ACT → STATE → RUNTIME
 * - ACT produces STATE deterministically
 * - STATE is the single source of truth
 * - RUNTIME presents STATE, never corrects it
 * 
 * ONTOLOGICAL CORRECTNESS:
 * - If RUNTIME detects STATE drift, it must fail immediately
 * - RUNTIME must never guess, heuristize, or compensate
 * - All intelligence belongs in ACT, all materialization in STATE
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const ACT_F99_REROUTE_DETECTED: InvariantDefinition = {
  category: 'ACT',
  code: 'F99',
  name: 'Reroute-Detected',
  description: 'RUNTIME detected that STATE does not match teleological truth. This indicates ACT must regenerate STATE. RUNTIME must never compensate for incorrect STATE.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const intentId = context.intentId as string | undefined
    const stateExecutorName = context.stateExecutorName as string | undefined
    const teleologicalExecutorName = context.teleologicalExecutorName as string | undefined
    const rerouteType = context.rerouteType as 'executor_mismatch' | 'missing_executor' | 'heuristic_used' | 'export_scanning' | undefined
    
    // If STATE executor doesn't match teleological executor, it's a reroute
    if (stateExecutorName && teleologicalExecutorName && stateExecutorName !== teleologicalExecutorName) {
      throw new InvariantViolationError(
        'ACT.F99',
        'ACT',
        'F99',
        `F99 violation: Intent "${intentId || 'unknown'}" has STATE executor "${stateExecutorName}" but teleology requires "${teleologicalExecutorName}". RUNTIME cannot compensate - ACT must regenerate STATE.`,
        {
          intentId,
          stateExecutorName,
          teleologicalExecutorName,
          rerouteType: rerouteType || 'executor_mismatch',
          resolution: 'Run pnpm act:recompute to regenerate STATE',
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
    
    // If RUNTIME had to use heuristik, it's a reroute
    if (rerouteType === 'heuristic_used' || rerouteType === 'export_scanning') {
      throw new InvariantViolationError(
        'ACT.F99',
        'ACT',
        'F99',
        `F99 violation: Intent "${intentId || 'unknown'}" required RUNTIME to use ${rerouteType}. RUNTIME must never guess - ACT must produce correct STATE.`,
        {
          intentId,
          rerouteType,
          resolution: 'Run pnpm act:recompute to regenerate STATE with explicit executor names',
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
    
    // If executor is missing from STATE, it's a reroute
    if (!stateExecutorName && teleologicalExecutorName) {
      throw new InvariantViolationError(
        'ACT.F99',
        'ACT',
        'F99',
        `F99 violation: Intent "${intentId || 'unknown'}" has no executor in STATE but teleology requires "${teleologicalExecutorName}". RUNTIME cannot compensate - ACT must regenerate STATE.`,
        {
          intentId,
          teleologicalExecutorName,
          rerouteType: rerouteType || 'missing_executor',
          resolution: 'Run pnpm act:recompute to regenerate STATE',
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

