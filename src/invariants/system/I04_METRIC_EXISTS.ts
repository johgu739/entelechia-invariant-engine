/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I04: Metric Exists
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BUILD
 * 
 * Ensures that all metrics referenced in IntentGraph exist in telemetry/metrics.yaml.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const I04_METRIC_EXISTS: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'I04',
  name: 'Metric-Exists',
  description: 'All metrics referenced in IntentGraph must exist in telemetry/metrics.yaml. This invariant is enforced at ACT build time.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const metricId = context.metricId as string | undefined
    const metricExists = context.metricExists as boolean | undefined

    if (metricId && metricExists === false) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.I04',
        'SYSTEM_STATE',
        'I04',
        `I04 violation: Metric "${metricId}" referenced in IntentGraph does not exist in telemetry/metrics.yaml.`,
        {
          metricId,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

