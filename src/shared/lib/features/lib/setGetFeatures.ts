import { FeatureFlags } from '@/shared/types/featureFlags'

const defaultFeatures: FeatureFlags = {
    // isAppRedisigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
    isAppRedisigned: true,
}
// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featureFlags: FeatureFlags = {
    ...defaultFeatures,
}

// context
// state
// reload page
// костыль
export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag]
}
export function getAllFeatureFlags() {
    return featureFlags
}
