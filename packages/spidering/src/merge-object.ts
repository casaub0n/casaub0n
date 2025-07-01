import z from "zod";

export const scheduleMain = z.object({
  images: z.array(z.string()),
  subTitle: z.string(),
  title: z.string(),
});

export const scheduleContent = z.object({
  images: z.array(z.string()),
});

export const mergeObject = z.object({
  scheduleContent,
  scheduleMain,
});
