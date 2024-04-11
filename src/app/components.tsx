'use client';
import serverAction from './action';

export const MyButton = () => {
    return (
        <button
            onClick={async () => {
                const x = await serverAction();
                console.log({ x });
            }}
        >
            Click me
        </button>
    );
};
