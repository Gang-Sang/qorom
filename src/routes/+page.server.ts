import type { Forum, Post } from '../common/types/dataTypes';
import type { HomeModel } from '../common/types/pageModels';

export async function load() {
    return {
        forumCategories: [
            {
                id: 1,
                name: 'Public Forums',
                description: 'A general discussion forum',
                forums: [
                    { id: 1, name: 'General Discussion', description: 'A general discussion forum', lastPost: { id: 1, title: 'Welcome to the new forum!', content: 'Welcome to the new forum!', created: new Date('2023-03-02T12:00:00') } as Post },
                    { id: 2, name: 'News', description: 'News and announcements', lastPost: { id: 2, title: 'Welcome to the new forum!', content: 'Welcome to the new forum!', created: new Date('2023-03-02T12:00:00') } as Post },
                ] as Forum[],
            },
            {
                id: 2,
                name: 'Member Forums', 
                description: 'Private forums for members only', 
                forums: [
                    { id: 3, name: 'Member Discussion', description: 'A general discussion forum', lastPost: { id: 3, title: 'Welcome to the new forum!', content: 'Welcome to the new forum!', created: new Date('2023-03-02T12:00:00') } as Post },
                    { id: 4, name: 'Member News', description: 'News and announcements', lastPost: { id: 4, title: 'Welcome to the new forum!', content: 'Welcome to the new forum!', created: new Date('2023-03-02T12:00:00') } as Post },
                ] as Forum[],
            },
        ]
    } as HomeModel;
}
