export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

// Sample articles until we implement markdown loading
const SAMPLE_ARTICLES: Article[] = [
  {
    slug: 'investment-philosophy',
    title: 'Our Investment Philosophy',
    description: 'Understanding our approach to long-term value creation through quantitative methods and disciplined risk management.',
    date: '2024-03-18',
    tags: ['Strategy'],
  },
  {
    slug: 'market-outlook-2024',
    title: '2024 Market Outlook',
    description: 'Our analysis of current market conditions and how our systematic approach positions us to identify opportunities.',
    date: '2024-03-17',
    tags: ['Market Analysis'],
  },
  {
    slug: 'volatility-and-long-term-returns',
    title: 'Volatility and Long-Term Returns',
    description: 'How the "volatility tax" affects compounding and why minimizing drawdowns is crucial for wealth preservation and growth.',
    date: '2024-03-15',
    tags: ['Risk Management'],
  },
];

export async function getAllArticles(): Promise<Article[]> {
  // In the future, this will fetch articles from markdown files
  return SAMPLE_ARTICLES;
} 