"use client";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { roles, categories } from "@/data/roles";
import { ArrowRight, Search, Shield, Filter } from "lucide-react";
import Link from "next/link";
import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function RolesContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("q") || "";
  const initialCategory = searchParams?.get("category") || "all";

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredRoles = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return roles.filter((role) => {
      const matchesSearch =
        role.title.toLowerCase().includes(searchLower) ||
        role.description.toLowerCase().includes(searchLower);
      const matchesCategory =
        selectedCategory === "all" || role.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Cyber Security Roles</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover the diverse range of roles within the Government Cyber Profession. Each role plays a critical part in securing government services and data.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-end md:items-center justify-between bg-white p-4 rounded-lg border shadow-sm">
            <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                    placeholder="Search roles..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                <Button 
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    onClick={() => setSelectedCategory("all")}
                    size="sm"
                >
                    All
                </Button>
                {categories.map(cat => (
                    <Button
                        key={cat.id}
                        variant={selectedCategory === cat.id ? "default" : "outline"}
                        onClick={() => setSelectedCategory(cat.id)}
                        size="sm"
                        className="whitespace-nowrap"
                    >
                        {cat.name}
                    </Button>
                ))}
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredRoles.map((role) => (
              <Link key={role.id} href={`/roles/${role.id}`} className="block h-full group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="mb-2">{role.category}</Badge>
                        <Shield className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <CardDescription className="line-clamp-3 mb-4 text-base">
                      {role.description}
                    </CardDescription>
                    <div className="mt-auto pt-4 border-t border-zinc-100">
                        <div className="text-sm font-medium text-primary flex items-center">
                            View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredRoles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No roles found matching your criteria.</p>
              <Button 
                variant="link" 
                onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function RolesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RolesContent />
    </Suspense>
  );
}

