'use client';

import { useState } from 'react';
import { LottiePlayer, TgsPlayer } from '@core-ease/telegram-kit/animation';
import { Section } from './ui';

const SAMPLE_LOTTIE_URL = 'https://assets9.lottiefiles.com/packages/lf20_puciaact.json';

export function StickersSection() {
  const [lottieUrl, setLottieUrl] = useState(SAMPLE_LOTTIE_URL);
  const [tgsUrl, setTgsUrl] = useState('');

  return (
    <Section title="Animated stickers (Lottie / TGS)">
      <div className="row">
        <input className="input" value={lottieUrl} onChange={(e) => setLottieUrl(e.target.value)} placeholder="Lottie JSON URL" />
      </div>
      {lottieUrl && <LottiePlayer src={lottieUrl} autoplay loop width={120} height={120} />}
      <div className="row" style={{ marginTop: 10 }}>
        <input className="input" value={tgsUrl} onChange={(e) => setTgsUrl(e.target.value)} placeholder="Paste a .tgs sticker URL" />
      </div>
      {tgsUrl && <TgsPlayer src={tgsUrl} autoplay loop width={120} height={120} />}
    </Section>
  );
}
