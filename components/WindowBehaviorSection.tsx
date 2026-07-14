'use client';

import { useIsActive } from '@core-ease/telegram-kit';
import {
  enableClosingConfirmation,
  disableClosingConfirmation,
  enableVerticalSwipes,
  disableVerticalSwipes,
} from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function WindowBehaviorSection() {
  const isActive = useIsActive();

  return (
    <Section title="Closing confirmation, swipes & active state">
      <p className="hint">App active: {String(isActive)}</p>
      <div className="row">
        <ActionButton label="enableClosingConfirmation()" onRun={() => enableClosingConfirmation()} variant="secondary" />
        <ActionButton label="disableClosingConfirmation()" onRun={() => disableClosingConfirmation()} variant="secondary" />
        <ActionButton label="enableVerticalSwipes()" onRun={() => enableVerticalSwipes()} variant="secondary" />
        <ActionButton label="disableVerticalSwipes()" onRun={() => disableVerticalSwipes()} variant="secondary" />
      </div>
    </Section>
  );
}
