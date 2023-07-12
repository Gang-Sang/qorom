import * as config from '../../../static/config.json';
import type { User } from '../types/dataTypes';

export async function GetUserSigningMessage(publicKey: string) {
	const url = `${config.api}/user/${publicKey}/signingmessage`;
	const signingMessage = await fetch(url).then((res) => res.json());
	return signingMessage;
}

export async function signInUser(publicKey: string, signedMessage: string) {
	const url = `${config.api}/user/${publicKey}`;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: signedMessage
	});
	const user = await response.json() as User;
	return user;
}