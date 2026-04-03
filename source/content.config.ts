import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./source/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.enum(["politics"]),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    language: z.enum(["pt", "en"]).default("pt"),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  posts: postsCollection,
};
