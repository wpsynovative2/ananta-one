// Brand loader built from loading.txt. Text is light, so render it on a dark surface.
// The loader's internals are em-based (--main-size: 4em), so scale it via the wrapper's font-size.
export default function Loader({ scale = "16px", label = "Loading" }: { scale?: string; label?: string }) {
  return (
    <div role="status" aria-live="polite" className="flex flex-col items-center" style={{ fontSize: scale }}>
      <div className="loader" aria-hidden="true">
        {Array.from({ length: 9 }, (_, i) => (
          <div className="text" key={i}>
            <span>{label}</span>
          </div>
        ))}
        <div className="line" />
      </div>
      <span className="sr-only">{label}…</span>
    </div>
  );
}

export function FullScreenLoader({ label }: { label?: string }) {
  return (
    <div className="bg-tiles fixed inset-0 z-[100] grid place-items-center overflow-hidden">
      <Loader scale="clamp(12px, 3.4vw, 18px)" label={label} />
    </div>
  );
}
