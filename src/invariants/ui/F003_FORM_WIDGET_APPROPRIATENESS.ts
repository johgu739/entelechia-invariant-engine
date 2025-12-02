/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F003: Form Widget Appropriateness
 * 
 * CATEGORY: UI_FORM
 * ENFORCEMENT: ON_FORM_RENDER
 * 
 * Telos: Widgets must match field type capabilities defined in projectionCapabilities.
 * Inappropriate widgets break user expectations and cause validation errors.
 * FORM: Widget defined in projectionCapabilities. ACT: Widget renders correctly for field type. STATE: Form validates correctly.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F003_FORM_WIDGET_APPROPRIATENESS: InvariantDefinition = {
  category: 'UI_FORM',
  code: 'F003',
  name: 'Form Widget Appropriateness',
  description: 'Widgets must match field type capabilities defined in projectionCapabilities. Inappropriate widgets break user expectations and cause validation errors.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    // Placeholder - must not throw
    // Runtime enforcement will be implemented later
    const widget = context.widget as string | undefined
    const fieldType = context.fieldType as string | undefined
    const allowedWidgets = context.allowedWidgets as string[] | undefined
    
    if (widget && fieldType && allowedWidgets && !allowedWidgets.includes(widget)) {
      throw new InvariantViolationError(
        'UI_FORM.F003',
        'UI_FORM',
        'F003',
        `F003 violation: Widget '${widget}' is not allowed for field type '${fieldType}'. Allowed widgets: ${allowedWidgets.join(', ')}.`,
        {
          widget,
          fieldType,
          allowedWidgets,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


