'use client';

import { useBiometric, useLocation } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function BiometricLocationSection() {
  const bio = useBiometric();
  const loc = useLocation();

  return (
    <Section title="Biometric & location">
      <p className="hint">
        biometric: inited {String(bio.isInited)}, available {String(bio.isAvailable)}, type {bio.biometricType}
      </p>
      <div className="row">
        <ActionButton label="biometric.init()" onRun={() => bio.init()} variant="secondary" />
        <ActionButton label="biometric.requestAccess()" onRun={() => bio.requestAccess('Demo reason')} variant="secondary" />
        <ActionButton label="biometric.authenticate()" onRun={() => bio.authenticate('Demo reason')} variant="secondary" />
        <ActionButton label="biometric.openSettings()" onRun={() => bio.openSettings()} variant="secondary" />
      </div>
      <p className="hint">location: inited {String(loc.isInited)}, granted {String(loc.isGranted)}</p>
      <div className="row">
        <ActionButton label="location.init()" onRun={() => loc.init()} variant="secondary" />
        <ActionButton label="location.getLocation()" onRun={() => loc.getLocation()} variant="secondary" />
        <ActionButton label="location.openSettings()" onRun={() => loc.openSettings()} variant="secondary" />
      </div>
      {loc.locationData && <div className="result">{JSON.stringify(loc.locationData, null, 2)}</div>}
    </Section>
  );
}
