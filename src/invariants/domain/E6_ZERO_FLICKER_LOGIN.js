/**
 * ✅ ENTELECHIA INVARIANT ENGINE — E6: Zero Flicker Login
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: RUNTIME
 */
import { InvariantViolationError } from '../../core/errors';
export const E6_ZERO_FLICKER_LOGIN = {
    category: 'DOMAIN_LOGIC',
    code: 'E6',
    name: 'Zero Flicker Login',
    description: 'Ensures login flow has zero visual flicker - user must not see login form flash or content shift during authentication.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasFlicker = context.hasFlicker;
        const hasContentShift = context.hasContentShift;
        const loginFormVisible = context.loginFormVisible;
        const authenticatedContentVisible = context.authenticatedContentVisible;
        const sourceComponent = context.sourceComponent;
        if (hasFlicker === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.E6', 'DOMAIN_LOGIC', 'E6', 'E6_ZERO_FLICKER_LOGIN violation: Visual flicker detected during login flow. User must not see login form flash or content shift.', {
                hasFlicker: true,
                hasContentShift,
                loginFormVisible,
                authenticatedContentVisible,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        if (hasContentShift === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.E6', 'DOMAIN_LOGIC', 'E6', 'E6_ZERO_FLICKER_LOGIN violation: Content shift detected during login flow. Layout must remain stable.', {
                hasFlicker: false,
                hasContentShift: true,
                loginFormVisible,
                authenticatedContentVisible,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=E6_ZERO_FLICKER_LOGIN.js.map