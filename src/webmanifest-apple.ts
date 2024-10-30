const webmanifest = document.getElementById('webmanifest') as HTMLLinkElement;

if (import.meta.env.PROD && navigator.userAgent.search('Mac') !== -1 && webmanifest) {
  webmanifest.href = '/manifest-apple.webmanifest';
}
