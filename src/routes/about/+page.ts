export async function load({ params }){
  const page = await import('/src/content/pages/about.md');
  const { default: content, metadata } = page;

  return {
    page: {
      content,
      metadata,
    }
  }
}
