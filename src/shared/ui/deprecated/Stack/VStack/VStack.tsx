import type { FlexProps } from '../Flex/Flex'
import { Flex } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

/**
 * Устарел используем новые компоненты из папки redisigned
 *
 */
export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props

    return <Flex {...props} direction="column" align={align} />
}
