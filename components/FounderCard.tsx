import Image from 'next/image';

export type FounderCardProps = {
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  imageSrc?: string;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function FounderCard({
  name,
  title,
  bio,
  credentials,
  imageSrc,
}: FounderCardProps) {
  const initials = getInitials(name);

  return (
    <section
      aria-labelledby="founder-title"
      className="py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:grid-cols-[18rem_minmax(0,1fr)] lg:p-8">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
            <div className="aspect-[4/5]">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={`${name} portrait`}
                  fill
                  sizes="(min-width: 1024px) 18rem, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    {initials}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/85">
              Founder story
            </p>
            <h2
              id="founder-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Add a human authority layer to the homepage.
            </h2>
            <div className="mt-6">
              <p className="text-xl font-semibold text-white">{name}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                {title}
              </p>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              {bio}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">
              {credentials.map((credential) => (
                <li
                  key={credential}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                >
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
