import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      link: z.object({
        name: z.string().min(1),
        icon: z.string().optional(),
        value: z.string(),
      }),
      description: z.string().min(1),
      image: image(),
      url: z.string(),
      featured: z.number().min(1).optional(),
      technologies: z
        .array(
          z.object({
            icon: z.string(),
            name: z.string().min(1),
          })
        )
        .optional(),
    }),
});

export const collections = {
  projects,
};
