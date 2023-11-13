import { ArticlesFilters } from '@/widgets/ArticlesFilters'
import { memo } from 'react'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

interface FiltersContainerProps {
    className?: string
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className = '' } = props
    const {
        onChangeSort,
        sort,
        onChangeSearch,
        search,
        onChangeType,
        type,
        onChangeOrder,
        order,
    } = useArticleFilters()

    return (
        <ArticlesFilters
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            type={type}
            sort={sort}
            order={order}
            onChangeSearch={onChangeSearch}
            search={search}
            onChangeType={onChangeType}
            className={className}
        />
    )
})
