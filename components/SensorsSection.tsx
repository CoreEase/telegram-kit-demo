'use client';

import { useAccelerometer, useGyroscope, useDeviceOrientation } from '@core-ease/telegram-kit';
import { Section } from './ui';

export function SensorsSection() {
  const accel = useAccelerometer({ refreshRate: 200 });
  const gyro = useGyroscope({ refreshRate: 200 });
  const orient = useDeviceOrientation({ refreshRate: 200 });

  return (
    <Section title="Accelerometer / Gyroscope / DeviceOrientation">
      <p className="hint">Only report data inside the real Telegram app on a device with sensors.</p>
      <div className="row">
        <button className="btn secondary" onClick={accel.isStarted ? accel.stop : accel.start}>
          Accelerometer: {accel.isStarted ? 'stop' : 'start'}
        </button>
        <button className="btn secondary" onClick={gyro.isStarted ? gyro.stop : gyro.start}>
          Gyroscope: {gyro.isStarted ? 'stop' : 'start'}
        </button>
        <button className="btn secondary" onClick={orient.isStarted ? orient.stop : orient.start}>
          DeviceOrientation: {orient.isStarted ? 'stop' : 'start'}
        </button>
      </div>
      <div className="result">
        accelerometer x:{accel.x.toFixed(2)} y:{accel.y.toFixed(2)} z:{accel.z.toFixed(2)}
        {'\n'}gyroscope x:{gyro.x.toFixed(2)} y:{gyro.y.toFixed(2)} z:{gyro.z.toFixed(2)}
        {'\n'}orientation alpha:{orient.alpha.toFixed(2)} beta:{orient.beta.toFixed(2)} gamma:{orient.gamma.toFixed(2)}
      </div>
    </Section>
  );
}
