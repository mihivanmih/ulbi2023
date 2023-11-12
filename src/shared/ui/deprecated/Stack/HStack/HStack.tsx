import type { FlexProps } from '../Flex/Flex'
import { Flex } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

/**
 * Устарел используем новые компоненты из папки redisigned
 *
 */
export const HStack = (props: HStackProps) => {
    return <Flex {...props} direction="row" />
}
