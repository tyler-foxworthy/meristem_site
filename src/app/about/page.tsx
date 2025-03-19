export default function About() {
  return (
    <main className="container py-16">
      <div className="max-w-2xl">
        <h1 className="text-brand-800 mb-12">About</h1>
        
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            Meristem Capital, based in Zionsville, Indiana, was founded by <a href="https://www.linkedin.com/in/tyler-foxworthy/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700">Tyler Foxworthy</a> in 2024 following a career dedicated to using mathematics and statistics to help businesses uncover inefficiencies, forecast outcomes, and optimize performance—initially as a data scientist, then as an entrepreneur and investor.
          </p>

          <p className="text-lg leading-relaxed">
            A graduate of Purdue University with a degree in applied mathematics, Tyler has held leadership roles across software, biotechnology, management consulting, and private equity. He is an expert in developing advanced quantitative models and algorithms for data mining, network analysis, risk management, and predictive modeling, and he holds multiple patents for innovations in these areas.
          </p>

          <p className="text-lg leading-relaxed">
            In 2021, Tyler successfully exited his previous venture, Vertex Intelligence, an AI software consultancy. His deep quantitative expertise and nuanced understanding of what drives business performance form the foundation of Meristem's disciplined and systematic approach to investing.
          </p>

          <p className="text-lg leading-relaxed">
            Meristem serves accredited and qualified clients, including high-net-worth individuals, family offices, and foundations, helping them maximize long-term compounding while thoughtfully managing risk and protecting their capital through periods of uncertainty. We offer access to model portfolios and separately managed accounts, focusing exclusively on long-only, long-term investments.
          </p>

          <p className="text-lg leading-relaxed">
            Our fee structure aligns our interests with those of our clients—we only earn fees when we outperform the S&P 500 index. With no management fees, a high-water mark provision, and liquid accounts with no lock-up periods, we provide a transparent and investor-friendly approach designed to compound wealth over time.
          </p>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-600">
              Interested in learning more about our investment approach? {' '}
              <a 
                href="mailto:info@meristemcapital.com" 
                className="text-brand-600 hover:text-brand-700"
              >
                Reach out to us
              </a>
              {' '} at info@meristemcapital.com to start a conversation.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 