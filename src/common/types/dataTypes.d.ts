
export interface Forum {
	id: number;
	name: string;
	description: string;
	lastPost: Post;
}

export interface Post {
	id: number;
	title: string;
	content: string;
}

