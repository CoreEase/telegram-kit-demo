'use client';

import { useShareToStory, useShareMessage, useDownloadFile, useHomeScreen } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function SharingSection() {
  const shareToStory = useShareToStory();
  const shareMessage = useShareMessage();
  const downloadFile = useDownloadFile();
  const { status, addToHomeScreen, checkHomeScreenStatus } = useHomeScreen();

  return (
    <Section title="Sharing, downloads & home screen">
      <div className="row">
        <ActionButton
          label="shareToStory()"
          onRun={() => shareToStory('https://picsum.photos/512', { text: 'Shared from the demo' })}
        />
        <ActionButton label="shareMessage()" onRun={() => shareMessage('demo-prepared-message-id')} />
        <ActionButton
          label="downloadFile()"
          onRun={() => downloadFile({ url: 'https://picsum.photos/512', file_name: 'demo.jpg' })}
        />
      </div>
      <div className="row">
        <ActionButton label="addToHomeScreen()" onRun={() => addToHomeScreen()} />
        <ActionButton label="checkHomeScreenStatus()" onRun={() => checkHomeScreenStatus()} />
      </div>
      {status && <div className="result">status: {status}</div>}
    </Section>
  );
}
