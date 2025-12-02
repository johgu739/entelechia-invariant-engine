/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F34: Snapshot-Priority-Overrides-Network
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F34_SNAPSHOT_PRIORITY_OVERRIDES_NETWORK: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F34',
  name: 'Snapshot-Priority-Overrides-Network',
  description: 'Persisted snapshots must always take priority over network data on first frame. Network data may silently replace persisted data after first frame. Runs synchronously.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const networkDataUsedBeforeSnapshot = context.networkDataUsedBeforeSnapshot as boolean | undefined
    const hasPersistedSnapshot = context.hasPersistedSnapshot as boolean | undefined
    const isFirstFrame = context.isFirstFrame as boolean | undefined

    if (isFirstFrame && hasPersistedSnapshot && networkDataUsedBeforeSnapshot) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F34',
        'SYSTEM_STATE',
        'F34',
        'F34 violation: Network data used before persisted snapshot on first frame. Snapshot must take priority.',
        {
          networkDataUsedBeforeSnapshot,
          hasPersistedSnapshot,
          isFirstFrame,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


