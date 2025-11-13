
import React from 'react';
import { Article } from '../types';

interface BlogSectionProps {
    articles: Article[];
    onArticleSelect: (article: Article) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ articles, onArticleSelect }) => {
    return (
        <section id="blog" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Approfondimenti per il Benessere Quotidiano
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Clicca su un argomento per leggere un articolo completo generato dalla nostra AI.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {articles.map((article) => (
                        <div
                            key={article.title}
                            onClick={() => onArticleSelect(article)}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col justify-between transform hover:-translate-y-1"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-teal-700">{article.title}</h3>
                                <p className="mt-2 text-gray-600">{article.description}</p>
                            </div>
                             <div className="mt-4 text-right">
                                <span className="text-sm font-semibold text-teal-600 hover:text-teal-800">
                                    Leggi l'articolo &rarr;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
