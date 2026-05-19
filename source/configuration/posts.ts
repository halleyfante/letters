import type { CollectionEntry } from "astro:content";

export interface PostListItem {
  title: string;
  topic: string;
  url: string;
  publishedDate: string;
}

export function getSlug(post: CollectionEntry<"posts">): string {
  const parts = post.id.split("/");
  return parts[parts.length - 1];
}

export function byDateDescending(
  first: CollectionEntry<"posts">,
  second: CollectionEntry<"posts">,
): number {
  return second.data.publishedDate.valueOf() - first.data.publishedDate.valueOf();
}
