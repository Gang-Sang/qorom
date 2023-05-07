
export interface ForumCategory {
    id: number;
    name: string;
    description: string;
    forums: Forum[];
}

export interface Forum {
	id?: number;
	name?: string;
	description?: string;
	lastPost?: Post;
}

export interface Post {
	id: number;
	title: string;
	content?: string;
    created: Date;
    updated?: Date;
    numOfComments: number;
}

