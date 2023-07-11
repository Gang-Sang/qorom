import { writable } from 'svelte/store';
import type { User } from '../types/dataTypes';

export interface userStoreModel {
	user?: User;
}

export const userStore = writable({ user: undefined } as userStoreModel);