export interface PostInterface {
  date?: Date,
  hidden?: boolean,
  html?: string,
  metadata: {
    description?: string,
    github?: string,
    hidden?: boolean,
    link?: string,
    tags?: string[],
    title?: string,
  },
  path: string,
  slug: string,
  tags?: string[],
}
