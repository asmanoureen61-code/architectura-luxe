export function FloorPlanGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1"
    >
      <rect x="4" y="4" width="112" height="82" />
      <path d="M4 34h44M48 4v30M48 56h68M76 34v52M4 60h44M92 56v30" />
      <path d="M20 60v26M20 73h28" opacity="0.5" />
      <path d="M62 4v30M62 19h14" opacity="0.5" />
      <circle cx="98" cy="20" r="8" opacity="0.5" />
    </svg>
  );
}