import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleViewSelector.module.scss'
import { memo } from 'react'
import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { ArticleView } from '@/entities/Article'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },

    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className = '', view, onViewClick } = props

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div
            className={classNames(styles.ArticleViewSelector, {}, [className])}
        >
            {viewTypes.map((viewType) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        height={24}
                        width={24}
                        Svg={viewType.icon}
                        className={classNames('', {
                            [styles.notSelected]: viewType.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    )
})
