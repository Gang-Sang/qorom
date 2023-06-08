import type { Forum, Post } from './dataTypes';

export interface HomeModel {
	forums: Forum[];
}

export interface ForumModel {
	forum: Forum;
	posts: Post[];
}
