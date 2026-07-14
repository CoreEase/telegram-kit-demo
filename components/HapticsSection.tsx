'use client';

import { haptic } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

const kinds = ['light', 'medium', 'heavy', 'rigid', 'soft', 'success', 'warning', 'error', 'selection'] as const;

export function HapticsSection() {
  return (
    <Section title="Haptic feedback">
      <p className="hint">Falls back to navigator.vibrate() outside Telegram.</p>
      <div className="row">
        {kinds.map((kind) => (
          <ActionButton key={kind} label={kind} onRun={() => haptic[kind]()} variant="secondary" />
        ))}
      </div>
    </Section>
  );
}
