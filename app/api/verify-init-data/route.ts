import { NextRequest, NextResponse } from 'next/server';
import { validateInitData } from '@core-ease/telegram-kit/server';

export async function POST(req: NextRequest) {
  const { initData } = await req.json();
  const botToken = process.env.TELEGRAM_BOT_TOKEN;

  if (!botToken) {
    return NextResponse.json(
      { ok: false, error: 'Set TELEGRAM_BOT_TOKEN in your environment to try this route.' },
      { status: 400 }
    );
  }

  const result = await validateInitData(initData ?? '', botToken);
  return NextResponse.json(result);
}
