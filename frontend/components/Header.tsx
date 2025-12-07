"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CSSProperties, FormEvent, useState, useRef, useEffect } from "react";
import { Search, Shield, Layers, TrendingUp, Menu, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  key: string;
  label: string;
  href: string;
  color: string;
  icon?: React.ElementType;
  match: (pathname: string | null) => boolean;
};

const navItems: NavItem[] = [
  {
    key: "home",
    label: "Home",
    href: "/",
    color: "#1e293b", // slate-800
    match: (pathname) => pathname === "/" || pathname === null,
  },
  {
    key: "roles",
    label: "Roles",
    href: "/roles",
    color: "#2563eb", // blue-600
    icon: Shield,
    match: (pathname) => Boolean(pathname && pathname.startsWith("/roles")),
  },
  {
    key: "skills",
    label: "Skills",
    href: "/skills",
    color: "#9333ea", // purple-600
    icon: Layers,
    match: (pathname) => Boolean(pathname && pathname.startsWith("/skills")),
  },
  {
    key: "learning",
    label: "Learning",
    href: "/learn",
    color: "#16a34a", // green-600
    icon: TrendingUp,
    match: (pathname) => Boolean(pathname && pathname.startsWith("/learn")),
  },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) return;
    setOpen(false);
    setSearchOpen(false);
    // Redirect to the roles search page for now as it's the main search function
    router.push(`/roles?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="border-b border-zinc-200 bg-white text-zinc-900 sticky top-0 z-50 relative">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" aria-label="Government Cyber Profession" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                 <Shield className="h-6 w-6" />
            </div>
            <div className="flex flex-col leading-none">
                <span className="font-bold text-slate-900 text-lg">Cyber Profession</span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Capability Framework</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden sm:flex flex-1 items-center justify-end gap-x-6 text-sm font-semibold text-zinc-700 ml-auto"
        >
          {navItems.map((item) => {
            const isActive = item.match(pathname);
            const style = {
              "--underline-color": item.color,
            } as CSSProperties;
            const Icon = item.icon;

            // Logic for hiding "Home" text on intermediate screens
            // If item is home, hide on sm (tablet), show on lg (desktop)
            const hiddenClass = item.key === "home" ? "hidden lg:flex" : "flex";

            return (
              <Link
                key={item.key}
                href={item.href}
                style={{
                  ...style,
                  color: isActive ? item.color : undefined,
                }}
                className={cn(
                  hiddenClass,
                  "items-center gap-2 py-2 transition-colors relative group",
                  isActive ? "font-bold" : "text-zinc-600 hover:text-black",
                )}
              >
                {Icon && <Icon className={cn("h-4 w-4", isActive && "text-current")} />}
                {item.label}
                {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current rounded-full" />
                )}
              </Link>
            );
          })}
          
          {/* Tablet Search Toggle (Magnifying Glass) */}
          <button 
            className="hidden sm:flex lg:hidden text-zinc-500 hover:text-zinc-900"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
          >
            <Search className="h-5 w-5" />
          </button>
        </nav>

        {/* Large Desktop Search Input */}
        <form
          onSubmit={handleSearch}
          className="hidden lg:flex relative w-full max-w-[220px] flex-shrink-0 items-center rounded-full bg-zinc-100 px-3 py-1 ml-6"
        >
          <Search className="h-4 w-4 text-zinc-500" aria-hidden="true" />
          <Input
            type="search"
            name="q"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search roles..."
            className="h-8 border-none bg-transparent pl-2 text-sm focus-visible:ring-0 placeholder:text-zinc-400"
          />
        </form>

        {/* Mobile Menu Trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Expandable Search Box (Tablet View) */}
      {searchOpen && (
        <div className="hidden sm:block lg:hidden border-t border-zinc-100 bg-zinc-50/50 backdrop-blur-sm absolute left-0 right-0 z-40 shadow-sm">
            <div className="mx-auto max-w-[1200px] px-4 py-3">
                <form onSubmit={handleSearch} className="relative flex w-full items-center">
                    <Search className="absolute left-3 h-4 w-4 text-zinc-500" />
                    <Input
                        ref={searchInputRef}
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search roles, skills, resources..."
                        className="h-10 w-full bg-white pl-10"
                    />
                    <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm" 
                        className="absolute right-2 h-7 px-2 text-xs text-zinc-500"
                        onClick={() => setSearchOpen(false)}
                    >
                        Close
                    </Button>
                </form>
            </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="sm:hidden fixed inset-0 top-[64px] z-40 bg-white border-t border-zinc-200">
          <div className="flex flex-col gap-6 p-6 h-full overflow-y-auto">
            {/* Mobile Search */}
            <form
              onSubmit={handleSearch}
              className="relative flex w-full items-center rounded-lg bg-zinc-100 px-3 py-2"
            >
              <Search className="h-4 w-4 text-zinc-500" aria-hidden="true" />
              <Input
                type="search"
                name="q"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search roles..."
                className="h-9 border-none bg-transparent pl-2 text-base focus-visible:ring-0 placeholder:text-zinc-400"
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = item.match(pathname);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 py-3 px-2 rounded-md transition-colors text-lg",
                      isActive ? "bg-zinc-100 font-bold" : "text-zinc-600 hover:bg-zinc-50 hover:text-black"
                    )}
                    style={{ color: isActive ? item.color : undefined }}
                  >
                    {Icon && <Icon className={cn("h-5 w-5", isActive && "text-current")} />}
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
