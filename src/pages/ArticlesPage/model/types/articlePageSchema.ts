import type { EntityState } from '@reduxjs/toolkit'
import type { Article, ArticleView } from 'entities/Article'
import type { SortOrder } from 'shared/types'
import type { ArticleSortField, ArticleType } from 'entities/Article/'

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
    view: ArticleView

    // pagination
    page: number
    limit?: number
    hasMore: boolean

    // filters
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType

    _inited: boolean
}
