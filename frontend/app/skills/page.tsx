"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { skills, roles } from "@/data/roles";
import { Badge } from "@/components/ui/badge";
import { Search, Layers } from "lucide-react";
import { useState, useMemo } from "react";

export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSkills = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchLower) ||
        skill.description.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  // Calculate usage count for each skill
  const skillUsage = useMemo(() => {
    const usage: Record<string, number> = {};
    roles.forEach(role => {
        role.skills.forEach(skillId => {
            usage[skillId] = (usage[skillId] || 0) + 1;
        });
        role.levels.forEach(level => {
            level.skills.forEach(skillId => {
                usage[skillId] = (usage[skillId] || 0) + 1;
            });
        });
    });
    return usage;
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Cyber Security Skills</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              The fundamental capabilities required across the Government Cyber Profession. 
              Explore skills to see how they apply to different roles.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 relative max-w-xl">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search skills..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill) => (
              <Link key={skill.id} href={`/skills/${skill.id}`} className="block h-full group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                             <Layers className="h-5 w-5" />
                        </div>
                        <Badge variant="secondary" className="ml-2">
                            Used in {skillUsage[skill.id] || 0} roles
                        </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-zinc-600">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No skills found matching &quot;{searchTerm}&quot;</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
