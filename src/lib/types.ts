export interface Post {
  title: string;
  slug: string;
  url: string;
}

export interface Project extends Post {
  type: 'project';
  date: string;
  description: string;
  featured?: boolean;
  github?: string;
  hidden?: boolean;
  link?: string;
  tags: string[];
}

export interface Tag extends Post {
  type: 'tag';
  // count: number;
}
