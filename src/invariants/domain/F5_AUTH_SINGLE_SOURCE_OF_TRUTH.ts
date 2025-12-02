/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F5: Auth Single Source of Truth
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 * 
 * Telos: Authentication state must have a single source of truth (React Query).
 * No duplicate auth state in Zustand, localStorage, or other stores.
 * Auth status must come from React Query only.
 * 
 * Enforcement:
 * - Verifies React Query is the only source of auth status
 * - Ensures Zustand only stores UI metadata (email), never auth status
 * - Prevents auth cache from diverging from React Query
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F5_AUTH_SINGLE_SOURCE_OF_TRUTH: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F5',
  name: 'Auth Single Source of Truth',
  description: 'Authentication state must have a single source of truth (React Query). No duplicate auth state in Zustand, localStorage, or other stores.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const reactQueryAuth = context.reactQueryAuth as { authenticated?: boolean } | undefined
    const zustandAuth = context.zustandAuth as { isAuthenticated?: boolean; userEmail?: string } | undefined
    const authCacheAuth = context.authCacheAuth as { authenticated?: boolean } | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If Zustand stores auth status (isAuthenticated), that's a violation
    // Zustand should only store UI metadata (userEmail), never auth status
    if (zustandAuth?.isAuthenticated !== undefined) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F5',
        'DOMAIN_LOGIC',
        'F5',
        'F5_AUTH_SINGLE_SOURCE_OF_TRUTH violation: Zustand stores auth status (isAuthenticated). Zustand must only store UI metadata (userEmail), never auth status. React Query is the single source of truth for auth status.',
        {
          reactQueryAuth,
          zustandAuth,
          authCacheAuth,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    // If auth cache diverges from React Query, that's a violation
    if (reactQueryAuth?.authenticated !== undefined && authCacheAuth?.authenticated !== undefined) {
      if (reactQueryAuth.authenticated !== authCacheAuth.authenticated) {
        throw new InvariantViolationError(
          'DOMAIN_LOGIC.F5',
          'DOMAIN_LOGIC',
          'F5',
          'F5_AUTH_SINGLE_SOURCE_OF_TRUTH violation: Auth cache diverges from React Query. Auth cache must mirror React Query (the single source of truth).',
          {
            reactQueryAuth,
            authCacheAuth,
            sourceComponent,
            source: context.sourceFile || 'unknown',
          }
        )
      }
    }
  },
}


