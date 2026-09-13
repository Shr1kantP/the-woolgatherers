/**
 * Vercel Blob CDN helper.
 * All images/fonts/videos are served from the public Blob store.
 * The base URL is read from NEXT_PUBLIC_BLOB_BASE_URL so it can be
 * overridden per-environment without a code change.
 *
 * Usage:
 *   import { blob } from "@/app/lib/blob";
 *   <Image src={blob("/images/hero/back-for-req.webp")} ... />
 */

const BASE =
  process.env.NEXT_PUBLIC_BLOB_BASE_URL ||
  "https://ru3iezrgy5poujuh.public.blob.vercel-storage.com";

/**
 * Returns the full Blob CDN URL for a given asset path.
 * @param path - asset path starting with "/" e.g. "/images/hero/back-for-req.webp"
 */
export function blob(path: string): string {
  // Files were uploaded with the "public" folder prefix preserved
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}/public${normalised}`;
}
