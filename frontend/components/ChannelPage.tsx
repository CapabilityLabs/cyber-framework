import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import Header from "@/components/Header";
import { ChannelKey, getChannelConfig } from "@/data/channels";

type ChannelPageProps = {
  channelKey: ChannelKey;
};

const ChannelPage = ({ channelKey }: ChannelPageProps) => {
  const channel = getChannelConfig(channelKey);
  const primaryLink = channel.quickLinks[0];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
      <Header />
      <main className="flex-1">
        <section
          className="border-b border-zinc-200 text-white"
          style={{
            backgroundColor: channel.color,
          }}
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">You are viewing</p>
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-3xl font-black uppercase tracking-wide md:text-4xl">{channel.label}</h1>
              <p className="text-sm font-semibold text-white/80">{channel.summary}</p>
            </div>
          </div>
        </section>

        <section
          className="border-b border-zinc-200"
          style={{
            backgroundColor: channel.tint,
          }}
        >
          <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
            <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span
                    className="h-16 w-2 rounded-full md:h-20"
                    style={{
                      backgroundColor: channel.color,
                    }}
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">GDD Hub</p>
                    <p className="text-3xl font-bold sm:text-4xl text-zinc-900">{channel.label}</p>
                    <p className="text-sm font-semibold text-zinc-600">{channel.summary}</p>
                  </div>
                </div>
                <p className="text-lg text-zinc-800">{channel.description}</p>
                <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-wide text-zinc-700">
                  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5">
                    <Sparkles className="h-4 w-4 text-zinc-400" />
                    {channel.analogy}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5">
                    Audience: {channel.audience}
                  </span>
                </div>
                {primaryLink && (
                  <Link
                    href={primaryLink.href}
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-zinc-900"
                  >
                    {primaryLink.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </div>

              <div
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
                style={{
                  boxShadow: `0 15px 30px -15px ${channel.color}33`,
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Inside this channel</p>
                <ul className="mt-4 space-y-4 text-sm text-zinc-700">
                  {channel.quickLinks.map((link) => (
                    <li key={link.label} className="flex items-start gap-3">
                      <span
                        className="mt-1 h-2 w-2 rounded-full"
                        style={{
                          backgroundColor: channel.color,
                        }}
                      />
                      <div>
                        <p className="font-semibold text-zinc-900">{link.label}</p>
                        <p className="text-xs text-zinc-600">Template content placeholder for this section.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white/70">
          <div className="mx-auto max-w-[1200px] px-4 py-12">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">What you will find</p>
              <h2 className="text-2xl font-bold">Channel highlights</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {channel.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <span
                    className="mb-4 h-1.5 w-12 rounded-full"
                    style={{
                      backgroundColor: channel.color,
                    }}
                  />
                  <h3 className="mb-2 text-lg font-semibold">{highlight.title}</h3>
                  <p className="text-sm text-zinc-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="flex flex-col gap-6 rounded-3xl border border-dashed border-zinc-300 bg-white/60 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Coming soon</p>
                <h3 className="text-2xl font-bold">Future features & pilots</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  This page acts as a GDD-aligned template so stakeholders can visualise how the hub will scale across new channels
                  for GDS and DSIT partners.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                {channel.highlights.map((highlight) => (
                  <div key={`future-${highlight.title}`} className="flex items-center gap-3">
                    <span
                      className="h-6 w-6 rounded-full"
                      style={{
                        backgroundColor: channel.color,
                      }}
                    />
                    <span className="font-semibold text-zinc-800">{highlight.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChannelPage;


