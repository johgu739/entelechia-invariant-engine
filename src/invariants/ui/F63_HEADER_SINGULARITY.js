/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F63: Header Singularity
 *
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: ON_FIRST_RENDER
 *
 * There may only be one Header per app.
 * Duplicate header = formal contradiction → THROW.
 */
import { InvariantViolationError } from '../../core/errors';
export const F63_HEADER_SINGULARITY = {
    category: 'UI_LAYOUT',
    code: 'F63',
    name: 'Header Singularity',
    description: 'There may only be one Header per app. Duplicate header = formal contradiction → THROW.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const headerCount = context.headerCount;
        if (headerCount !== undefined && headerCount > 1) {
            throw new InvariantViolationError('UI_LAYOUT.F63', 'UI_LAYOUT', 'F63', 'F63 violation: Multiple headers detected. Only one header is allowed across the entire app.', {
                headerCount,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F63_HEADER_SINGULARITY.js.map