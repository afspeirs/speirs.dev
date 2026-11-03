// @semantic-release/npm already runs `npm version <v> --no-git-tag-version
// --allow-same-version`, which writes the new version into package.json *and*
// both fields of package-lock.json. Listing both files as git assets is what
// commits them, so no separate version-bump script is needed.
const configProduction = [
  ['@semantic-release/npm', { npmPublish: false }],
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'package-lock.json'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
  ],
];

module.exports = {
  branches: ['main', { name: 'develop', prerelease: true }, { name: 'next', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ...process.argv.includes('--dry-run') ? [] : configProduction,
  ],
};
