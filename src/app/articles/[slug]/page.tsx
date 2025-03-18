import ReactMarkdown from 'react-markdown'
import Layout from '@/components/Layout'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

// This will be replaced with actual data loading from markdown files
const SAMPLE_ARTICLES = [
  {
    slug: 'investment-philosophy',
    title: 'Our Investment Philosophy',
    date: '2024-03-18',
    content: `
# Our Investment Philosophy

At Meristem Capital, we believe in a systematic, research-driven approach to investment management.

The power of compound interest can be expressed as:

$A = P(1 + r)^n$

Where:
- $A$ is the final amount
- $P$ is the principal investment
- $r$ is the annual interest rate
- $n$ is the number of years

For example, with a 7% annual return, $1,000 becomes approximately $1,967 after 10 years:

$$
1000 * (1 + 0.07)^{10} = 1967.15
$$

This demonstrates the power of compound growth over time.
    `
  },
  {
    slug: 'market-outlook-2024',
    title: '2024 Market Outlook',
    date: '2024-03-17',
    content: `
# 2024 Market Outlook

Our analysis of current market conditions and future opportunities.

The current market volatility ($\\sigma$) can be expressed as:

$$
\\sigma = \\sqrt{\\frac{\\sum(x - \\mu)^2}{n}}
$$

Where $\\mu$ is the mean return and $n$ is the number of observations.
    `
  }
]

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return SAMPLE_ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

const getArticleContent = async (slug: string) => {
  return SAMPLE_ARTICLES.find(article => article.slug === slug) || SAMPLE_ARTICLES[0]
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
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </Layout>
  )
} 