import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/**
 * The site's one scale for "icon inside a tinted circle": every feature
 * bullet, card badge and step marker picks one of these four sizes rather
 * than a bespoke `size-*` pair, so the icon-to-circle ratio (~42–46%) stays
 * the same wherever the pattern shows up.
 *
 *   sm  36px circle / 16px icon  — inline rows (call details, footnotes)
 *   md  44px circle / 20px icon  — sidebar items, hero micro-badges
 *   lg  64px circle / 28px icon  — step markers, panel confirmations
 *   xl  96px circle / 40px icon  — top-of-card feature/category icons
 *
 * The icon itself is sized by the descendant selector below, so a plain
 * `<Icon aria-hidden />` dropped in without its own `size-*` class picks up
 * the right size automatically — the same convention `Button` uses.
 */
const iconCircleVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full [&_svg:not([class*='size-'])]:shrink-0",
  {
    variants: {
      size: {
        sm: "size-9 [&_svg:not([class*='size-'])]:size-4",
        md: "size-11 [&_svg:not([class*='size-'])]:size-5",
        lg: "size-16 [&_svg:not([class*='size-'])]:size-7",
        xl: "size-24 [&_svg:not([class*='size-'])]:size-10",
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

interface IconCircleProps
  extends React.ComponentProps<'span'>, VariantProps<typeof iconCircleVariants> {}

function IconCircle({ className, size, ...props }: IconCircleProps) {
  return (
    <span
      data-slot="icon-circle"
      className={cn(iconCircleVariants({ size, className }))}
      {...props}
    />
  )
}

export { IconCircle, iconCircleVariants }
