export type PostType = 'Chronological' | 'RankedTopLevel';
export type UserLevel = 'General' | 'Officer' | 'Admin';

export interface User {
	publicKey?: string;
	name?: string;
	level: UserLevel;
	sessionKey?: string;
}

export interface Forum {
	id?: number;
	name?: string;
	description?: string;
	categoryName?: string;
	lastPost?: Post;
}

export interface Post {
	id: number;
	forumId: number;
	title: string;
	content?: string;
	created: Date;
	updated?: Date;
	numOfComments: number;
	postType: PostType;
}

