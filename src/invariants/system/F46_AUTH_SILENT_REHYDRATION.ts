/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F46: Auth-Silent-Rehydration
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F46_AUTH_SILENT_REHYDRATION: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F46',
  name: 'Auth-Silent-Rehydration',
  description: 'Auth state must rehydrate silently from persisted data. No visible auth check or loading state on first frame.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const showsAuthLoading = context.showsAuthLoading as boolean | undefined
    const hasPersistedAuth = context.hasPersistedAuth as boolean | undefined

    if (showsAuthLoading && hasPersistedAuth) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F46',
        'SYSTEM_STATE',
        'F46',
        'F46 violation: Auth loading state shown when persisted auth exists. Must rehydrate silently.',
        {
          showsAuthLoading,
          hasPersistedAuth,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


