export function getWebmanifest(manifest: string, apple = false) {
  const webmanifest = JSON.parse(manifest);

  const branchName = process?.env?.HEAD || 'local';

  if (branchName && branchName !== 'main') {
    webmanifest.name += ` (${branchName})`;
  }

  if (apple) {
    webmanifest.icons = [
      {
        src: '/icon-apple-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ];
  }

  return JSON.stringify(webmanifest, null, 2);
}
