import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    github: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    category: z.enum(['Software Engineering', 'Data Engineering', 'HealthTech / Bioinformatics']).optional(),
    date: z.date(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string().optional(),
    description: z.string(),
  }),
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    field: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    gpa: z.string().optional(),
  }),
});

export const collections = {
  projects,
  experience,
  education,
};