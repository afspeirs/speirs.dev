export type Post = {
  title: string,
  slug: string,
  url: string,
}

export type Project = {
  date: string,
  description: string,
  github?: string,
  hidden?: boolean
  link?: string,
  tags: string[],
} & Post;
