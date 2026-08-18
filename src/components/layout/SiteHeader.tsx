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
import { PRIMARY_NAV, ROUTES } from '@/content/navigation'
import { useScrolled } from '@/hooks/use-scrolled'
import { SiteLink, useRouter } from '@/lib/router'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const scrolled = useScrolled()
  const { path } = useRouter()
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
          <SiteLink
            href={ROUTES.home}
            className="rounded-sm"
            aria-label="xDial — home"
            onClick={() => setMenuOpen(false)}
          >
            <Logo />
          </SiteLink>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block lg:pl-10 xl:pl-14">
            <ul className="flex items-center gap-7 xl:gap-9">
              {PRIMARY_NAV.map((link) => (
                <li key={link.href}>
                  <SiteLink
                    href={link.href}
                    aria-current={link.href === path ? 'page' : undefined}
                    className={cn(
                      'relative block py-1 text-base transition-colors',
                      link.href === path
                        ? 'text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-brand-500'
                        : 'text-white/85 hover:text-white',
                    )}
                  >
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-5">
            <SiteLink
              href={ROUTES.home}
              className="hidden text-base text-white/85 transition-colors hover:text-white sm:inline"
            >
              Log in
            </SiteLink>
            <Button asChild variant="brand" size="nav" className="hidden sm:inline-flex">
              <SiteLink href={HERO.primaryCta.href}>{HERO.primaryCta.label}</SiteLink>
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
                          <SiteLink
                            href={link.href}
                            aria-current={link.href === path ? 'page' : undefined}
                            className={cn(
                              'block rounded-md py-3 text-lg transition-colors hover:text-white',
                              link.href === path ? 'font-medium text-white' : 'text-white/85',
                            )}
                          >
                            {link.label}
                          </SiteLink>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto flex flex-col gap-3 border-t border-white/10 p-4">
                  <SheetClose asChild>
                    <Button asChild variant="brandOutline" size="cta">
                      <SiteLink href={ROUTES.home}>Log in</SiteLink>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="brand" size="cta">
                      <SiteLink href={HERO.primaryCta.href}>{HERO.primaryCta.label}</SiteLink>
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
