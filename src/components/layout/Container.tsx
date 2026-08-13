import type { ElementType, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface ContainerProps {
  as?: ElementType
  children: ReactNode
  className?: string
}

/**
 * The page's single horizontal rhythm: a 1200px content column with gutters
 * that step up with the viewport. Every section uses this so the left edge of
 * the header, hero, headings and footer line up exactly.
 */
export function Container({ as: Tag = 'div', children, className }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10', className)}>
      {children}
    </Tag>
  )
}
