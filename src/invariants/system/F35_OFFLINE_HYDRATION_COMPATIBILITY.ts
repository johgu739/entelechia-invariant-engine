/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F35: Offline-Hydration-Compatibility
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F35_OFFLINE_HYDRATION_COMPATIBILITY: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F35',
  name: 'Offline-Hydration-Compatibility',
  description: 'System must be able to hydrate from persisted snapshots even when offline. No network dependency for first-frame rendering.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const requiresNetworkForFirstFrame = context.requiresNetworkForFirstFrame as boolean | undefined
    const hasPersistedSnapshot = context.hasPersistedSnapshot as boolean | undefined
    const isOffline = context.isOffline as boolean | undefined

    if (isOffline && requiresNetworkForFirstFrame && hasPersistedSnapshot) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F35',
        'SYSTEM_STATE',
        'F35',
        'F35 violation: Network required for first frame when persisted snapshot exists. Must hydrate from snapshot offline.',
        {
          requiresNetworkForFirstFrame,
          hasPersistedSnapshot,
          isOffline,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


