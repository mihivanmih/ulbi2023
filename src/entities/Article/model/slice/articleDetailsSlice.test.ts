import { articleDetailsReducer } from './articleDetailsSlice'
import type { ArticleDetailsSchema } from '../../../../entities/Article'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'

const data = {
    id: '9',
    type: 'TEXT',
    title: 'Заголовок этого блока',
    paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
    ],
}

describe('profileSlice.test', () => {
    test('test update profile service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            error: undefined,
            isLoading: true,
        }
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toStrictEqual({
            isLoading: true,
            error: undefined,
        })
    })
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true }

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                // @ts-expect-error
                fetchArticleById.fulfilled(data, ''),
            ),
        ).toStrictEqual({ isLoading: false, data })
    })
})
