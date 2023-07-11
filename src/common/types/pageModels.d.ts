import type { Forum, Post, User } from './dataTypes';

export interface MainModel {
	user: User;
}

export interface HomeModel {
	forums: Forum[];
}

export interface ForumModel {
	forum: Forum;
	posts: Post[];
}
