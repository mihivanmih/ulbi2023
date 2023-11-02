import { lazy, Suspense } from 'react'
import { ProfileRatingProps } from './ProfileRating'

import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

const ProfileRatingLazy = lazy(async () => await import('./ProfileRating'))

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'100%'} height={140}/>}>
            <ProfileRatingLazy {...props}/>
        </Suspense>
    )
}
