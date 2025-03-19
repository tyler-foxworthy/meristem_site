import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import Link from 'next/link'

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
  },
  {
    slug: 'volatility-and-long-term-returns',
    title: 'Volatility and Long-Term Returns',
    date: '2024-03-15',
    content: `
# Volatility and Long-Term Returns

How the "volatility tax" affects compounding and why minimizing drawdowns is crucial for wealth preservation and growth.

When considering the impact of volatility on returns, we can express the relationship as:

$$
CAGR \\approx \\mu - \\frac{\\sigma^2}{2}
$$

Where:
- $CAGR$ is the compound annual growth rate
- $\\mu$ is the average return
- $\\sigma$ is the volatility

This demonstrates why minimizing volatility leads to better long-term compounding even with the same average return.
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

export default async function Essay({ params }: { params: { slug: string } }) {
  const article = await getArticleContent(params.slug)

  return (
    <main className="container py-16">
      <div className="max-w-2xl">
        <div className="mb-12">
          <Link href="/essays" className="text-brand-700 hover:text-brand-800">
            ← Back to essays
          </Link>
        </div>
        
        <h1 className="text-brand-800 mb-2">{article.title}</h1>
        
        <time className="text-sm text-gray-500 block mb-12">
          {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>

        <article className="prose prose-sm max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h1: () => null, // Skip the first h1 as we already have the title
              h2: ({node, ...props}) => <h2 className="text-brand-800 mt-8 mb-4 text-xl" {...props} />,
              p: ({node, ...props}) => <p className="text-gray-600 mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="text-gray-600 list-disc pl-6 mb-4 space-y-1" {...props} />,
              li: ({node, ...props}) => <li {...props} />,
            }}
          >
            {article.content}
          </ReactMarkdown>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic">
              Disclaimer: The views and opinions expressed in this essay are those of the author and are provided for informational and educational purposes only. They do not constitute financial, investment, tax, or legal advice, and should not be relied upon as such. Before making any financial decisions, please consult with a qualified professional. Past performance is not indicative of future results. Meristem Capital disclaims any liability for any losses or damages that may arise from the use of this information.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
} 