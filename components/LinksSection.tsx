'use client';

import { openExternalLink, openTelegramLink, openInvoice } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function LinksSection() {
  return (
    <Section title="Links & invoices">
      <div className="row">
        <ActionButton
          label="openExternalLink()"
          onRun={() => openExternalLink('https://core.telegram.org/bots/webapps', true)}
        />
        <ActionButton label="openTelegramLink()" onRun={() => openTelegramLink('https://t.me/telegram')} />
        <ActionButton label="openInvoice()" onRun={() => openInvoice('https://t.me/invoice/demo')} variant="secondary" />
      </div>
    </Section>
  );
}
