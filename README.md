# @core-ease/telegram-kit demo

A Next.js (App Router) app that exercises every export of `@core-ease/telegram-kit`: hooks, core functions, the SDK, QR codes, stickers, formatting/links/keyboards, and the server-side Bot API client + `initData` verification.

It works both as a normal website and as a Telegram Mini App — outside Telegram every feature falls back to its browser-native equivalent instead of breaking.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. In development, `installDevMode()` seeds a fake user/theme automatically, so every section is testable straight in a regular browser tab.

To try the server-side routes (`/api/verify-init-data`, `/api/bot-demo`), copy `.env.example` to `.env.local` and set `TELEGRAM_BOT_TOKEN` to a real bot token from [@BotFather](https://t.me/BotFather).

## Running it inside Telegram

1. Deploy this app somewhere with HTTPS (Vercel, Cloudflare Pages, etc.), or use a tunnel (`ngrok http 3000`) for local testing.
2. In [@BotFather](https://t.me/BotFather): `/newapp` (or `/setmenubutton` for an existing bot) and point it at your deployed URL.
3. Open the bot in Telegram and launch the Mini App — the same page now runs with the real `WebApp` bridge instead of the browser fallbacks.

## Structure

```
app/
  layout.tsx       Root layout + viewport meta
  providers.tsx     installDevMode() + <TelegramProvider>
  page.tsx          Renders every demo section
  api/
    verify-init-data/route.ts   validateInitData() on the server
    bot-demo/route.ts           TelegramBot.getMe() on the server
components/
  *.tsx             One section per feature area (see page.tsx for the full list)
```
