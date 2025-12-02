/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F60: System UI Ontology
 * 
 * CATEGORY: UI_HIERARCHY
 * ENFORCEMENT: ON_FIRST_RENDER
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F60_SYSTEM_UI_ONTOLOGY: InvariantDefinition = {
  category: 'UI_HIERARCHY',
  code: 'F60',
  name: 'System UI Ontology',
  description: 'No view may exist outside the UI ontology\'s formal structure. All views must be children of LayoutRoot, all dashboards must reuse WorkspaceLayout geometry, no view may define its own header or sidebar.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const realmId = context.realmId as string | undefined
    const usesLayoutRoot = context.usesLayoutRoot as boolean | undefined
    const hasCustomHeader = context.hasCustomHeader as boolean | undefined
    const hasCustomSidebar = context.hasCustomSidebar as boolean | undefined

    if (!realmId) {
      throw new InvariantViolationError(
        'UI_HIERARCHY.F60',
        'UI_HIERARCHY',
        'F60',
        'F60 violation: View has no realmId. All views must be registered in a UI realm.',
        {
          realmId,
          usesLayoutRoot,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (usesLayoutRoot === false) {
      throw new InvariantViolationError(
        'UI_HIERARCHY.F60',
        'UI_HIERARCHY',
        'F60',
        'F60 violation: View does not use LayoutRoot. All views must be children of LayoutRoot.',
        {
          realmId,
          usesLayoutRoot,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (hasCustomHeader || hasCustomSidebar) {
      throw new InvariantViolationError(
        'UI_HIERARCHY.F60',
        'UI_HIERARCHY',
        'F60',
        'F60 violation: View defines custom header or sidebar. All views must use LayoutRoot\'s header/sidebar.',
        {
          realmId,
          hasCustomHeader,
          hasCustomSidebar,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


