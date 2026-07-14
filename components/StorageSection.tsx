'use client';

import { useState } from 'react';
import { useCloudStorage, useDeviceStorage, useSecureStorage } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

function StorageBlock({
  title,
  api,
}: {
  title: string;
  api: {
    setItem: (key: string, value: string) => Promise<unknown>;
    getItem: (key: string) => Promise<unknown>;
    removeItem: (key: string) => Promise<unknown>;
  };
}) {
  const [key, setKey] = useState('demo-key');
  const [value, setValue] = useState('demo-value');

  return (
    <div style={{ marginBottom: 12 }}>
      <p className="hint">{title}</p>
      <div className="row">
        <input className="input" value={key} onChange={(e) => setKey(e.target.value)} placeholder="key" />
        <input className="input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="value" />
      </div>
      <div className="row">
        <ActionButton label="setItem" onRun={() => api.setItem(key, value)} variant="secondary" />
        <ActionButton label="getItem" onRun={() => api.getItem(key)} variant="secondary" />
        <ActionButton label="removeItem" onRun={() => api.removeItem(key)} variant="destructive" />
      </div>
    </div>
  );
}

export function StorageSection() {
  const cloud = useCloudStorage();
  const device = useDeviceStorage();
  const secure = useSecureStorage();

  return (
    <Section title="Cloud / Device / Secure storage">
      <p className="hint">Falls back to localStorage outside Telegram (each namespaced separately).</p>
      <StorageBlock title="CloudStorage" api={cloud} />
      <StorageBlock title="DeviceStorage" api={device} />
      <StorageBlock
        title="SecureStorage"
        api={{
          setItem: secure.setItem,
          getItem: secure.getItem,
          removeItem: secure.removeItem,
        }}
      />
      <div className="row">
        <ActionButton label="cloudStorage.getKeys()" onRun={() => cloud.getKeys()} />
      </div>
    </Section>
  );
}
