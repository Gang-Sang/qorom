import type { ForumModel } from '../../../common/types/pageModels.d.ts'
import type { Forum, Post } from '../../../common/types/dataTypes.js'

export async function load({ params }) {
	let forum: Forum = {};
	let posts: Post[] = [];

	if (params.id === '1') {
		forum = { id: 1, name: 'General Discussion', description: 'A general discussion forum', lastPost: { id: 1, title: 'Welcome to the new forum!', content: 'Welcome to the new forum!', created: new Date('2023-03-02T12:00:00') } as Post };
	} else if (params.id === '2') {
		forum = { id: 2, name: 'News', description: 'News and announcements', lastPost: { id: 2, title: 'Welcome to the new forum!', content: 'Welcome to the new forum!', created: new Date('2023-03-02T12:00:00') } as Post };
		posts = [
			{ id: 1, title: 'Welcome to the new forum!', content: 'Welcome to the new forum!', created: new Date('2023-03-02T12:00:00'), numOfComments: 0 },
			{ id: 2, title: 'I\'m New!', content: 'Very NEW!', created: new Date('2023-03-02T12:00:00'), numOfComments: 0 },
		];
	} else if (params.id === '3') {
		forum = { id: 3, name: 'Member Discussion', description: 'A general discussion forum', lastPost: { id: 3, title: 'Welcome to the new forum!', content: 'Welcome to the new forum!', created: new Date('2023-03-02T12:00:00') } as Post };
	} else if (params.id === '4') {
		forum = { id: 4, name: 'Member News', description: 'News and announcements', lastPost: { id: 4, title: 'Welcome to the new forum!', content: 'Welcome to the new forum!', created: new Date('2023-03-02T12:00:00') } as Post };
		posts = [
			{ id: 10, title: 'Member responsibilities', content: 'What you need to know', created: new Date('2023-03-02T12:00:00'), numOfComments: 0 },
		]
	}

	return {
		forum,
		posts
	} as ForumModel;
}
