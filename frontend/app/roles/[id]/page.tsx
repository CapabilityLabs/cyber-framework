"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Users, TrendingUp, Video, Play, Shield } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { roles, skills as allSkills } from "@/data/roles";
import { notFound } from "next/navigation";

export default function RoleDetailPage() {
  const params = useParams();
  const roleId = params?.id as string;
  const role = roles.find((r) => r.id === roleId);

  if (!role) {
    notFound();
  }

  const relatedRolesData = role.relatedRoles
    .map((id) => roles.find((r) => r.id === id))
    .filter(Boolean);

  const roleSkills = role.skills
    .map((skillId) => allSkills.find((s) => s.id === skillId))
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900">
      <Header />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
          <div className="container mx-auto max-w-[1200px] px-4">
            <Link href="/roles">
              <Button variant="ghost" className="mb-6 text-slate-300 hover:text-white hover:bg-slate-800 pl-0">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to all roles
              </Button>
            </Link>
            <div className="flex items-start gap-4">
                <div className="mt-1 hidden md:block p-3 bg-blue-600 rounded-lg">
                    <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                    <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 border-none">{role.category}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{role.title}</h1>
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                    {role.description}
                    </p>
                </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Career Levels */}
              <Card>
                <CardHeader>
                  <CardTitle>Career Levels</CardTitle>
                  <CardDescription>
                    Explore the different levels within this role and the skills required at each stage.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={role.levels[0].level} className="w-full">
                    <TabsList className="w-full justify-start h-auto p-1 flex-wrap">
                      {role.levels.map((level) => (
                        <TabsTrigger key={level.level} value={level.level} className="flex-1 min-w-[100px]">
                          {level.level}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {role.levels.map((level) => (
                      <TabsContent key={level.level} value={level.level} className="mt-6 animate-in fade-in-50">
                        <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200">
                            <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                            <p className="text-zinc-600 mb-6">{level.description}</p>
                            
                            <div>
                            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-zinc-500">Skills required at this level:</h4>
                            <div className="flex flex-wrap gap-2">
                                {level.skills.map((skillId) => {
                                const skill = allSkills.find(s => s.id === skillId);
                                return skill ? (
                                    <Link key={skillId} href={`/skills/${skill.id}`}>
                                        <Badge variant="outline" className="hover:bg-zinc-100 cursor-pointer transition-colors py-1 px-2 text-sm">
                                        {skill.name}
                                        </Badge>
                                    </Link>
                                ) : null;
                                })}
                            </div>
                            </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              {/* Video Section (Placeholder) */}
              {role.videoUrl && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="w-5 h-5" />
                      Role Insights Video
                    </CardTitle>
                    <CardDescription>
                      Hear from someone working in this role about their experience and advice.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-zinc-100 rounded-lg flex items-center justify-center border border-zinc-200">
                      <p className="text-zinc-500 flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          Video player would be embedded here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tips for Getting Into Role */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    Becoming a {role.title}
                  </CardTitle>
                  <CardDescription>
                    Tips and advice for entering and succeeding in this role.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {role.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 bg-green-100 p-1 rounded-full">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-zinc-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Skills</CardTitle>
                  <CardDescription>
                    Core competencies for this role
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {roleSkills.map((skill) => (
                      <Link key={skill!.id} href={`/skills/${skill!.id}`} className="block group">
                        <div className="p-3 rounded-lg border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 transition-colors">
                            <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{skill!.name}</h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">{skill!.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-100 text-center">
                      <Button variant="link" asChild>
                          <Link href="/skills">View all skills</Link>
                      </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Roles */}
              {relatedRolesData.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Related Roles
                    </CardTitle>
                    <CardDescription>
                      Similar roles you might be interested in
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {relatedRolesData.map((relatedRole) => (
                        <Link key={relatedRole!.id} href={`/roles/${relatedRole!.id}`}>
                          <div className="p-3 rounded-lg border border-zinc-200 hover:border-primary hover:bg-zinc-50 transition-colors">
                            <p className="font-semibold text-sm">{relatedRole!.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{relatedRole!.category}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Actions */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Ready to learn?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link href="/learn">
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

