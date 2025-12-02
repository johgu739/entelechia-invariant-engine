/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F78: Root Shell Identity
 * 
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F78_ROOT_SHELL_IDENTITY: InvariantDefinition = {
  category: 'UI_LAYOUT',
  code: 'F78',
  name: 'Root Shell Identity',
  description: 'Root shell (AppShell + RouterProvider + SystemStateViewProvider + ViewportHost) must mount exactly once and never remount. Domain content swaps only inside ViewportHost.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const appShellRemounted = context.appShellRemounted as boolean | undefined
    const routerProviderRemounted = context.routerProviderRemounted as boolean | undefined
    const systemStateViewProviderRemounted = context.systemStateViewProviderRemounted as boolean | undefined
    const viewportHostRemounted = context.viewportHostRemounted as boolean | undefined
    const routePath = context.routerPath as string | undefined

    if (appShellRemounted === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F78',
        'UI_LAYOUT',
        'F78',
        'F78_ROOT_SHELL_IDENTITY violation: AppShell remounted during SPA navigation. AppShell must mount once and never remount.',
        {
          appShellRemounted: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (routerProviderRemounted === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F78',
        'UI_LAYOUT',
        'F78',
        'F78_ROOT_SHELL_IDENTITY violation: RouterProvider remounted during SPA navigation. RouterProvider must mount once and never remount.',
        {
          routerProviderRemounted: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (systemStateViewProviderRemounted === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F78',
        'UI_LAYOUT',
        'F78',
        'F78_ROOT_SHELL_IDENTITY violation: SystemStateViewProvider remounted during SPA navigation. SystemStateViewProvider must mount once and never remount.',
        {
          systemStateViewProviderRemounted: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (viewportHostRemounted === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F78',
        'UI_LAYOUT',
        'F78',
        'F78_ROOT_SHELL_IDENTITY violation: ViewportHost remounted during SPA navigation. ViewportHost must mount once and never remount.',
        {
          viewportHostRemounted: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


