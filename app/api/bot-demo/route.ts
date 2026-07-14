import { NextResponse } from 'next/server';
import { TelegramBot, TelegramApiError } from '@core-ease/telegram-kit/bot';

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    return NextResponse.json(
      { ok: false, error: 'Set TELEGRAM_BOT_TOKEN in your environment to try this route.' },
      { status: 400 }
    );
  }

  const bot = new TelegramBot({ token });

  try {
    const me = await bot.getMe();
    return NextResponse.json({ ok: true, me });
  } catch (err) {
    if (err instanceof TelegramApiError) {
      return NextResponse.json({ ok: false, error: err.message, code: err.errorCode }, { status: 502 });
    }
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
