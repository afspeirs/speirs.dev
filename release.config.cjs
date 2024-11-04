const configProduction = [
  ['@semantic-release/npm', { npmPublish: false }],
  [
    '@semantic-release/git',
    {
      assets: ['.version', 'package.json'],
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
    [
      '@semantic-release/exec',
      {
        verifyReleaseCmd: './release-update-version.sh ${nextRelease.version}',
      },
    ],
  ],
};
