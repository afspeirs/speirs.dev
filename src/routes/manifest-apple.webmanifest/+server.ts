import { getWebmanifest } from '$lib/utils';
import manifestRaw from '../manifest.webmanifest/manifest.webmanifest?raw';

export function GET() {
  const newManifest = getWebmanifest(manifestRaw, true);
  return new Response(newManifest);
}

export const prerender = true;
