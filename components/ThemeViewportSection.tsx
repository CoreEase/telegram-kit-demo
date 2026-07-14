'use client';

import {
  useTelegramTheme,
  useTelegramViewport,
  useTelegramFullscreen,
  useOrientationLock,
  useSafeArea,
} from '@core-ease/telegram-kit';
import { setHeaderColor, setBackgroundColor, setBottomBarColor } from '@core-ease/telegram-kit';
import { Section, ActionButton } from './ui';

export function ThemeViewportSection() {
  const { colorScheme, themeParams, isDark } = useTelegramTheme();
  const { height, stableHeight, isExpanded, expand } = useTelegramViewport();
  const { isFullscreen, error, enter, exit, toggle } = useTelegramFullscreen();
  const { isLocked, lock, unlock } = useOrientationLock();
  const { safeArea, contentSafeArea } = useSafeArea();

  return (
    <Section title="Theme, viewport, fullscreen & orientation">
      <div className="swatches">
        {Object.entries(themeParams).map(([key, value]) => (
          <div key={key} className="swatch" style={{ background: value as string }} title={key} />
        ))}
      </div>
      <p className="hint">
        {colorScheme} (isDark: {String(isDark)}) · viewport {height}×{stableHeight} (expanded: {String(isExpanded)}) ·
        fullscreen: {String(isFullscreen)} · orientation locked: {String(isLocked)}
      </p>
      <p className="hint">
        safeArea {JSON.stringify(safeArea)} · contentSafeArea {JSON.stringify(contentSafeArea)}
      </p>
      {error && <div className="result">fullscreen error: {error.error}</div>}
      <div className="row">
        <button className="btn secondary" onClick={expand}>expand()</button>
        <button className="btn secondary" onClick={toggle}>toggle fullscreen</button>
        <button className="btn secondary" onClick={enter}>enter fullscreen</button>
        <button className="btn secondary" onClick={exit}>exit fullscreen</button>
        <button className="btn secondary" onClick={lock}>lock orientation</button>
        <button className="btn secondary" onClick={unlock}>unlock orientation</button>
      </div>
      <div className="row">
        <ActionButton label="setHeaderColor('#5288c1')" onRun={() => setHeaderColor('#5288c1')} />
        <ActionButton label="setBackgroundColor('bg_color')" onRun={() => setBackgroundColor('bg_color')} />
        <ActionButton label="setBottomBarColor('secondary_bg_color')" onRun={() => setBottomBarColor('secondary_bg_color')} />
      </div>
    </Section>
  );
}
