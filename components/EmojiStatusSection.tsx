'use client';

import { useSetEmojiStatus, useRequestEmojiStatusAccess } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function EmojiStatusSection() {
  const setEmojiStatus = useSetEmojiStatus();
  const requestEmojiStatusAccess = useRequestEmojiStatusAccess();

  return (
    <Section title="Emoji status">
      <div className="row">
        <ActionButton label="requestEmojiStatusAccess()" onRun={() => requestEmojiStatusAccess()} />
        <ActionButton label="setEmojiStatus()" onRun={() => setEmojiStatus('5361800828313167418', { duration: 3600 })} />
      </div>
    </Section>
  );
}
