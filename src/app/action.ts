'use server';

import { headers } from 'next/headers';

export default async function serverAction(formData?: FormData) {
    const formDataUserId = formData?.get('userId');

    console.log('serverAction');

    const userId = headers().get('userId');
    const userIdx = headers().get('x-user-id');
    console.log('serverAction->userId', { userId, userIdx });
    return 'This is text';
}
