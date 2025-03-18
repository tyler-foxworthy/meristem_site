import Layout from '@/components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero section */}
        <div className="relative py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Approach</h1>
              <p className="mt-6 text-xl text-gray-100 max-w-3xl">
                By combining proven value investment principles with advanced technology, we seek superior returns while working to safeguard against permanent capital loss.
              </p>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-24">
            {/* Technology and Analysis */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Advanced Technology Meets Timeless Principles</h2>
                <p className="mt-6 text-lg text-gray-500">
                  Our approach leverages AI for insight into market conditions and investment timing, ensuring we systematically avoid unnecessary risks while maximizing long-term wealth creation. We utilize advanced statistical algorithms to analyze real-time market data, focusing on measuring the present rather than trying to predict the future.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Driven Insights</h3>
                <ul className="space-y-4 text-gray-500">
                  <li>• Real-time market analysis</li>
                  <li>• AI-powered risk assessment</li>
                  <li>• Systematic portfolio management</li>
                  <li>• Advanced market structure analysis</li>
                </ul>
              </div>
            </div>

            {/* Investment Philosophy */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-gray-50 p-8 rounded-xl order-2 md:order-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality-First Approach</h3>
                <ul className="space-y-4 text-gray-500">
                  <li>• Focus on strong fundamentals</li>
                  <li>• Long-term growth potential</li>
                  <li>• Fair valuation analysis</li>
                  <li>• Sustainable business models</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900">Invest in Quality Businesses at Fair Prices</h2>
                <p className="mt-6 text-lg text-gray-500">
                  We focus on companies with strong fundamentals and growth potential, preferring, like Warren Buffett, a great business at a fair price rather than a mediocre business at a great price. By purchasing these quality businesses when they are fairly valued or undervalued, we maximize returns and benefit from long-term growth.
                </p>
                <p className="mt-4 text-lg text-gray-500 font-medium">
                  All true investing is value investing—everything else is speculation.
                </p>
              </div>
            </div>

            {/* Risk Management */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Strategic Risk Management</h2>
                <p className="mt-6 text-lg text-gray-500">
                  Large losses have the most significant impact on long-term compounding—the "volatility tax"—and our focus is on minimizing those drawdowns to preserve capital and enhance wealth accumulation. Our systematic, model-based risk assessments allow us to proactively adjust the portfolio when appropriate.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management Framework</h3>
                <ul className="space-y-4 text-gray-500">
                  <li>• Proactive portfolio monitoring</li>
                  <li>• Strategic liquidity management</li>
                  <li>• Tax-efficient rebalancing</li>
                  <li>• Systematic risk assessment</li>
                </ul>
              </div>
            </div>

            {/* Long-term Focus */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Long-Term Growth and Compounding</h2>
              <p className="mt-6 text-lg text-gray-500">
                The best way to maximize compounding is by not interrupting it unnecessarily. Our focus is on finding great companies and holding them long-term. We embrace simplicity over complexity, adhering to straightforward value investment principles while minimizing the impact of taxes and transaction fees from frequent trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 