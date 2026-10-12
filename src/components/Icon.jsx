const PATHS = {
  drop: '<path d="M12 3c3.5 4.6 6 7.9 6 11a6 6 0 0 1-12 0c0-3.1 2.5-6.4 6-11Z"/><path d="M9.5 15.5a2.6 2.6 0 0 0 2.5 2"/>',
  home: '<path d="M3 11 12 4l9 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>',
  leaf: '<path d="M5 19C5 10 10 5 20 4c-.5 9.5-5.5 15-15 15Z"/><path d="M5 19 14 10"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9.2A2 2 0 0 0 6.8 21h10.4a2 2 0 0 0 1.8-2.8L14 9V3"/><path d="M7.5 15h9"/>',
  flame: '<path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-10-2 2-2.5 4-2.5 5.5C10 9.5 9 8.5 9 7c-2 2-3 4.3-3 8a6 6 0 0 0 6 6Z"/>',
  gift: '<rect x="3.5" y="8.5" width="17" height="4" rx=".5"/><path d="M5 12.5V20h14v-7.5M12 8.5V20"/><path d="M12 8.5C10 8.5 7 8 7 6a2 2 0 0 1 3.5-1.3L12 8.5l1.5-3.8A2 2 0 0 1 17 6c0 2-3 2.5-5 2.5Z"/>',
  arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  left: '<path d="M20 12H4M10 6l-6 6 6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M4 8h16M4 16h16"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  chat: '<path d="M4 20l1.4-4A8 8 0 1 1 8 18.6Z"/><path d="M9 10.5h6M9 13.5h4"/>',
  shield: '<path d="M12 3 4.5 6v6c0 4.4 3.2 8 7.5 9 4.3-1 7.5-4.6 7.5-9V6L12 3Z"/><path d="m9 12 2 2 4-4"/>',
  box: '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"/><path d="M3 7.5 12 12l9-4.5M12 12v9"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8L3 12Z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
  pause: '<path d="M9 6v12M15 6v12"/>',
  play: '<path d="M8 5v14l11-7-11-7Z"/>',
};

export default function Icon({ name, className = "" }) {
  return (
    <svg className={`ico ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"
      dangerouslySetInnerHTML={{ __html: PATHS[name] || "" }} />
  );
}
