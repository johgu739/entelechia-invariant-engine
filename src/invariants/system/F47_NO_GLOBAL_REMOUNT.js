/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F47: No-Global-Remount
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 */
import { InvariantViolationError } from '../../core/errors';
export const F47_NO_GLOBAL_REMOUNT = {
    category: 'SYSTEM_STATE',
    code: 'F47',
    name: 'No-Global-Remount',
    description: 'AppShell, RouterProvider, SystemStateViewProvider must never remount. Only intentional full reload may cause remount. React StrictMode double mounts (mountCount === 2) are OK in dev mode.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const mountCount = context.mountCount || 0;
        const appShellRemounted = context.appShellRemounted;
        const routerProviderRemounted = context.routerProviderRemounted;
        const systemStateViewProviderRemounted = context.systemStateViewProviderRemounted;
        const isIntentionalReload = context.isIntentionalReload;
        const isStrictModeDoubleMount = (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') && mountCount === 2;
        const hasActualRemount = (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') ? mountCount > 2 : mountCount > 1;
        if (!isIntentionalReload && !isStrictModeDoubleMount && hasActualRemount && (appShellRemounted || routerProviderRemounted || systemStateViewProviderRemounted)) {
            throw new InvariantViolationError('SYSTEM_STATE.F47', 'SYSTEM_STATE', 'F47', 'F47 violation: Global provider remounted without intentional reload. Providers must stay mounted.', {
                mountCount,
                appShellRemounted,
                routerProviderRemounted,
                systemStateViewProviderRemounted,
                isIntentionalReload,
                isStrictModeDoubleMount,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F47_NO_GLOBAL_REMOUNT.js.map