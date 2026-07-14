'use client';

import { useState } from 'react';
import { useInvokeCustomMethod } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function CustomMethodSection() {
  const invokeCustomMethod = useInvokeCustomMethod();
  const [method, setMethod] = useState('getStorageValues');

  return (
    <Section title="invokeCustomMethod()">
      <p className="hint">Calls your bot's server-side custom method handler through Telegram.</p>
      <div className="row">
        <input className="input" value={method} onChange={(e) => setMethod(e.target.value)} placeholder="method name" />
      </div>
      <ActionButton label="invoke" onRun={() => invokeCustomMethod(method, {})} />
    </Section>
  );
}
