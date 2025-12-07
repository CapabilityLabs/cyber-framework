"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { Search, Filter } from "lucide-react";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, roles } from "@/data/roles";

function SearchRolesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  useEffect(() => {
    if (!searchParams) return;
    const q = searchParams.get("q");
    const category = searchParams.get("category");

    if (q) setSearchTerm(q);
    if (category) setSelectedCategory(category);
  }, [searchParams]);

  const filteredRoles = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();

    return roles.filter((role) => {
      const matchesSearch =
        searchLower.length === 0 ||
        role.title.toLowerCase().includes(searchLower) ||
        role.description.toLowerCase().includes(searchLower) ||
        role.skills.some((skill) => skill.toLowerCase().includes(searchLower)) ||
        role.synonyms?.some((synonym) => synonym.toLowerCase().includes(searchLower));

      const matchesCategory = selectedCategory === "all" || role.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const autocompleteResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];
    return filteredRoles.slice(0, 5);
  }, [searchTerm, filteredRoles]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="mb-8 max-w-3xl">
            <h1 className="mb-4">Search Roles</h1>
            <p className="text-xl text-muted-foreground">
              Find the right role for you by searching across titles, skills, and descriptions.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
              <Input
                placeholder="Search by role name, skills, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowAutocomplete(true)}
                onBlur={() => setTimeout(() => setShowAutocomplete(false), 200)}
                className="pl-10 h-12"
              />
              {showAutocomplete && autocompleteResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 z-50">
                  <Command className="rounded-lg border shadow-md bg-background">
                    <CommandList>
                      <CommandGroup heading="Suggested roles">
                        {autocompleteResults.map((role) => (
                          <CommandItem
                            key={role.id}
                            className="cursor-pointer"
                            onSelect={() => router.push(`/role/${role.id}`)}
                          >
                            <div className="flex flex-col">
                              <span className="font-medium">{role.title}</span>
                              <span className="text-xs text-muted-foreground">{role.category}</span>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>
              )}
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-64 h-12">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <p className="text-muted-foreground">
              Showing {filteredRoles.length} {filteredRoles.length === 1 ? "role" : "roles"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredRoles.map((role) => (
              <Link key={role.id} href={`/role/${role.id}`} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="secondary">{role.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{role.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs capitalize">
                          {skill.replace(/-/g, " ")}
                        </Badge>
                      ))}
                      {role.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{role.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredRoles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No roles found matching your search.</p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  router.push("/search");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function SearchRolesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <SearchRolesContent />
    </Suspense>
  );
}
