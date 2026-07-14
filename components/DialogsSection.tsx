'use client';

import { useShowAlert, useShowConfirm, useShowPopup } from '@core-ease/telegram-kit';
import { dialog } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function DialogsSection() {
  const showAlert = useShowAlert();
  const showConfirm = useShowConfirm();
  const showPopup = useShowPopup();

  return (
    <Section title="Dialogs">
      <div className="row">
        <ActionButton label="showAlert()" onRun={() => showAlert('Hello from @core-ease/telegram-kit')} />
        <ActionButton label="showConfirm()" onRun={() => showConfirm('Are you sure?')} />
        <ActionButton
          label="showPopup()"
          onRun={() =>
            showPopup({
              title: 'Popup demo',
              message: 'Pick a button',
              buttons: [
                { id: 'yes', type: 'default', text: 'Yes' },
                { id: 'no', type: 'destructive', text: 'No' },
                { type: 'cancel' },
              ],
            })
          }
        />
        <ActionButton label="dialog.prompt()" onRun={() => dialog.prompt('Enter something', 'default value')} />
      </div>
    </Section>
  );
}
