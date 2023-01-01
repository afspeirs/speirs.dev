export interface PostInterface {
  date?: Date,
  hidden?: boolean,
  content?: ConstructorOfATypedSvelteComponent,
  metadata: {
    date?: Date,
    description?: string,
    github?: string,
    hidden?: boolean,
    link?: string,
    tags?: string[],
    title?: string,
  },
  path?: string,
  slug?: string,
  tags?: string[],
}

export interface TagInterface {
  metadata: {
    title: string,
  },
  slug: string,
  path: string,
}
