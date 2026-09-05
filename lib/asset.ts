/**
 * Resolve a path in /public.
 *
 * Paths are emitted relative to the current document so the exported site works
 * both at a domain root and inside a sub-directory (previews, cPanel folders,
 * GitHub Pages project sites). Set NEXT_PUBLIC_ABSOLUTE_ASSETS=1 to emit
 * root-absolute paths instead.
 */
export const asset = (path: string) =>
  process.env.NEXT_PUBLIC_ABSOLUTE_ASSETS === '1' ? path : `.${path}`;
