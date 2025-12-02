/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F44: SystemStateView-No-Reload-Flicker
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F44_SYSTEMSTATEVIEW_NO_RELOAD_FLICKER: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F44',
  name: 'SystemStateView-No-Reload-Flicker',
  description: 'SystemStateView must not flicker on reload. Persisted SystemStateView must render immediately, network data replaces silently.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasReloadFlicker = context.hasReloadFlicker as boolean | undefined
    const hasPersistedSSV = context.hasPersistedSSV as boolean | undefined

    if (hasReloadFlicker && hasPersistedSSV) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F44',
        'SYSTEM_STATE',
        'F44',
        'F44 violation: SystemStateView flickered on reload when persisted data exists. Must render persisted data immediately.',
        {
          hasReloadFlicker,
          hasPersistedSSV,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


