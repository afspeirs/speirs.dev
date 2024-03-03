import { getWebmanifest } from '$lib/utils/webmanifest';
import manifestRaw from '../manifest.webmanifest/manifest.webmanifest?raw';

export const prerender = true;

export function GET() {
  const newManifest = getWebmanifest(manifestRaw, true);
  return new Response(newManifest);
}
