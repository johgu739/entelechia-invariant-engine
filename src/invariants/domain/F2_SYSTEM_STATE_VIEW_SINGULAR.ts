/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F2: System StateView Singular
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 * 
 * Telos: SystemStateView must be fetched only once via SystemStateViewProvider.
 * No component may fetch SystemStateView directly - it must use the React Context singleton.
 * This ensures a single source of truth and prevents duplicate fetches.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F2_SYSTEM_STATE_VIEW_SINGULAR: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F2',
  name: 'System StateView Singular',
  description: 'SystemStateView must be fetched only once via SystemStateViewProvider. No component may fetch SystemStateView directly.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const fetchCount = context.fetchCount as number | undefined
    const hasDirectCall = context.hasDirectCall as boolean | undefined
    const isDeprecatedHook = context.isDeprecatedHook as boolean | undefined
    const stack = context.stack as string | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If deprecated hook is being used, that's a violation
    if (isDeprecatedHook === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F2',
        'DOMAIN_LOGIC',
        'F2',
        'F2_SYSTEM_STATE_VIEW_SINGULAR violation: Deprecated hook useSystemStateView() is being used. Use useSystemStateViewContext() instead. SystemStateView must be fetched only once via SystemStateViewProvider.',
        {
          isDeprecatedHook: true,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    // If direct call detected (not from SystemStateViewProvider), that's a violation
    if (hasDirectCall === true) {
      const isFromProvider = stack?.includes('SystemStateViewProvider') || false
      if (!isFromProvider) {
        throw new InvariantViolationError(
          'DOMAIN_LOGIC.F2',
          'DOMAIN_LOGIC',
          'F2',
          'F2_SYSTEM_STATE_VIEW_SINGULAR violation: getSystemStateView() called directly outside SystemStateViewProvider. SystemStateView must be fetched only once via SystemStateViewProvider.',
          {
            hasDirectCall: true,
            stack,
            sourceComponent,
            source: context.sourceFile || 'unknown',
          }
        )
      }
    }

    // If fetch count > 1, that's a violation (multiple fetches)
    if (fetchCount !== undefined && fetchCount > 1) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F2',
        'DOMAIN_LOGIC',
        'F2',
        `F2_SYSTEM_STATE_VIEW_SINGULAR violation: SystemStateView fetched ${fetchCount} times. SystemStateView must be fetched only once via SystemStateViewProvider.`,
        {
          fetchCount,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}


