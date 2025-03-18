export default function About() {
  return (
    <main className="container py-16">
      <div className="max-w-2xl">
        <h1 className="text-brand-800">About Our Approach</h1>
        
        <section className="mb-12">
          <p className="text-lg mb-8">
            "In the short run, the market is a voting machine, but in the long run, it is a weighing machine." 
            — Warren Buffett
          </p>
          <p className="text-gray-600 mb-6">
            All true investing is value investing—everything else is speculation. We focus on companies with strong fundamentals and growth potential, preferring a great business at a fair price rather than a mediocre business at a great price.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-brand-800">Understanding the Present, Not Predicting the Future</h2>
          <p className="text-gray-600 mb-6">
            We utilize AI and advanced statistical algorithms to analyze real-time market data, focusing on measuring the present rather than trying to predict the future. By identifying deviations in market structure and dynamics, we better understand when to take specific actions to minimize risk while maximizing long-term rewards.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-brand-800">Protecting Against Downside Risks</h2>
          <p className="text-gray-600 mb-6">
            Large losses have the most significant impact on long-term compounding—the "volatility tax"—and our focus is on minimizing those drawdowns to preserve capital and enhance wealth accumulation. Our systematic, model-based risk assessments allow us to proactively adjust the portfolio when appropriate.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-brand-800">Long-Term Growth and Compounding</h2>
          <p className="text-gray-600 mb-6">
            The best way to maximize compounding is by not interrupting it unnecessarily. Our focus is on finding great companies and holding them long-term. We embrace simplicity over complexity, adhering to straightforward value investment principles while minimizing the impact of taxes and transaction fees from frequent trading.
          </p>
        </section>

        <section>
          <h2 className="text-brand-800">Fee Structure</h2>
          <p className="text-gray-600 mb-6">
            We align our interests with our clients through a performance-based fee structure:
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>• No management fees</li>
            <li>• Performance fee of 15% on returns above the S&P 500 benchmark</li>
            <li>• High-water mark protection</li>
            <li>• Transparent, liquid accounts with Interactive Brokers</li>
            <li>• No lock-up periods</li>
          </ul>
        </section>

        <section>
          <h2 className="text-brand-800">Account Requirements</h2>
          <p className="text-gray-600">
            Minimum account size: $100,000
          </p>
        </section>
      </div>
    </main>
  )
} 