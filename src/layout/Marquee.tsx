// A slow, looping ticker strip — the bit of movement/texture the plain
// homepage was missing. Content is duplicated once so the loop is seamless.

const PHRASES = [
  "Cooked generously",
  "Made with love",
  "Authentic Nigerian flavors",
  "Cure your cravings",
];

export function Marquee() {
  const items = [...PHRASES, ...PHRASES];

  return (
    <div className="overflow-hidden border-y border-line">
      <div className="flex w-max animate-marquee py-4">
        {items.map((phrase, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap px-8 text-xs font-semibold uppercase tracking-widest text-rust"
          >
            {phrase}
            <span className="text-inksoft/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
