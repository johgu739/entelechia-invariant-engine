/**
 * ✅ ENTELECHIA INVARIANT ENGINE — E10: Login Latency
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: RUNTIME
 */
import { InvariantViolationError } from '../../core/errors';
export const E10_LOGIN_LATENCY = {
    category: 'DOMAIN_LOGIC',
    code: 'E10',
    name: 'Login Latency',
    description: 'Ensures login operation completes within latency budget (≤ 200ms for perceived instant response).',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const loginLatency = context.loginLatency;
        const loginStartTime = context.loginStartTime;
        const loginCompleteTime = context.loginCompleteTime;
        const sourceComponent = context.sourceComponent;
        const LATENCY_BUDGET_MS = 200;
        if (loginLatency !== undefined && loginLatency > LATENCY_BUDGET_MS) {
            throw new InvariantViolationError('DOMAIN_LOGIC.E10', 'DOMAIN_LOGIC', 'E10', `E10_LOGIN_LATENCY violation: Login latency ${loginLatency}ms exceeds budget of ${LATENCY_BUDGET_MS}ms. Login must complete within latency budget for perceived instant response.`, {
                loginLatency,
                loginStartTime,
                loginCompleteTime,
                latencyBudget: LATENCY_BUDGET_MS,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        if (loginStartTime !== undefined && loginCompleteTime !== undefined) {
            const calculatedLatency = loginCompleteTime - loginStartTime;
            if (calculatedLatency > LATENCY_BUDGET_MS) {
                throw new InvariantViolationError('DOMAIN_LOGIC.E10', 'DOMAIN_LOGIC', 'E10', `E10_LOGIN_LATENCY violation: Calculated login latency ${calculatedLatency}ms exceeds budget of ${LATENCY_BUDGET_MS}ms.`, {
                    loginLatency: calculatedLatency,
                    loginStartTime,
                    loginCompleteTime,
                    latencyBudget: LATENCY_BUDGET_MS,
                    sourceComponent,
                    source: context.sourceFile || 'unknown',
                });
            }
        }
    },
};
//# sourceMappingURL=E10_LOGIN_LATENCY.js.map