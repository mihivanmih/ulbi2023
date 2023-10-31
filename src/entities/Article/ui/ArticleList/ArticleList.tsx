import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextSize } from 'shared/ui/Text/Text'
import styles from './ArticleList.module.scss'
import type { HTMLAttributeAnchorTarget } from 'react'
import { memo } from 'react'
import type { Article } from '../../model/types/article'
import { ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { useTranslation } from 'react-i18next'
import type { ListRowProps } from 'react-virtualized'
import { List, WindowScroller } from 'react-virtualized'
import { PAGE_ID } from 'widgets/Page/Page'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    virtualized?: boolean
}

const getAkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={styles.card} view={view} key={index}/>
    ))

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation()
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        virtualized = false
    } = props

    const isBig = view === ArticleView.BIG

    const itemsPerRow = isBig ? 1 : 3
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow)

    const rowRenderer = ({ index, isScrolling, key, style }: ListRowProps) => {
        const items = []
        const fromIndex = index * itemsPerRow
        const toIndex = Math.min(fromIndex * itemsPerRow, articles.length)

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={styles.card}
                    target={target}
                    key={'str+' + i}
                />
            )
        }

        return (
            <div
                key={key}
                style={style}
                className={styles.row}
            >
                {items}
            </div>
        )
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')}/>
            </div>
        )
    }

    return (
        <WindowScroller
            onScroll={() => { console.log('777') }}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({ height, width, registerChild, isScrolling, scrollTop, onChildScroll }) => (
                <div
                    ref={registerChild}
                    className={classNames(styles.ArticleList, {}, [className, styles[view]])}
                >
                    {virtualized
                        ? (
                            <List
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRenderer}
                                width={width ? width - 80 : 700}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            articles.map(item => (
                                <ArticleListItem
                                    article={item}
                                    view={view}
                                    className={styles.card}
                                    key={item.id}
                                    target={target}
                                />
                            ))
                        )
                    }

                    {isLoading && getAkeletons(view)}
                </div>
            )}
        </WindowScroller>
    )
})
