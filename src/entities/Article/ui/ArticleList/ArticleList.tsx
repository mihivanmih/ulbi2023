import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import styles from './ArticleList.module.scss'
import type { HTMLAttributeAnchorTarget } from 'react'
import { memo } from 'react'
import type { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { useTranslation } from 'react-i18next'
import { ArticleView } from '../../model/consts/consts'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    virtualized?: boolean
}

const getAkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={styles.card}
                view={view}
                key={index}
            />
        ))

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation()
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(styles.ArticleList, {}, [
                    className,
                    styles[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        )
    }

    return (
        <div
            data-testid={'ArticleList'}
            className={classNames(styles.ArticleList, {}, [
                className,
                styles[view],
            ])}
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    className={styles.card}
                    key={item.id}
                    target={target}
                />
            ))}
            {isLoading && getAkeletons(view)}
        </div>

        // <WindowScroller
        //     onScroll={() => { console.log('777') }}
        //     scrollElement={document.getElementById(PAGE_ID) as Element}
        // >
        //     {({ height, width, registerChild, isScrolling, scrollTop, onChildScroll }) => (
        //         <div
        //             ref={registerChild}
        //             className={classNames(styles.ArticleList, {}, [className, styles[view]])}
        //         >
        //             {virtualized
        //                 ? (
        //                     <List
        //                         height={height ?? 700}
        //                         rowCount={rowCount}
        //                         rowHeight={isBig ? 700 : 330}
        //                         rowRenderer={rowRenderer}
        //                         width={width ? width - 80 : 700}
        //                         autoHeight
        //                         onScroll={onChildScroll}
        //                         isScrolling={isScrolling}
        //                         scrollTop={scrollTop}
        //                     />
        //                 )
        //                 : (
        //                     articles.map(item => (
        //                         <ArticleListItem
        //                             article={item}
        //                             view={view}
        //                             className={styles.card}
        //                             key={item.id}
        //                             target={target}
        //                         />
        //                     ))
        //                 )
        //             }
        //
        //             {isLoading && getAkeletons(view)}
        //         </div>
        //     )}
        // </WindowScroller>
    )
})
