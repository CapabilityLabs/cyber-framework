"use client";

import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, FileText, Search, Filter, ExternalLink, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState, Suspense } from "react";
import { learningResources } from "@/data/learning";
import { useSearchParams } from "next/navigation";

function LearningContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("q") || "";
  
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [supplierType, setSupplierType] = useState<string>("all");

  const supplierTypes = useMemo(() => {
    return Array.from(new Set(learningResources.map((r) => r.supplierType)));
  }, []);

  const filteredResources = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return learningResources.filter((r) => {
      const matchesSupplier =
        supplierType === "all" || r.supplierType.toLowerCase() === supplierType.toLowerCase();
      const matchesSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.supplierName.toLowerCase().includes(q) ||
        r.format.toLowerCase().includes(q);
      return matchesSupplier && matchesSearch;
    });
  }, [searchTerm, supplierType]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover curated learning paths, courses, and resources to develop your cyber skills and advance your career in government.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                         <GraduationCap className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">Certifications</CardTitle>
                </div>
                <CardDescription>
                  Professional qualifications recognized across the industry
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                         <Video className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">Training Courses</CardTitle>
                </div>
                <CardDescription>
                  Expert-led training on key skills and technologies
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-l-4 border-l-orange-500">
              <CardHeader>
                 <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                         <FileText className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">Guidance</CardTitle>
                </div>
                <CardDescription>
                  Standards, frameworks and best practice documentation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
              <Input
                placeholder="Search by title, topic, supplier, or tags..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={supplierType} onValueChange={setSupplierType}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All supplier types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All supplier types</SelectItem>
                {supplierTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Result count */}
          <div className="mb-4">
            <p className="text-muted-foreground">
              Showing {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
            </p>
          </div>

          {/* Results grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <Card key={res.id} className="h-full hover:shadow-lg transition-shadow border hover:border-primary/50 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant="secondary" className="font-normal">{res.supplierType}</Badge>
                    <Badge variant="outline" className="text-xs font-normal">{res.format}</Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{res.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                   <div>
                        <CardDescription className="line-clamp-3 mb-4 text-base">
                            {res.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {res.tags.slice(0, 4).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs bg-zinc-50">
                                {tag.replace(/-/g, " ")}
                            </Badge>
                            ))}
                        </div>
                   </div>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100 mt-auto">
                    <span className="text-sm font-medium text-zinc-600">{res.supplierName}</span>
                    <Button variant="outline" size="sm" asChild>
                        <a href={res.url} target="_blank" rel="noopener noreferrer">
                            View Resource
                            <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12 bg-zinc-100 rounded-lg">
              <BookOpen className="h-12 w-12 text-zinc-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No resources found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search terms or filters.</p>
              <Button onClick={() => { setSearchTerm(""); setSupplierType("all"); }}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function LearningPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LearningContent />
    </Suspense>
  );
}
