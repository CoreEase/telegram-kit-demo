'use client';

import { useState, useEffect } from 'react';
import { installDevMode } from '@core-ease/telegram-kit/dev';
import { TelegramProvider } from '@core-ease/telegram-kit';

if (process.env.NODE_ENV !== 'production') {
  installDevMode({ user: { id: 1, first_name: 'Demo', last_name: 'User', username: 'demo_user' } });
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [bgColor, setBgColor] = useState<string>("#0e1621");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const color = rootStyles.getPropertyValue("--background").trim() || "#0e1621";
    setBgColor(color);
  }, []);
  
  return (
    <TelegramProvider
      options={{
        autoExpand: true,
        autoDisableVerticalSwipes: true,
        autoEnableClosingConfirmation: true,
        backgroundColor: bgColor,
        headerColor: bgColor,
        bottomBarColor: bgColor,
        allowOutsideTelegram: process.env.NODE_ENV === 'development',
      }}
    >
      {children}
    </TelegramProvider>
  );
}
