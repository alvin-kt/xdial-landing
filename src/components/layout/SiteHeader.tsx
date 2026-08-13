import { Menu } from 'lucide-react'
import { useState } from 'react'

import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HERO } from '@/content/hero'
import { PRIMARY_NAV } from '@/content/navigation'
import { useScrolled } from '@/hooks/use-scrolled'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        // Flush with the hero at rest; gains a backdrop once it overlaps content.
        scrolled
          ? 'border-b border-white/8 bg-navy-950/85 backdrop-blur-md supports-[backdrop-filter]:bg-navy-950/70'
          : 'border-b border-transparent bg-navy-950',
      )}
    >
      <Container>
        <div className="flex h-16 items-center gap-4 lg:h-[4.5rem]">
          {/* Logo and nav sit together on the left, as in the reference. */}
          <a
            href="#top"
            className="rounded-sm"
            aria-label="xDial — back to top"
            onClick={() => setMenuOpen(false)}
          >
            <Logo />
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block lg:pl-10 xl:pl-14">
            <ul className="flex items-center gap-7 xl:gap-9">
              {PRIMARY_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-5">
            <a
              href="#log-in"
              className="hidden text-base text-white/85 transition-colors hover:text-white sm:inline"
            >
              Log in
            </a>
            <Button asChild variant="brand" size="nav" className="hidden sm:inline-flex">
              <a href={HERO.primaryCta.href}>{HERO.primaryCta.label}</a>
            </Button>

            {/* Mobile navigation */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="text-white hover:bg-white/10 hover:text-white lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm border-white/10 bg-navy-950">
                <SheetHeader className="border-b border-white/10">
                  <SheetTitle className="text-left">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

                <nav aria-label="Mobile" className="px-4 py-2">
                  <ul className="flex flex-col">
                    {PRIMARY_NAV.map((link) => (
                      <li key={link.href}>
                        <SheetClose asChild>
                          <a
                            href={link.href}
                            className="block rounded-md py-3 text-lg text-white/85 transition-colors hover:text-white"
                          >
                            {link.label}
                          </a>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto flex flex-col gap-3 border-t border-white/10 p-4">
                  <SheetClose asChild>
                    <Button asChild variant="brandOutline" size="cta">
                      <a href="#log-in">Log in</a>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="brand" size="cta">
                      <a href={HERO.primaryCta.href}>{HERO.primaryCta.label}</a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}
