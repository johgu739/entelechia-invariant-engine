# Invariant Engine Migration Guide

## Overview

This guide documents the migration of all invariants from the old system (`entelechia-ui/src/foundations/invariant-engine.ts` and `ui-continuity-invariants.ts`) to the new centralized engine (`@entelechia/invariant-engine`).

## Migration Pattern

### Old System
```typescript
const F82_SINGLE_SCROLL_CONTAINER: InvariantDefinition = {
  id: 'F82_SINGLE_SCROLL_CONTAINER',
  name: 'Single Scroll Container',
  type: InvariantType.FORMAL,
  level: EnforcementLevel.HARD_BLOCK,
  point: EnforcementPoint.AFTER_LAYOUT_COMMIT,
  description: '...',
  check: (context: InvariantContext): InvariantResult => {
    if (violation) {
      return {
        passed: false,
        message: '...',
        details: {...},
        error: new Error('...'),
      }
    }
    return { passed: true }
  },
}
```

### New System
```typescript
export const F82_SINGLE_SCROLL_CONTAINER: InvariantDefinition = {
  category: 'UI_SCROLL',
  code: 'F82',
  name: 'Single Scroll Container',
  description: '...',
  severity: 'ERROR',
  enforce: (node: HTMLElement | null, context: InvariantContext): void => {
    if (violation) {
      throw new InvariantViolationError(
        'UI_SCROLL.F82',
        'UI_SCROLL',
        'F82',
        '...',
        {...}
      )
    }
  },
}
```

## Category Mapping

| F-Number Range | Category | Examples |
|---------------|----------|----------|
| F1-F50 | SYSTEM_STATE | F32, F33, F34, F35, F36, F37, F38, F40-F50 |
| F12, F39, F55_ROUTER | SYSTEM_ROUTER | F12, F39 |
| F55-F65 | UI_FORM / UI_LAYOUT | F55, F57, F61-F65 |
| F56, F58, F64, F82, F87 | UI_SCROLL | F56, F58, F64, F82, F87 |
| F60, F69, F84 | UI_HIERARCHY | F60, F69, F84 |
| F85, F101-F109 | UI_TYPOGRAPHY | F85, F101-F109 |
| F86, F110 | UI_SPACING | F86, F110 |
| F77-F83, F88-F90 | UI_LAYOUT | F77-F83, F88-F90 |

## Conversion Steps

1. **Extract invariant definition** from `ui-continuity-invariants.ts`
2. **Map to category** using the mapping above
3. **Convert `check` to `enforce`**:
   - Change return type from `InvariantResult` to `void`
   - Replace `return { passed: false, ... }` with `throw new InvariantViolationError(...)`
   - Remove `return { passed: true }` (no-op)
4. **Create file** in `src/invariants/ui/{CODE}_{NAME}.ts`
5. **Export** from `src/invariants/ui/index.ts`
6. **Register** in `src/index.ts` (auto-registration on import)

## Status

- ✅ Core engine structure created
- ✅ Example migrations: F82, F83
- ⏳ Remaining: 142+ invariants

## Next Steps

1. Complete migration of all UI layout invariants (F55-F90)
2. Complete migration of system/router invariants (F1-F50, F12, F39)
3. Update all imports in `entelechia-ui` codebase
4. Generate migration report


