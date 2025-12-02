/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F85: Typography Scale Unity
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F85_TYPOGRAPHY_SCALE_UNITY: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F85',
  name: 'Typography Scale Unity',
  description: 'All navigation components must use consistent typography scale from design tokens. TYPOGRAPHY_PRIMARY (text-lg, 18px) for primary items, TYPOGRAPHY_SECONDARY (text-sm, 14px) for secondary items.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const globalHeaderUsesCorrectTypography = context.globalHeaderUsesCorrectTypography as boolean | undefined
    const sidebarUsesCorrectTypography = context.sidebarUsesCorrectTypography as boolean | undefined
    const nodeDetailHeaderUsesCorrectTypography = context.nodeDetailHeaderUsesCorrectTypography as boolean | undefined
    const typographyViolations = context.typographyViolations as Array<{ component: string; expected: string; actual: string }> | undefined
    const routerPath = context.routerPath as string | undefined

    if (globalHeaderUsesCorrectTypography === false ||
        sidebarUsesCorrectTypography === false ||
        nodeDetailHeaderUsesCorrectTypography === false) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F85',
        'UI_TYPOGRAPHY',
        'F85',
        'F85 violation: Typography scale inconsistency detected. Navigation components must use design tokens (TYPOGRAPHY_PRIMARY = text-lg, TYPOGRAPHY_SECONDARY = text-sm).',
        {
          globalHeaderUsesCorrectTypography,
          sidebarUsesCorrectTypography,
          nodeDetailHeaderUsesCorrectTypography,
          typographyViolations,
          routerPath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


