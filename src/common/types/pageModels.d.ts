import type { ForumCategory, Forum, Post } from './dataTypes';

export interface HomeModel {
    forumCategories: ForumCategory[];
}

export interface ForumModel {
    forum: Forum;
    posts: Post[];
}
