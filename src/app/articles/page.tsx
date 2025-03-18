import Layout from '@/components/Layout'
import Link from 'next/link'

// This will be replaced with actual data from markdown files
const SAMPLE_ARTICLES = [
  {
    slug: 'investment-philosophy',
    title: 'Our Investment Philosophy',
    excerpt: 'Understanding our approach to long-term wealth creation and preservation.',
    date: '2024-03-18',
  },
  {
    slug: 'market-outlook-2024',
    title: '2024 Market Outlook',
    excerpt: 'Our analysis of current market conditions and future opportunities.',
    date: '2024-03-17',
  },
]

export default function Articles() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-8">Investment Insights</h1>
          
          <div className="space-y-10">
            {SAMPLE_ARTICLES.map((article) => (
              <article key={article.slug} className="border-b border-gray-200 pb-8">
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    <Link href={`/articles/${article.slug}`} className="hover:text-primary">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600">{article.excerpt}</p>
                  <div className="pt-4">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="text-primary hover:text-primary-light font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
} 