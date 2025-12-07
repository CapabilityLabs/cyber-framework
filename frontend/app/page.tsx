"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowRight, Layers, Search, TrendingUp, Users, Shield } from "lucide-react";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { roles } from "@/data/roles";

export default function HomePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const filteredRoles = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];
    const searchLower = searchTerm.toLowerCase();
    return roles
      .filter(
        (role) =>
          role.title.toLowerCase().includes(searchLower) ||
          role.description.toLowerCase().includes(searchLower) ||
          role.skills.some((skill) => skill.toLowerCase().includes(searchLower)) ||
          role.synonyms?.some((synonym) => synonym.toLowerCase().includes(searchLower)),
      )
      .slice(0, 5);
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/roles?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-zinc-200 bg-slate-900 text-white">
          <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-12 w-12 text-blue-400" />
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">Government Security</span>
                </div>
                <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                  Cyber Profession <br />
                  Capability Framework
                </h1>
                <p className="text-lg text-slate-300 md:text-xl">
                  Explore cyber security roles in government. Find the skills you need, discover career paths, and plan your professional development.
                </p>
                
                {/* Search Component */}
                <form onSubmit={handleSearch} className="relative max-w-lg">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
                    <Input
                      placeholder="Search roles and skills..."
                      className="h-14 bg-white pl-12 text-zinc-900 placeholder:text-zinc-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => setShowAutocomplete(true)}
                      onBlur={() => setTimeout(() => setShowAutocomplete(false), 200)}
                    />
                    {showAutocomplete && filteredRoles.length > 0 && (
                      <div className="absolute left-0 right-0 top-full z-50 mt-2">
                        <Command className="rounded-lg border bg-white shadow-xl">
                          <CommandList>
                            <CommandGroup heading="Suggested roles">
                              {filteredRoles.map((role) => (
                                <CommandItem
                                  key={role.id}
                                  onSelect={() => router.push(`/roles/${role.id}`)}
                                  className="cursor-pointer py-3"
                                >
                                  <div className="flex flex-col gap-1">
                                    <span className="font-medium text-zinc-900">{role.title}</span>
                                    <span className="text-xs text-zinc-500">{role.category}</span>
                                  </div>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex gap-4">
                    <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Search Roles
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white">
                      <Link href="/roles">View all roles</Link>
                    </Button>
                  </div>
                </form>
              </div>

              <div className="hidden md:block">
                 {/* Abstract visual representation of network/security */}
                 <div className="relative h-[400px] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                    <div className="relative flex flex-col gap-4 h-full justify-center">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm animate-pulse">
                            <div className="h-3 w-3 rounded-full bg-green-400"></div>
                            <div className="space-y-2">
                                <div className="h-2 w-32 bg-slate-600 rounded"></div>
                                <div className="h-2 w-24 bg-slate-600 rounded"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm translate-x-8">
                            <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                            <div className="space-y-2">
                                <div className="h-2 w-40 bg-slate-600 rounded"></div>
                                <div className="h-2 w-28 bg-slate-600 rounded"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                             <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                             <div className="space-y-2">
                                <div className="h-2 w-36 bg-slate-600 rounded"></div>
                                <div className="h-2 w-20 bg-slate-600 rounded"></div>
                             </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-zinc-900">Develop your cyber career</h2>
              <p className="mt-4 text-lg text-zinc-600">Tools and resources to help you grow in the Government Security Profession.</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Link href="/roles" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-blue-500/50">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Users className="h-6 w-6" />
                    </div>
                    <CardTitle>Explore Roles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Browse all cyber security roles, understand responsibilities, and see career progression paths.
                    </p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-blue-600">
                      View roles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/skills" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-purple-500/50">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Layers className="h-6 w-6" />
                    </div>
                    <CardTitle>Browse Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      See the comprehensive list of skills required for cyber professionals and which roles need them.
                    </p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-purple-600">
                      View skills <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/learn" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-green-500/50">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <CardTitle>Learning Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Access curated training, certifications, and guides to help you build your cyber capabilities.
                    </p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-green-600">
                      Start learning <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-zinc-100 py-16">
            <div className="container mx-auto max-w-[1000px] px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Part of the Government Security Profession</h2>
                <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
                    The Cyber Capability Framework aligns with industry standards like CyBOK and NIST to ensure our workforce is equipped to protect government services.
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild variant="outline">
                         <Link href="https://www.security.gov.uk/">Visit Security.gov.uk</Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
