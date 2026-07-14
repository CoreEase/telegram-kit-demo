'use client';

import {
  useRequestContact,
  useRequestWriteAccess,
  useRequestChat,
  useSwitchInlineQuery,
  useHideKeyboard,
} from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function AccountActionsSection() {
  const requestContact = useRequestContact();
  const requestWriteAccess = useRequestWriteAccess();
  const requestChat = useRequestChat();
  const switchInlineQuery = useSwitchInlineQuery();
  const hideKeyboard = useHideKeyboard();

  return (
    <Section title="Contact, write access & inline queries">
      <div className="row">
        <ActionButton label="requestContact()" onRun={() => requestContact()} />
        <ActionButton label="requestWriteAccess()" onRun={() => requestWriteAccess()} />
        <ActionButton label="requestChat('demo-req-id')" onRun={() => requestChat('demo-req-id')} />
      </div>
      <div className="row">
        <ActionButton label="switchInlineQuery('demo')" onRun={() => switchInlineQuery('demo', ['users', 'groups'])} />
        <ActionButton label="hideKeyboard()" onRun={() => hideKeyboard()} />
      </div>
    </Section>
  );
}
