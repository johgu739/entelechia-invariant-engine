/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F82: Mutation StateView Synchrony
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: AFTER_MUTATION_COMPLETE
 * 
 * Telos: Mutations and StateView refreshes must be synchronized.
 * After a mutation completes, the StateView must be refreshed before navigation or UI updates.
 * This ensures FORM → ACT → STATE coherence.
 * 
 * NOTE: This is different from UI_SCROLL.F82 (Single Scroll Container).
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F82_MUTATION_STATEVIEW_SYNCHRONY: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F82',
  name: 'Mutation StateView Synchrony',
  description: 'Mutations and StateView refreshes must be synchronized. After a mutation completes, the StateView must be refreshed before navigation or UI updates. This ensures FORM → ACT → STATE coherence.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const lastMutationTimestamp = context.lastMutationTimestamp as number | undefined
    const lastSSVRefreshTimestamp = context.lastSSVRefreshTimestamp as number | undefined
    const routerPath = context.routerPath as string | undefined

    // If no mutation timestamp, this check doesn't apply
    if (lastMutationTimestamp === undefined) {
      return
    }

    // If mutation happened but no refresh timestamp, that's a violation
    if (lastSSVRefreshTimestamp === undefined) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F82',
        'DOMAIN_LOGIC',
        'F82',
        'F82_MUTATION_STATEVIEW_SYNCHRONY violation: Mutation occurred but StateView was not refreshed. StateView must be refreshed after every mutation.',
        {
          lastMutationTimestamp,
          lastSSVRefreshTimestamp: undefined,
          routerPath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    // Refresh must happen after mutation (or at the same time)
    if (lastSSVRefreshTimestamp < lastMutationTimestamp) {
      const drift = lastMutationTimestamp - lastSSVRefreshTimestamp
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F82',
        'DOMAIN_LOGIC',
        'F82',
        `F82_MUTATION_STATEVIEW_SYNCHRONY violation: StateView refresh timestamp is before mutation timestamp. Refresh must happen after mutation. Drift: ${drift}ms`,
        {
          lastMutationTimestamp,
          lastSSVRefreshTimestamp,
          drift,
          routerPath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    // If refresh happened too long after mutation (>1000ms), that's a violation (stale state)
    const MAX_REFRESH_DELAY = 1000 // 1 second
    const refreshDelay = lastSSVRefreshTimestamp - lastMutationTimestamp
    if (refreshDelay > MAX_REFRESH_DELAY) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F82',
        'DOMAIN_LOGIC',
        'F82',
        `F82_MUTATION_STATEVIEW_SYNCHRONY violation: StateView refresh happened too long after mutation (${refreshDelay}ms > ${MAX_REFRESH_DELAY}ms). Refresh must happen immediately after mutation.`,
        {
          lastMutationTimestamp,
          lastSSVRefreshTimestamp,
          refreshDelay,
          maxRefreshDelay: MAX_REFRESH_DELAY,
          routerPath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


