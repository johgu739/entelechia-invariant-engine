/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F47: No-Global-Remount
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F47_NO_GLOBAL_REMOUNT: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F47',
  name: 'No-Global-Remount',
  description: 'AppShell, RouterProvider, SystemStateViewProvider must never remount. Only intentional full reload may cause remount. React StrictMode double mounts (mountCount === 2) are OK in dev mode.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const mountCount = (context.mountCount as number) || 0
    const appShellRemounted = context.appShellRemounted as boolean | undefined
    const routerProviderRemounted = context.routerProviderRemounted as boolean | undefined
    const systemStateViewProviderRemounted = context.systemStateViewProviderRemounted as boolean | undefined
    const isIntentionalReload = context.isIntentionalReload as boolean | undefined

    const isStrictModeDoubleMount = (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') && mountCount === 2
    const hasActualRemount = (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') ? mountCount > 2 : mountCount > 1

    if (!isIntentionalReload && !isStrictModeDoubleMount && hasActualRemount && (appShellRemounted || routerProviderRemounted || systemStateViewProviderRemounted)) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F47',
        'SYSTEM_STATE',
        'F47',
        'F47 violation: Global provider remounted without intentional reload. Providers must stay mounted.',
        {
          mountCount,
          appShellRemounted,
          routerProviderRemounted,
          systemStateViewProviderRemounted,
          isIntentionalReload,
          isStrictModeDoubleMount,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


