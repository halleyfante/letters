import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from "astro/loaders";

const topicFiles = import.meta.glob("../content/posts/*/*.mdx");
const topics = [...new Set(
  Object.keys(topicFiles).map((path) => {
    const parts = path.split("/");
    return parts[parts.length - 2];
  })
)] as [string, ...string[]];

const languageFiles = import.meta.glob("./internationalization/*.json");
const languages = Object.keys(languageFiles).map(
  (path) => path.split("/").pop()!.replace(".json", "")
) as [string, ...string[]];

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./source/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.enum(topics),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    language: z.enum(languages).default(languages[0]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  posts: postsCollection,
};
