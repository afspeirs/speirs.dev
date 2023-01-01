export async function load({ params }){
  const post = await import(`../../../content/projects/${params.slug}.md`);
  const { default: content, metadata } = post;

  return {
    page: {
      content,
      metadata,
    },
  }
}
