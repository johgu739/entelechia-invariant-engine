/**
 * ✅ ENTELECHIA INVARIANT ENGINE — A3: No Double Mounts
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_COMPONENT_MOUNT
 * 
 * Telos: Components should not mount twice in the same render cycle.
 * Mount count should be 1 (except React StrictMode double mount in dev).
 * Double mounts cause duplicate effects, duplicate API calls, and state inconsistencies.
 * 
 * Enforcement:
 * - Prevents double mounts (mountCount > 1 in production, > 2 in dev)
 * - Allows React StrictMode double mount in dev (mountCount === 2)
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const A3_NO_DOUBLE_MOUNTS: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'A3',
  name: 'No Double Mounts',
  description: 'Components should not mount twice in the same render cycle. Mount count should be 1 (except React StrictMode double mount in dev).',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const mountCount = context.mountCount as number | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    if (mountCount === undefined) {
      // Mount count not provided, skip check
      return
    }

    // In production, mount count should be 1
    // In dev, React StrictMode causes double mount (mountCount === 2), which is acceptable
    // mountCount > 2 in dev or > 1 in prod indicates a real double mount
    const isDev = typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'
    const isStrictModeDoubleMount = isDev && mountCount === 2
    const hasActualDoubleMount = isDev ? mountCount > 2 : mountCount > 1

    if (!isStrictModeDoubleMount && hasActualDoubleMount) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.A3',
        'DOMAIN_LOGIC',
        'A3',
        `A3_NO_DOUBLE_MOUNTS violation: Component mounted ${mountCount} times. Components should only mount once per render cycle (except React StrictMode double mount in dev). Double mounts cause duplicate effects, duplicate API calls, and state inconsistencies.`,
        {
          mountCount,
          isDev,
          isStrictModeDoubleMount: false,
          hasActualDoubleMount: true,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


