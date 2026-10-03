interface MusicButtonProps {
  playing: boolean;
  onToggle: () => void;
}

export function MusicButton({ playing, onToggle }: MusicButtonProps) {
  return (
    <button type="button" className="ak-music" aria-label={playing ? "Sesi kapat" : "Sesi aç"} onClick={onToggle}>
      {playing ? "♪" : "🔇"}
    </button>
  );
}
