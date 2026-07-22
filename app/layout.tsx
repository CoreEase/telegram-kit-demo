import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: '@core-ease/telegram-kit demo',
  description: 'Full feature demo of @core-ease/telegram-kit, works as a website and as a Telegram Mini App.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0e1621',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.GramAds = function() {
                return new Promise((resolve, reject) => {
                  if (typeof window._GramAdsShowAd === 'function') {
                    window._GramAdsShowAd()
                      .then(() => resolve())
                      .catch(() => resolve());
                  } else {
                    resolve(); 
                  }
                });
              }
            `,
          }}
        />
        <script async src="https://gramads.pp.ua/sdk/GramAds.js?id=3" />
      </head>
      <body>
        <script src="https://cdn.jsdelivr.net/npm/eruda" />
        <script dangerouslySetInnerHTML={{ __html: "eruda.init();" }} />
        
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
