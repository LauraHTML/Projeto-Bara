import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { SunIcon } from "lucide-react";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-primary sticky top-0 z-40 shadow-md">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
