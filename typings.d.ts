declare module '*.md' {
  // TODO: Fix this any type
  export const metadata: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  const content: ConstructorOfATypedSvelteComponent;
  export default content;
}
