/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F33: Snapshot-Atomarity
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F33_SNAPSHOT_ATOMARITY: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F33',
  name: 'Snapshot-Atomarity',
  description: 'All persisted snapshots must be loaded atomically - either all or none. Partial snapshots must not be used.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasPartialSnapshot = context.hasPartialSnapshot as boolean | undefined
    const snapshotComponents = context.snapshotComponents as string[] | undefined

    if (hasPartialSnapshot) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F33',
        'SYSTEM_STATE',
        'F33',
        'F33 violation: Partial snapshot detected. All snapshots must be loaded atomically.',
        {
          hasPartialSnapshot,
          snapshotComponents,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


