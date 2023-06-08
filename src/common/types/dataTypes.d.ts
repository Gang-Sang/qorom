export type PostType = 'Chronological' | 'RankedTopLevel';

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

