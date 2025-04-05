import { z } from 'zod';

export const ProfileSchema = z.object({
	userId: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
	timeJoined: z.number(),

	age: z.number(),
	profession: z.string(),
	interests: z.array(z.string()),
	goals: z.array(z.string()),

	coins: z.number().default(0),
	level: z.number(),
	experiencePoints: z.number(),
});
