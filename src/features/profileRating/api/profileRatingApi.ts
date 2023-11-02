import { rtkApi } from '@/shared/api/rtkApi'
import { Rating } from '@/entities/Rating'

interface GetProfileRatingArg {
    userId: string
    articleId: string
}

interface RateArticleArg {
    userId: string
    profileId: string
    rate: number
    feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileRatingArg>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId
                }
            })
        }),
        rateProfile: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg
            })
        })
    })
})

export const useProfileRating = profileRatingApi.useGetProfileRatingQuery
export const useRateProfile = profileRatingApi.useRateProfileMutation
