import { ReactNode } from 'react';
import { clsx } from 'clsx';
//npm install --save clsx
import { Slot } from '@radix-ui/react-slot'
//npm install @radix-ui/react-slot

export interface HeadingProps{
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({size = 'md', children, asChild}:HeadingProps){
    const Comp = asChild ? Slot : 'h2'

    return(
        <Comp className={clsx('text-gray-500 font-sans font-medium ', {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg'
        })}>{children}</Comp>
    )
}