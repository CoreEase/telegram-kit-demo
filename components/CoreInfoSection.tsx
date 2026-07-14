'use client';

import { useState } from 'react';
import {
  useTelegramWebApp,
  useTelegramUser,
  useTelegramStartParam,
  useInitData,
  useReady,
  useTelegramEvent,
} from '@core-ease/telegram-kit';
import { Section } from './ui';

export function CoreInfoSection() {
  const webApp = useTelegramWebApp();
  const user = useTelegramUser();
  const startParam = useTelegramStartParam();
  const initData = useInitData();
  const [lastEvent, setLastEvent] = useState('none yet');
  useReady();

  useTelegramEvent('viewportChanged', () => setLastEvent(`viewportChanged @ ${new Date().toLocaleTimeString()}`));

  return (
    <Section title="Core info hooks">
      <p className="hint">version: {webApp?.version} · platform: {webApp?.platform}</p>
      <p className="hint">user: {user ? user.first_name : 'none'}</p>
      <p className="hint">startParam: {startParam ?? 'none'}</p>
      <p className="hint">initData length: {initData?.length ?? 0}</p>
      <div className="result">useTelegramEvent('viewportChanged'): {lastEvent}</div>
    </Section>
  );
}
