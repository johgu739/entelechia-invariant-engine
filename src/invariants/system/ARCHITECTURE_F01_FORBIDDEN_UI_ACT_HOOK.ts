/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F01: Forbidden UI ACT Hook
 * 
 * CATEGORY: SYSTEM_ARCHITECTURE
 * ENFORCEMENT: BUILD
 * 
 * Ensures that UI does not import ACT-layer mutation hooks directly.
 * UI must use functional bindings via useFunctionalMutation instead.
 * 
 * This invariant is enforced at ACT Phase 1.5 (Architecture Guard).
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const ARCHITECTURE_F01_FORBIDDEN_UI_ACT_HOOK: InvariantDefinition = {
  category: 'SYSTEM_ARCHITECTURE',
  code: 'F01',
  name: 'Forbidden-UI-ACT-Hook',
  description: 'UI must not import ACT-layer mutation hooks directly. All mutations must go via functional bindings.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    // This invariant is enforced at ACT build time (Phase 1.5)
    // Runtime enforcement is not needed as violations are caught during canonicalization
    // However, we can still check at runtime if a hook is used incorrectly
    const filePath = context.filePath as string | undefined
    const importPath = context.importPath as string | undefined
    const identifier = context.identifier as string | undefined
    const ruleId = context.ruleId as string | undefined

    if (filePath && (importPath || identifier)) {
      throw new InvariantViolationError(
        'SYSTEM_ARCHITECTURE.F01',
        'SYSTEM_ARCHITECTURE',
        'F01',
        `F01 violation: UI imported ACT-layer hook. File: ${filePath}, Import: ${importPath || identifier}`,
        {
          filePath,
          importPath,
          identifier,
          ruleId,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

