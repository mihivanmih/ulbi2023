export { userReducer, userActions } from './model/slice/userSlice'
export type { UserSchema, User } from './model/types/user'
export {
    isUserManager,
    isUserAdmin,
    getUserRoles,
} from './model/selectors/roleSelectors'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserInited } from './model/selectors/getUserInited/getUserInited'
export { UserRole } from '../../entities/User/model/consts/consts'
