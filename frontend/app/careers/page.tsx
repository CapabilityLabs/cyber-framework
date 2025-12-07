"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle, Quote } from "lucide-react";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getChannelConfig } from "@/data/channels";

const channel = getChannelConfig("careers");

const jobListings = [
  {
    title: "Associate IT Service Manager – Live Service",
    department: "Department for Work and Pensions",
    location: "Newcastle upon Tyne",
    salary: "£32,137",
    closes: "9 December 2025",
    categories: ["Digital Information Technology"],
  },
  {
    title: "Head of Policy Analysis",
    department: "Companies House",
    location: "Edinburgh",
    salary: "£58,531",
    closes: "3 December 2025",
    categories: ["Architecture and Data"],
  },
  {
    title: "IT Asset Manager (FinOps)",
    department: "Department for Work and Pensions",
    location: "Newcastle upon Tyne",
    salary: "£44,447",
    closes: "7 December 2025",
    categories: ["Corporate Finance", "Digital Information Technology"],
  },
  {
    title: "Lead Technical Architect (Solutions)",
    department: "Department for Work and Pensions",
    location: "Sheffield",
    salary: "£75,026",
    closes: "14 December 2025",
    categories: ["Architecture and Data", "Digital Information Technology"],
  },
  {
    title: "Senior Data Architect (up to £81,736)",
    department: "Department for Education",
    location: "London",
    salary: "£58,185",
    closes: "7 December 2025",
    categories: ["Architecture and Data"],
  },
  {
    title: "Senior NetOps Engineer",
    department: "Department for Work and Pensions",
    location: "Leeds",
    salary: "£57,946",
    closes: "7 December 2025",
    categories: ["Digital Engineering", "Information Technology"],
  },
  {
    title: "Lead Digital Project Manager",
    department: "Department for Work and Pensions",
    location: "Newcastle upon Tyne",
    salary: "£75,026",
    closes: "7 December 2025",
    categories: ["Digital Information Technology"],
  },
  {
    title: "Departmental Records Officer",
    department: "Department for Culture, Media and Sport",
    location: "Manchester",
    salary: "£54,582",
    closes: "7 December 2025",
    categories: ["Architecture and Data", "Digital"],
  },
  {
    title: "Data Engineer",
    department: "Ofsted",
    location: "Bristol",
    salary: "£37,899",
    closes: "7 December 2025",
    categories: ["Analytical", "Digital", "Other"],
  },
  {
    title: "NAVY CSF Communications and Information Systems Equipment Manager",
    department: "Ministry of Defence",
    location: "Portsmouth",
    salary: "£30,740",
    closes: "5 December 2025",
    categories: ["Digital"],
  },
];

const techTrackCards = [
  {
    title: "What is the TechTrack programme",
    description:
      "TechTrack is a Level 4 advanced digital apprenticeship with tailored AI and leadership content. It is a unique way to join the growing Government Digital and Data community.",
    cta: "Read more about TechTrack",
    href: "#techtrack",
  },
  {
    title: "TechTrack information sessions",
    description:
      "We run regular information sessions before and during recruitment campaigns. Register now to be notified when the next sessions go live.",
    cta: "Register for TechTrack updates",
    href: "#techtrack-info",
  },
  {
    title: "TechTrack providing the skills",
    description:
      "GDS leaders Angie Jones and Richard Kelly explain how TechTrack will bring 2,000 apprentices into Whitehall departments by 2030.",
    cta: "Read the blog",
    href: "#techtrack-blog",
  },
];

export default function CareersPage() {
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
            <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span
                    className="h-16 w-2 rounded-full md:h-20"
                    style={{
                      backgroundColor: channel.color,
                    }}
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">About Government Digital and Data</p>
                    <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">A community delivering impact</h2>
                  </div>
                </div>
                <p className="text-lg text-zinc-800">
                  Government Digital and Data is a community of experts leading digital transformation in government, creating more
                  efficient services that have a meaningful impact on people’s lives.
                </p>
                <p className="text-lg text-zinc-800">
                  Watch our video to find out what working for Government Digital and Data means. From early talent to Senior Civil
                  Servant, our professionals benefit from the unrivalled opportunity to make a big difference to the lives of people
                  in the UK.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" variant="outline">
                    <Link href="#working-with-gdd">Read more about working with Government Digital and Data</Link>
                  </Button>
                </div>
              </div>

              <div
                className="overflow-hidden rounded-3xl border border-zinc-200 text-white shadow-xl"
                style={{
                  boxShadow: `0 25px 40px -20px ${channel.color}55`,
                }}
              >
                <div className="relative aspect-[16/9] w-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{
                      backgroundImage: "url(/hero-carousel-1.jpg)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
                  <button
                    className="group absolute inset-0 flex items-center justify-center"
                    aria-label="Play video"
                  >
                    <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/85 text-zinc-900 shadow-2xl transition group-hover:scale-105 group-hover:bg-white">
                      <PlayCircle className="h-12 w-12 transition group-hover:scale-110" />
                    </span>
                  </button>
                </div>
                <div className="bg-gradient-to-r from-black via-zinc-900/80 to-black/70 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Featured video</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-white/95">Introducing Government Digital and Data</h3>
                    <span className="hidden h-1 w-8 rounded-full bg-white/40 sm:inline-flex" />
                    <Link
                      href="#working-with-gdd"
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white"
                    >
                      Watch now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-16" id="working-with-gdd">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-10">
              <Quote className="h-10 w-10 text-primary" aria-hidden="true" />
              <p className="mt-6 text-2xl font-semibold text-zinc-900 md:text-[28px]">
                “Joining Government Digital and Data means being at the heart of transforming public services. You’ll have the
                opportunity to solve complex challenges and drive innovation that benefits millions. It’s a chance to grow, develop
                new skills, and be part of a team shaping the future of government.”
              </p>
              <div className="mt-6 border-t border-dashed border-zinc-200 pt-6">
                <p className="text-lg font-semibold text-zinc-900">Joanna Davinson</p>
                <p className="text-sm text-zinc-600">Government’s Chief Digital Officer</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-16" id="about-video">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Spotlight story</p>
                <h3 className="text-3xl font-bold">Ozair shares his journey of driving positive change through technology</h3>
                <p className="text-lg text-zinc-700">
                  Ozair is a dedicated Power Platform Developer at the Department for Science, Innovation and Technology. He shares his
                  incredible journey of driving positive change through technology, from developing innovative solutions to shaping
                  public services that improve lives to collaborating with a dynamic team of experts. Ozair is proud to be part of our
                  community.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Watch</p>
                <h4 className="mt-3 text-2xl font-semibold text-zinc-900">Driving impact with the Power Platform</h4>
                <p className="mt-3 text-sm text-zinc-600">
                  Hear directly from Ozair on how building modern services in Government Digital and Data means improving outcomes for
                  millions of people.
                </p>
                <Button asChild className="mt-6 w-full">
                  <Link href="#ozair-story" className="inline-flex items-center justify-center gap-2">
                    <PlayCircle className="h-5 w-5" />
                    Watch Ozair’s story
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-b border-zinc-200"
          style={{
            backgroundColor: "#FFF8F3",
          }}
          id="secondments"
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Digital Secondments Programme</p>
                <h3 className="text-3xl font-bold text-zinc-900">Bring your expertise into government</h3>
                <p className="text-lg text-zinc-700">
                  The Civil Service is looking for digital and data professionals to be seconded to government to join us in transforming
                  our digital services.
                </p>
                <p className="text-lg text-zinc-700">
                  We are seeking talented data architects, technical architects and data engineers to join this cohort of the programme.
                  You will work with experienced civil servants and subject matter experts within government to tackle unique and
                  large-scale challenges.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h4 className="text-2xl font-semibold text-zinc-900">Applications now open</h4>
                <p className="mt-3 text-sm text-zinc-600">
                  Join a network of secondees delivering secure, modern platforms that the public relies on daily.
                </p>
                <Button asChild className="mt-6 w-full">
                  <Link href="#secondments-more">Read more about secondments</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white" id="vacancies">
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-20">
            <div className="mb-10 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Join us</p>
              <h3 className="text-3xl font-bold">Government Digital and Data vacancies across government</h3>
              <p className="text-lg text-zinc-700">
                Browse a snapshot of current opportunities across departments. Use the search tool to find the full list and tailor it to
                your skills.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {jobListings.map((job) => (
                <Card key={job.title} className="h-full border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription>{job.department}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-zinc-600">
                      <p className="font-semibold text-zinc-900">Location:</p>
                      <p>{job.location}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Badge variant="secondary" className="bg-zinc-100 text-zinc-800">
                        {job.salary}
                      </Badge>
                      <Badge variant="secondary" className="bg-zinc-100 text-zinc-800">
                        Closes {job.closes}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.categories.map((category) => (
                        <Badge key={`${job.title}-${category}`} variant="outline" className="border-zinc-300 text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="ghost" className="px-0 text-sm font-semibold text-primary">
                      <Link href="/search?channel=careers" className="inline-flex items-center gap-2">
                        See role details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200" style={{ backgroundColor: "#F3F6FF" }}>
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-20" id="techtrack">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">TechTrack Apprenticeship Programme</p>
              <h3 className="mt-3 text-3xl font-bold">Build future-ready skills</h3>
              <p className="mt-4 text-lg text-zinc-700">
                TechTrack brings new talent into Government Digital and Data with structured learning, advanced digital skills and a
                supportive community.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {techTrackCards.map((card) => (
                <Card key={card.title} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-zinc-600">{card.description}</p>
                    <Button asChild variant="ghost" className="px-0 text-sm font-semibold text-primary">
                      <Link href={card.href} className="inline-flex items-center gap-2">
                        {card.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Events and learning opportunities</p>
            <h3 className="mt-4 text-3xl font-bold">Grow with cross-government learning</h3>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-700">
              Government Digital and Data professionals benefit from cross-government events and learning. From webinars featuring the
              world’s leading innovators to digital upskilling sessions, you will gain the skills to drive world-leading advancements in
              digital transformation and government innovation.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#events">Explore our events</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
