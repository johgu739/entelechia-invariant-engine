/**
 * ✅ ENTELECHIA INVARIANT ENGINE — ACT.F60: Payload Mismatch
 * 
 * CATEGORY: ACT
 * ENFORCEMENT: BUILD
 * 
 * INVARIANT: Functional binding payload must match FORM-level payload schema.
 * 
 * PRINCIPLE: FORM → ACT → STATE → RUNTIME
 * - FORM: IntentGraph defines payloadSchema for each intent
 * - ACT: Phase 7.x/8.x validates that functional bindings match payloadSchema
 * - STATE: Generated mutation-metadata includes payloadSchema
 * - RUNTIME: Executors assume payload matches schema (no validation needed)
 * 
 * ONTOLOGICAL CORRECTNESS:
 * - This invariant MUST be enforced at ACT build-time
 * - RUNTIME should never need to validate payload structure
 * - If payload mismatch occurs, ACT pipeline must fail
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const ACT_F60_PAYLOAD_MISMATCH: InvariantDefinition = {
  category: 'ACT',
  code: 'F60',
  name: 'Payload-Mismatch',
  description: 'Functional binding payload does not match FORM-level payload schema. ACT must validate payload contracts at build-time.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const intentId = context.intentId as string | undefined
    const payloadSchema = context.payloadSchema as Record<string, { type: string; required: boolean }> | undefined
    const actualPayload = context.actualPayload as Record<string, any> | undefined
    const missingFields = context.missingFields as string[] | undefined
    const extraFields = context.extraFields as string[] | undefined

    if (!intentId || !payloadSchema) {
      return // Not applicable
    }

    if (missingFields && missingFields.length > 0) {
      throw new InvariantViolationError(
        'ACT.F60_PAYLOAD_MISMATCH',
        'ACT',
        'F60',
        `F60 violation: Intent "${intentId}" payload missing required fields: ${missingFields.join(', ')}. ` +
        `FORM payloadSchema requires: ${Object.keys(payloadSchema).filter(k => payloadSchema[k].required).join(', ')}. ` +
        `Fix functional binding to provide all required fields.`,
        {
          intentId,
          payloadSchema,
          actualPayload,
          missingFields,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (extraFields && extraFields.length > 0) {
      throw new InvariantViolationError(
        'ACT.F60_PAYLOAD_MISMATCH',
        'ACT',
        'F60',
        `F60 violation: Intent "${intentId}" payload has extra fields not in FORM payloadSchema: ${extraFields.join(', ')}. ` +
        `FORM payloadSchema defines: ${Object.keys(payloadSchema).join(', ')}. ` +
        `Remove extra fields or update FORM payloadSchema.`,
        {
          intentId,
          payloadSchema,
          actualPayload,
          extraFields,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}

