'use client';

import { useState } from 'react';
import { md, html, buildStartLink, buildStartAppLink, buildShareLink, InlineKeyboardBuilder } from '@core-ease/telegram-kit';
import { Section } from './ui';

const markdownSample = md.text('Hello ', md.bold('world'), '! ', md.link('https://telegram.org', 'Visit Telegram')).toString();
const htmlSample = html.text('Hello ', html.bold('world'), '! ', html.link('https://telegram.org', 'Visit Telegram')).toString();

const startLink = buildStartLink({ botUsername: 'YourBot', startParam: 'demo_ref' });
const startAppLink = buildStartAppLink({ botUsername: 'YourBot', appName: 'app', data: 'user:42' });
const shareLink = buildShareLink({ url: startAppLink, text: 'Check this Mini App out' });

const keyboard = new InlineKeyboardBuilder()
  .text('Button 1', 'cb_1')
  .text('Button 2', 'cb_2')
  .row()
  .webApp('Open Mini App', startAppLink)
  .build();

export function UtilsSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
  };

  return (
    <Section title="Formatting, deep links & keyboards (pure functions)">
      <p className="hint">MarkdownV2: {markdownSample}</p>
      <p className="hint">HTML: {htmlSample}</p>
      <div className="row">
        <button className="btn secondary" onClick={() => copy(startLink, 'startLink')}>Copy start link</button>
        <button className="btn secondary" onClick={() => copy(startAppLink, 'startAppLink')}>Copy start-app link</button>
        <button className="btn secondary" onClick={() => copy(shareLink, 'shareLink')}>Copy share link</button>
      </div>
      {copied && <div className="result">Copied {copied} to clipboard</div>}
      <div className="result">{JSON.stringify(keyboard, null, 2)}</div>
    </Section>
  );
}
