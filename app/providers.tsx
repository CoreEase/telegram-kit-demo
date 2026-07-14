'use client';

import { installDevMode } from '@core-ease/telegram-kit/dev';
import { TelegramProvider } from '@core-ease/telegram-kit';

if (process.env.NODE_ENV !== 'production') {
  installDevMode({ user: { id: 1, first_name: 'Demo', last_name: 'User', username: 'demo_user' } });
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TelegramProvider options={{ allowOutsideTelegram: true }}>
      {children}
    </TelegramProvider>
  );
}
