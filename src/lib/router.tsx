import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
} from 'react'

/**
 * A ~70-line client router.
 *
 * The site is a handful of static marketing pages whose only navigation is the
 * header, footer and in-page anchors, so it needs three things: swap the page
 * on a path change, keep the back button working, and scroll to the right
 * place afterwards. That is small enough that a routing dependency would cost
 * more bytes than it saves.
 */

interface RouterValue {
  /** Current `location.pathname`, always without a trailing slash (`/` aside). */
  readonly path: string
  /** Navigate to an internal href — a path, a `#hash`, or both. */
  readonly navigate: (href: string) => void
}

const RouterContext = createContext<RouterValue | null>(null)

function normalise(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => normalise(window.location.pathname))
  /**
   * Bumped on every navigation so the scroll effect below re-runs even when
   * the path is unchanged (jumping between two anchors on the same page).
   */
  const [navCount, setNavCount] = useState(0)
  const pendingHash = useRef<string | null>(null)

  const go = useCallback((url: URL) => {
    pendingHash.current = url.hash.slice(1)
    setPath(normalise(url.pathname))
    setNavCount((n) => n + 1)
  }, [])

  const navigate = useCallback(
    (href: string) => {
      // Resolved against the current URL so bare `#anchor` links stay on the
      // page they were clicked from.
      const url = new URL(href, window.location.href)
      if (url.href !== window.location.href) window.history.pushState(null, '', url)
      go(url)
    },
    [go],
  )

  useEffect(() => {
    const onPopState = () => go(new URL(window.location.href))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [go])

  // Runs after the destination page has rendered, so the anchor exists.
  useEffect(() => {
    const hash = pendingHash.current
    pendingHash.current = null
    if (hash === null) return // First render: leave the browser's own position.

    const target = hash ? document.getElementById(hash) : null
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0 })
  }, [path, navCount])

  const value = useMemo<RouterValue>(() => ({ path, navigate }), [path, navigate])

  return <RouterContext value={value}>{children}</RouterContext>
}

export function useRouter(): RouterValue {
  const value = use(RouterContext)
  if (!value) throw new Error('useRouter must be used inside <RouterProvider>')
  return value
}

/** True for the modified clicks the browser should keep handling itself. */
function isModifiedClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
}

/**
 * An `<a>` that routes internally. Same-origin hrefs (`/how-it-works`,
 * `/#pricing`, `#top`) are handled in the client; anything else — an external
 * URL, `mailto:`, a new-tab click — falls through to the browser.
 */
export function SiteLink({ href, onClick, target, ...props }: ComponentProps<'a'>) {
  const { navigate } = useRouter()
  const isInternal =
    typeof href === 'string' && (href.startsWith('/') || href.startsWith('#')) && target == null

  return (
    <a
      href={href}
      target={target}
      onClick={(event) => {
        onClick?.(event)
        if (!isInternal || event.defaultPrevented || isModifiedClick(event)) return
        event.preventDefault()
        navigate(href)
      }}
      {...props}
    />
  )
}
