'use client';

import { useCallback, useState } from 'react';
import {
  useTelegramMainButton,
  useTelegramSecondaryButton,
  useTelegramBackButton,
  useTelegramSettingsButton,
} from '@core-ease/telegram-kit';
import { Section } from './ui';

export function ButtonsSection() {
  const [mainVisible, setMainVisible] = useState(true);
  const [secondaryVisible, setSecondaryVisible] = useState(true);
  const [backVisible, setBackVisible] = useState(false);
  const [log, setLog] = useState('');

  useTelegramMainButton({
    text: 'Main button',
    isVisible: mainVisible,
    onClick: useCallback(() => setLog('MainButton clicked'), []),
  });

  useTelegramSecondaryButton({
    text: 'Secondary button',
    isVisible: secondaryVisible,
    position: 'left',
    onClick: useCallback(() => setLog('SecondaryButton clicked'), []),
  });

  useTelegramBackButton({
    pathname: backVisible ? '/demo' : '/',
    onBack: useCallback(() => setLog('BackButton clicked'), []),
  });

  useTelegramSettingsButton(useCallback(() => setLog('SettingsButton clicked'), []));

  return (
    <Section title="MainButton / SecondaryButton / BackButton / SettingsButton">
      <p className="hint">These render as real native buttons inside Telegram; toggle them below.</p>
      <div className="row">
        <button className="btn secondary" onClick={() => setMainVisible((v) => !v)}>
          Toggle MainButton ({String(mainVisible)})
        </button>
        <button className="btn secondary" onClick={() => setSecondaryVisible((v) => !v)}>
          Toggle SecondaryButton ({String(secondaryVisible)})
        </button>
        <button className="btn secondary" onClick={() => setBackVisible((v) => !v)}>
          Toggle BackButton ({String(backVisible)})
        </button>
      </div>
      <p className="hint">SettingsButton is always shown (see the ⚙️ menu inside Telegram).</p>
      {log && <div className="result">{log}</div>}
    </Section>
  );
}
