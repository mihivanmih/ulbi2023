import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { UIShema } from 'features/UI'

const initialState: UIShema = {
    scroll: {}
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position
        }
    }
})

export const { actions: uiActions } = uiSlice
export const { reducer: uiReducer } = uiSlice
