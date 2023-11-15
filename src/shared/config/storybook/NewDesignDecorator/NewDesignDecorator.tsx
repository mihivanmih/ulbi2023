import { Story } from '@storybook/react'
import { setFeatureFlags } from '@/shared/lib/features'
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures'

export const NewDesignDecorator = (StoryComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedisigned: true })
    return (
        <div className="app_redesigned">
            <StoryComponent />
        </div>
    )
}
