import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleViewSelector.module.scss'
import { memo } from 'react'
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg'
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg'

import ListIcon from '@/shared/assets/icons/burger.svg'
import TiledIcon from '@/shared/assets/icons/tile.svg'

import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button'
import { Icon, Icon as IconDeprecated } from '@/shared/ui/redesigned/Icon'
import { ArticleView } from '@/entities/Article'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedisigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },

    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedisigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className = '', view, onViewClick } = props

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <ToggleFeatures
            feature={'isAppRedisigned'}
            on={
                <Card
                    className={classNames(
                        styles.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                    border={'partial'}
                >
                    <HStack gap={'8'}>
                        {viewTypes.map((viewType) => (
                            <Icon
                                key={viewType.view}
                                clickable
                                onClick={onClick(viewType.view)}
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [styles.notSelected]:
                                        viewType.view !== view,
                                })}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(styles.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            theme={ThemeButton.CLEAR}
                            key={viewType.view}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                height={24}
                                width={24}
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [styles.notSelected]:
                                        viewType.view !== view,
                                })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    )
})
