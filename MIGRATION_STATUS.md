# Invariant Engine Migration Status

## Phase 1: Core Engine ✅ COMPLETE

- [x] Created `packages/invariant-engine/` structure
- [x] Implemented `src/core/types.ts` with canonical metadata
- [x] Implemented `src/core/registry.ts` with strict ID assignment
- [x] Implemented `src/core/enforcement.ts` with enforce logic
- [x] Implemented `src/core/errors.ts` with canonical errors
- [x] Created `package.json`, `tsconfig.json`, `tsup.config.ts`
- [x] Created `LICENSE` (proprietary, no MIT)
- [x] Created `README.md`
- [x] Auto-registration system for invariants

## Phase 2: Example Migrations ✅ COMPLETE

- [x] Migrated F82_SINGLE_SCROLL_CONTAINER (UI_SCROLL)
- [x] Migrated F83_BOUNDING_BOX_INTEGRITY (UI_LAYOUT)
- [x] Created migration guide and category mapping

## Phase 3: Full Migration ⏳ IN PROGRESS

### Category Mapping

| Old Category | New Category | Invariants |
|------------|--------------|------------|
| LAYOUT/FRAME_PURITY | UI_LAYOUT | F57, F61, F62, F63, F66, F77, F78, F79, F80, F81, F83 |
| LAYOUT/SCROLL_CONTEXT | UI_SCROLL | F56, F58, F64, F82, F87, F88, F89, F90 |
| LAYOUT/BOUNDING_BOX | UI_LAYOUT | F83 |
| UI/FORM_IDENTITY | UI_FORM | F55, F65 |
| UI/NAVIGATION_HIERARCHY | UI_HIERARCHY | F60, F69, F84 |
| UI/TYPOGRAPHY_SCALE | UI_TYPOGRAPHY | F85, F101-F109 |
| UI/SPACING_GRID | UI_SPACING | F86, F110 |
| DATA/SSV | SYSTEM_STATE | F32-F50 |
| ROUTING/IDENTITY | SYSTEM_ROUTER | F12, F55_ROUTER |
| ROUTING/STATE | SYSTEM_ROUTER | F39 |

### Migration Progress

#### UI_SCROLL (8 invariants)
- [x] F56_SCROLL_LAW
- [x] F58_VIEWPORT_SCROLL_PURITY
- [x] F64_SCROLL_CONSTRAINT
- [x] F82_SINGLE_SCROLL_CONTAINER
- [ ] F87_SINGLE_SCROLL_CONTAINER_ACROSS_TRANSITIONS
- [ ] F88_CHAT_LAYOUT_CONSTRAINTS
- [ ] F89_SECTION_SCROLL_CANON
- [ ] F90_HEIGHT_CONSTRAINT_PURITY

#### UI_LAYOUT (12 invariants)
- [x] F61_LAYOUT_UNITY
- [x] F62_FIXED_SIDEBAR_GEOMETRY
- [x] F63_HEADER_SINGULARITY
- [x] F66_GEOMETRIC_IDENTITY
- [x] F83_BOUNDING_BOX_INTEGRITY
- [ ] F57_FRAME_PURITY_ENFORCED
- [ ] F77_VIEWPORT_IMMUTABILITY
- [ ] F78_ROOT_SHELL_IDENTITY
- [ ] F79_DOMAIN_LAYOUT_IDENTITY
- [ ] F80_LAYOUT_NO_VOID_STATES
- [ ] F81_PAGE_VERTICAL_EXPANSION

#### UI_FORM (2 invariants)
- [x] F65_UI_FORMAL_INTEGRITY
- [ ] F55_UI_FORM_IDENTITY

#### UI_HIERARCHY (3 invariants)
- [ ] F60_SYSTEM_UI_ONTOLOGY
- [ ] F69_CROSS_VIEW_COGNITIVE_CONTINUITY
- [ ] F84_NAV_HIERARCHY_UNITY

#### UI_TYPOGRAPHY (10 invariants)
- [ ] F85_TYPOGRAPHY_SCALE_UNITY
- [ ] F101_FONT_FAMILY_UNITY
- [ ] F102_CANONICAL_TYPE_SCALE
- [ ] F103_WEIGHT_COHERENCE
- [ ] F104_LINE_HEIGHT_INTEGRITY
- [ ] F105_HIERARCHY_DESCENT_LAW
- [ ] F106_TOKENIZATION_CONSISTENCY
- [ ] F108_CROSS_COMPONENT_TYPOGRAPHIC_PARITY
- [ ] F109_NO_VISUAL_DOPPELGANGERS

#### UI_SPACING (2 invariants)
- [ ] F86_SPACING_GRID_UNITY
- [ ] F110_APPLE_LAYOUT_RHYTHM_COMPLIANCE

#### SYSTEM_STATE (19+ invariants)
- [ ] F32_ZERO_PLACEHOLDER_FIRST_FRAME
- [ ] F33_SNAPSHOT_ATOMARITY
- [ ] F34_SNAPSHOT_PRIORITY_OVERRIDES_NETWORK
- [ ] F35_OFFLINE_HYDRATION_COMPATIBILITY
- [ ] F36_NODE_SELECTION_ALIGNED_WITH_URL
- [ ] F37_NODE_SELECTION_ATOMICITY
- [ ] F38_NODE_STATEVIEW_STABILITY
- [ ] F40-F50 (11 invariants)

#### SYSTEM_ROUTER (3 invariants)
- [ ] F12_SEQUENTIAL_RENDER_ORDER
- [ ] F39_ROUTER_GUARD_SNAPSHOT_ALIGNMENT
- [ ] F55_ROUTER_NO_HARD_REFRESH

**Total: 10 / 144+ invariants migrated (6.9%)**

## Phase 4: Import Replacement ⏳ PENDING

After all invariants are migrated, replace all imports:

```typescript
// Old
import { checkInvariant, INVARIANT_IDS } from '@/foundations/invariant-engine'

// New
import { enforceInvariant } from '@entelechia/invariant-engine'
```

## Next Steps

1. Continue migrating invariants following the established pattern
2. Create individual files for each invariant
3. Update `src/invariants/ui/index.ts` to export all
4. Replace all imports in `entelechia-ui` codebase
5. Generate final migration report
