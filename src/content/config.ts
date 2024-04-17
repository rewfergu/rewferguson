import { date } from 'astro/zod';
import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const wordsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    date: z.date().optional(),
    featured: z.boolean().optional(),
    cover: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.object({ src: z.string(), alt: z.string().optional() })).optional(),
    link: z.string().optional(),
    video: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    excerpt: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    status: z.number().optional(),
    priority: z.number().optional(),
    featured: z.boolean().optional(),
    cover: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.object({ src: z.string(), alt: z.string().optional() })).optional(),
    link: z.string().optional(),
    video: z.array(z.string()).optional(),
  }),
});

export const collections = {
  words: wordsCollection,
  work: workCollection,
};
