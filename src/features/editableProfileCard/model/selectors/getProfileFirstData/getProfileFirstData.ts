import type { StateSchema } from '@/app/providers/StoreProvider'

export const getProfileFirstData = (state: StateSchema) => state?.profile?.data
