'use client';

import { useRef, useState } from 'react';
import { useReadTextFromClipboard, useScanQrPopup } from '@core-ease/telegram-kit';
import { QRCode, downloadQRCode } from '@core-ease/telegram-kit/qr';
import { Section, ActionButton } from './ui';

export function ClipboardQrSection() {
  const readClipboard = useReadTextFromClipboard();
  const scanQr = useScanQrPopup();
  const [qrValue, setQrValue] = useState('https://t.me/YourBot/app');
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <Section title="Clipboard & QR codes">
      <div className="row">
        <ActionButton label="readTextFromClipboard()" onRun={() => readClipboard()} />
        <ActionButton label="scanQrPopup()" onRun={() => scanQr({ text: 'Scan a QR code' })} />
      </div>
      <div className="row">
        <input
          className="input"
          value={qrValue}
          onChange={(e) => setQrValue(e.target.value)}
          placeholder="Text to encode"
        />
        <button
          className="btn secondary"
          onClick={() => downloadQRCode(svgRef.current, { format: 'png', fileName: 'demo-qr' })}
        >
          Download PNG
        </button>
      </div>
      <QRCode ref={svgRef} value={qrValue} size={160} dotColor="#5288c1" backgroundColor="#ffffff" borderRadius={12} />
    </Section>
  );
}
