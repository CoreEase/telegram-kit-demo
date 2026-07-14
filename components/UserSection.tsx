'use client';

import { useTelegram } from '@core-ease/telegram-kit';
import {
  getRawUserData,
  getUserDisplayName,
  getUserIdentifier,
  getUserAvatarUrl,
  getUserInfoWithAvatar,
  isInTelegram,
  isVersionAtLeast,
} from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function UserSection() {
  const ctx = useTelegram();

  return (
    <Section title="User & init data">
      <p className="hint">
        inTelegram: {String(ctx.inTelegram)} · devBypass: {String(ctx.isDevBypass)} · colorScheme: {ctx.colorScheme}
      </p>
      <img
        src={getUserAvatarUrl(ctx.user ?? undefined)}
        alt=""
        width={48}
        height={48}
        style={{ borderRadius: 24, marginBottom: 10 }}
      />
      <div className="row">
        <ActionButton label="getRawUserData()" onRun={() => getRawUserData()} />
        <ActionButton label="getUserDisplayName()" onRun={() => getUserDisplayName(ctx.user ?? undefined)} />
        <ActionButton label="getUserIdentifier()" onRun={() => getUserIdentifier(ctx.user ?? undefined)} />
        <ActionButton label="getUserInfoWithAvatar()" onRun={() => getUserInfoWithAvatar()} />
        <ActionButton label="isInTelegram()" onRun={() => isInTelegram()} />
        <ActionButton label="isVersionAtLeast('8.0')" onRun={() => isVersionAtLeast('8.0')} />
      </div>
    </Section>
  );
}
