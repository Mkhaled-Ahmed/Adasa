interface category{
      name: string, count: number, color: string
}
export interface Ipost {
    id: number,
    slug: string,
    title: string,
    excerpt: string,
    content: string,
    category: string,
    author: {
        name: string,
        avatar:string,
        role: string,
    },
    image: string,
    date: string,
    readTime: string,
    featured: boolean,
    tags: string[],
}

export interface Iposts {
    posts: Ipost[],
    categories:category[],
    siteInfo: {
      name: string,
      tagline:string,
      description:
        string,
      email: string,
      social: {
        twitter: string,
        github: string,
        linkedin: string,
        youtube:string,
      },
    }
}
