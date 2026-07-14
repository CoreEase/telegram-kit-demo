'use client';

import { useState, type ReactNode } from 'react';

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function format(value: unknown): string {
  if (value === undefined) return 'undefined';
  if (typeof value === 'string') return value;
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

export function ActionButton({
  label,
  onRun,
  variant = 'primary',
}: {
  label: string;
  onRun: () => unknown | Promise<unknown>;
  variant?: 'primary' | 'secondary' | 'destructive';
}) {
  const [result, setResult] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const handleClick = async () => {
    setPending(true);
    try {
      const value = await onRun();
      setResult(format(value));
    } catch (err) {
      setResult(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setPending(false);
    }
  };

  return (
    <div>
      <div className="row">
        <button className={`btn ${variant !== 'primary' ? variant : ''}`} onClick={handleClick} disabled={pending}>
          {pending ? '...' : label}
        </button>
      </div>
      {result !== null && <div className="result">{result}</div>}
    </div>
  );
}
