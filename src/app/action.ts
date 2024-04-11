'use server';

import { headers } from 'next/headers';

export default async function serverAction(formData?: FormData) {
    // this header is always available
    const setHeader = headers().get('set-header');

    // this header is not available as it is set in middleware to the response object
    const addToReponse = headers().get('add-to-response');

    console.log('serverAction->access header: ', { setHeader, addToReponse });
}
