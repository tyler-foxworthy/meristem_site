'use client'

import { motion } from "framer-motion";
import { getAllArticles, type Article } from "@/lib/articles";
import Link from "next/link";

export default async function ArticlesPage() {
  const articles: Article[] = await getAllArticles();

  return (
    <main className="container py-16">
      <div className="max-w-2xl">
        <h1 className="text-brand-800">Articles</h1>
        
        <p className="text-lg mb-12">
          Our perspectives on markets, investing, and quantitative approaches.
        </p>

        <div className="space-y-12">
          {articles.map((article: Article) => (
            <article key={article.slug} className="border-t border-gray-200 pt-8">
              <div className="mb-2 text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                {article.tags && article.tags.length > 0 && (
                  <span className="ml-3 text-brand-700">
                    {article.tags[0]}
                  </span>
                )}
              </div>
              <h2 className="text-xl mb-2">
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-gray-900 hover:text-brand-700"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-600">
                {article.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 