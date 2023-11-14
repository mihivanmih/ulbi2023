import { ArticleBlock } from '../../model/types/article'
import { ArticleBlockType } from '../../model/consts/consts'
import { ArticleBlockComponent } from '../ArticleBlockComponent/ArticleBlockComponent'
import styles from './ArticleDetails.module.scss'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

export const renderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleBlockComponent
                    key={block.id}
                    block={block}
                    className={styles.block}
                />
            )
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={styles.block}
                />
            )
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={styles.block}
                />
            )
        default:
            return null
    }
}
