import { extract } from "https://deno.land/std@0.175.0/encoding/front_matter/any.ts";
import { join } from "https://deno.land/std@0.175.0/path/mod.ts";

export interface Post {
    slug: string | unknown;
    title: string | unknown;
    publishedAt: Date | unknown;
    content: string;
    snippet: string | unknown;
  }
  
  export async function getPost(slug: string): Promise<Post|null> {
    const file = join("./posts", `${slug}.md`);
    const text = await Deno.readTextFile(join(file));
    const { attrs, body } = extract(text);
    return {
      slug,
      title: attrs.title,
      publishedAt: new Date(attrs.published_at),
      content: body,
      snippet: attrs.snippet,
    };
  }
  
  export async function getPosts(): Promise<Post[]> {
    const files = Deno.readDir('./posts');
    const promises = [];
    for await (const file of files) {
      const slug = file.name.replace(".md", "");
      promises.push(getPost(slug));
    }
    const posts = await Promise.all(promises) as Post[];
    posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    return posts;
  }
  