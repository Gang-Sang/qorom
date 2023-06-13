import * as config from '../../static/config.json';
import type { Forum } from '../common/types/dataTypes';
import type { HomeModel } from '../common/types/pageModels';

export async function load() {
	const url = `${config.api}/forum`;
	const forums: Forum[] = await fetch(url).then((res) => res.json());
	return {
		forums
	} as HomeModel;
}
