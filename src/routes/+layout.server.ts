import * as config from '../../static/config.json';
import type { User } from '../common/types/dataTypes';
import type { MainModel } from '../common/types/pageModels';

export async function load({ cookies }) {
	const publicKey = localStorage.getItem('publicKey');
	const sessionKey = cookies.get('sessionid');

	if(publicKey && sessionKey) {
		const url = `${config.api}/user/${publicKey}/session/${sessionKey}`;
		const user : User = await fetch(url).then((res) => res.json());
		return {
			user
		} as MainModel;
	}

	return null;
}
