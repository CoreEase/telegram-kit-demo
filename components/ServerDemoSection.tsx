'use client';

import { useInitData } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function ServerDemoSection() {
  const initData = useInitData();

  return (
    <Section title="Server-side (API routes)">
      <p className="hint">Requires TELEGRAM_BOT_TOKEN in the server environment.</p>
      <div className="row">
        <ActionButton
          label="POST /api/verify-init-data"
          onRun={async () => {
            const res = await fetch('/api/verify-init-data', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ initData }),
            });
            return res.json();
          }}
        />
        <ActionButton
          label="GET /api/bot-demo (getMe)"
          onRun={async () => {
            const res = await fetch('/api/bot-demo');
            return res.json();
          }}
        />
      </div>
    </Section>
  );
}
