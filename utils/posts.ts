import { extract } from "https://deno.land/std@0.175.0/encoding/front_matter/any.ts";
import { join } from "https://deno.land/std@0.175.0/path/mod.ts";

import { toObject, toString } from "./string.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = join("./posts", `${slug}.md`);
  const text = await Deno.readTextFile(join(file));
  const { attrs, body } = extract(text);
  return {
    slug,
    title: toString(attrs.title),
    publishedAt: new Date(toObject(attrs.published_at)),
    content: body,
    snippet: toString(attrs.snippet),
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
