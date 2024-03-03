import { browser } from '$app/environment';

if (browser) {
  const webmanifest = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;

  if (navigator.userAgent.search('Mac') !== -1 && webmanifest) {
    webmanifest.href = '/manifest-apple.webmanifest';
  }
}
