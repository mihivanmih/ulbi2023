import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
}

const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
