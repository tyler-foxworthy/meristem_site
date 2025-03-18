import { MDXRemote } from 'next-mdx-remote/rsc'
import Layout from '@/components/Layout'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

// This will be replaced with actual data loading from markdown files
const getArticleContent = async (slug: string) => {
  // For now, return sample content
  return {
    title: 'Our Investment Philosophy',
    date: '2024-03-18',
    content: `
# Our Investment Philosophy

At Meristem Capital, we believe in a systematic, research-driven approach to investment management.

The power of compound interest can be expressed as:

\\[
A = P(1 + r)^n
\\]

Where \\(A\\) is the final amount and \\(P\\) is the principal investment.
    `
  }
}

export default async function Article({ params }: { params: { slug: string } }) {
  const article = await getArticleContent(params.slug)

  return (
    <Layout>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">{article.title}</h1>
            <time className="text-gray-500">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          <div className="prose max-w-none">
            <MDXRemote
              source={article.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkMath],
                  rehypePlugins: [rehypeKatex],
                },
              }}
            />
          </div>
        </div>
      </article>
    </Layout>
  )
} 