import * as config from '../../../../static/config.json';
import type { ForumModel } from '../../../common/types/pageModels.d.ts'
import type { Forum, Post } from '../../../common/types/dataTypes.js'

export async function load({ params }) {
	const forumUrl = `${config.api}/forum/${params.id}`;
	const postsUrl = `${config.api}/forum/${params.id}/posts`;
	
	const forum: Forum = await fetch(forumUrl).then((res) => res.json());
	const posts: Post[] = await fetch(postsUrl).then((res) => res.json());

	return {
		forum,
		posts
	} as ForumModel;
}
