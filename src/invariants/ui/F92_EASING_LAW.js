/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F92: Easing Law
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F92_EASING_LAW = {
    category: 'UI_TYPOGRAPHY',
    code: 'F92',
    name: 'Easing Law',
    description: 'All transitions must use: ease-out for entry, ease-in for exit, ease-in-out for crossfades. Linear or custom cubic curves are forbidden.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const transitionEasings = context.transitionEasings;
        const approvedEasings = ['ease-out', 'ease-in', 'ease-in-out'];
        if (transitionEasings && transitionEasings.length > 0) {
            const violations = [];
            transitionEasings.forEach(({ element, easing, type }) => {
                const expectedEasing = type === 'entry' ? 'ease-out' : type === 'exit' ? 'ease-in' : 'ease-in-out';
                if (easing !== expectedEasing && !approvedEasings.includes(easing)) {
                    violations.push({ element, expected: expectedEasing, actual: easing });
                }
            });
            if (violations.length > 0) {
                throw new InvariantViolationError('UI_TYPOGRAPHY.F92', 'UI_TYPOGRAPHY', 'F92', 'F92 violation: Invalid easing functions detected. Must use ease-out for entry, ease-in for exit, ease-in-out for crossfades.', {
                    violations,
                    source: context.sourceComponent || context.sourceFile || 'unknown',
                });
            }
        }
    },
};
//# sourceMappingURL=F92_EASING_LAW.js.map