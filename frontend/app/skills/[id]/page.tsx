"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Layers, Shield } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills, roles } from "@/data/roles";

export default function SkillDetailPage() {
  const params = useParams();
  const skillId = params?.id as string;
  const skill = skills.find((s) => s.id === skillId);

  if (!skill) {
    notFound();
  }

  // Find roles that use this skill
  const rolesWithSkill = roles.filter((role) => 
    role.skills.includes(skillId) || 
    role.levels.some(level => level.skills.includes(skillId))
  );

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900">
      <Header />
      
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
          <div className="container mx-auto max-w-[1200px] px-4">
            <Link href="/skills">
              <Button variant="ghost" className="mb-6 text-slate-300 hover:text-white hover:bg-slate-800 pl-0">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to all skills
              </Button>
            </Link>
            <div className="flex items-start gap-4">
                <div className="mt-1 hidden md:block p-3 bg-purple-600 rounded-lg">
                    <Layers className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{skill.name}</h1>
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                    {skill.description}
                    </p>
                </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Roles requiring this skill
                </h2>
                
                {rolesWithSkill.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2">
                        {rolesWithSkill.map(role => (
                            <Link key={role.id} href={`/roles/${role.id}`} className="group">
                                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <Badge variant="secondary" className="mb-2">{role.category}</Badge>
                                        </div>
                                        <CardTitle className="group-hover:text-primary transition-colors text-lg">
                                            {role.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="line-clamp-2">
                                            {role.description}
                                        </CardDescription>
                                        <div className="mt-4 text-sm text-muted-foreground">
                                            {role.levels.some(l => l.skills.includes(skillId)) ? (
                                                <span className="inline-flex items-center text-xs bg-zinc-100 px-2 py-1 rounded text-zinc-600">
                                                    Specific levels require this
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center text-xs bg-zinc-100 px-2 py-1 rounded text-zinc-600">
                                                    Core role skill
                                                </span>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <Card>
                        <CardContent className="py-8 text-center text-muted-foreground">
                            This skill is not currently mapped to any specific roles in our database, but is generally valuable for the profession.
                        </CardContent>
                    </Card>
                )}
            </div>

            <div>
                <Card className="bg-purple-50 border-purple-100">
                    <CardHeader>
                        <CardTitle>Learning Resources</CardTitle>
                        <CardDescription>Improve this skill</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-zinc-600 mb-4">
                            Check our learning section for courses and guides related to <strong>{skill.name}</strong>.
                        </p>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                            <Link href={`/learn?q=${encodeURIComponent(skill.name)}`}>
                                Find Learning Resources
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

