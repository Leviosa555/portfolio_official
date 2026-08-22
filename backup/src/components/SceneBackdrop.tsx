export function SceneBackdrop({ image }: { image: string }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.03] scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
    </div>
  );
}
