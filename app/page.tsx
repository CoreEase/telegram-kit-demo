'use client';

import '../components/demo.css';
import { useTelegram } from '@core-ease/telegram-kit';
import { CoreInfoSection } from '../components/CoreInfoSection';
import { UserSection } from '../components/UserSection';
import { ThemeViewportSection } from '../components/ThemeViewportSection';
import { WindowBehaviorSection } from '../components/WindowBehaviorSection';
import { ButtonsSection } from '../components/ButtonsSection';
import { HapticsSection } from '../components/HapticsSection';
import { DialogsSection } from '../components/DialogsSection';
import { ClipboardQrSection } from '../components/ClipboardQrSection';
import { StickersSection } from '../components/StickersSection';
import { StorageSection } from '../components/StorageSection';
import { SensorsSection } from '../components/SensorsSection';
import { BiometricLocationSection } from '../components/BiometricLocationSection';
import { SharingSection } from '../components/SharingSection';
import { AccountActionsSection } from '../components/AccountActionsSection';
import { EmojiStatusSection } from '../components/EmojiStatusSection';
import { LinksSection } from '../components/LinksSection';
import { CustomMethodSection } from '../components/CustomMethodSection';
import { UtilsSection } from '../components/UtilsSection';
import { ServerDemoSection } from '../components/ServerDemoSection';

export default function Home() {
  const ctx = useTelegram();

  return (
    <main className="page">
     <div className="app-container">
      <div className="header">
        <h1>@core-ease/telegram-kit demo</h1>
        <p>Every export exercised in one place. Works as a website and as a Telegram Mini App.</p>
        <div className="badges">
          <span className={`badge ${ctx.inTelegram ? 'on' : ''}`}>{ctx.inTelegram ? 'Inside Telegram' : 'Plain browser'}</span>
          {ctx.isDevBypass && <span className="badge on">Dev mode</span>}
          <span className="badge">{ctx.colorScheme}</span>
        </div>
      </div>

      <CoreInfoSection />
      <UserSection />
      <ThemeViewportSection />
      <WindowBehaviorSection />
      <ButtonsSection />
      <HapticsSection />
      <DialogsSection />
      <ClipboardQrSection />
      <StickersSection />
      <StorageSection />
      <SensorsSection />
      <BiometricLocationSection />
      <SharingSection />
      <AccountActionsSection />
      <EmojiStatusSection />
      <LinksSection />
      <CustomMethodSection />
      <UtilsSection />
      <ServerDemoSection />
     </div>
    </main>
  );
}
