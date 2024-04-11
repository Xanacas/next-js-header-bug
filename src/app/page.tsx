export const runtime = 'edge';
import { headers } from 'next/headers';
import serverAction from './action';

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
    const userId = headers().get('userId');

    return (
        <div>
            {userId}
            <form action={serverAction}>
                <input type="hidden" name="userId" value={userId ?? 'nukll'} />
                <input type="submit" />
            </form>
        </div>
    );
}
