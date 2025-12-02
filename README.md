# @entelechia/invariant-engine

Centralized invariant engine for Entelechia.

## Installation

```bash
npm install @entelechia/invariant-engine
```

## Usage

```typescript
import { enforceInvariant, registry } from '@entelechia/invariant-engine'

// Enforce an invariant
enforceInvariant('UI_SCROLL.F82', document.body, {
  sourceComponent: 'MyComponent',
})
```

## Categories

- `UI_LAYOUT` - Layout and geometry invariants
- `UI_FORM` - Form identity invariants
- `UI_SCROLL` - Scroll container invariants
- `UI_HIERARCHY` - Navigation hierarchy invariants
- `UI_TYPOGRAPHY` - Typography invariants
- `UI_SPACING` - Spacing grid invariants
- `SYSTEM_STATE` - System state invariants
- `SYSTEM_ROUTER` - Router invariants
- `DOMAIN_LOGIC` - Domain logic invariants

## License

Proprietary and confidential. All rights reserved.


