interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  articleBody?: string;
}

export default function SEO({
  title,
  description,
  path,
  type = 'website',
  imageUrl = 'https://tyler-foxworthy.github.io/meristem_site/og-image.jpg',
  datePublished,
  dateModified,
  articleBody,
}: SEOProps) {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://tyler-foxworthy.github.io/meristem_site'
    : 'http://localhost:3001';
  
  const fullUrl = `${baseUrl}${path}`;
  const fullTitle = `${title} | Meristem Capital`;

  // Base schema for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Meristem Capital",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Meristem Capital is an investment management firm focused on disciplined ownership of high-quality businesses.",
    "sameAs": [
      "https://www.linkedin.com/company/meristemcapital"
    ]
  };

  // Additional schema for articles if applicable
  const articleSchema = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "articleBody": articleBody,
    "publisher": organizationSchema,
    "url": fullUrl
  } : null;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(type === 'article' ? articleSchema : organizationSchema)
        }}
      />
    </>
  );
} 