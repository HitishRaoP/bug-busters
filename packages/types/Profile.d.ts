export type Profile = {
	userId: string;
	firstName: string;
	lastName?: string;
	email: string;
	timeJoined: number;

	age: number;
	profession: string;
	interests: string[]
	goals: string[]
	coins: number;
	level: number;
	experiencePoints: number;
};