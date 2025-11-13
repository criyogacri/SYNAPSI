
import React from 'react';

interface ArticleModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
    isLoading: boolean;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ isOpen, onClose, title, content, isLoading }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex justify-center items-center p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-600"
                        aria-label="Chiudi modale"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                
                <div className="p-6 overflow-y-auto">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center min-h-[200px]">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
                            <p className="mt-4 text-gray-600">L'AI sta scrivendo l'articolo per te...</p>
                        </div>
                    ) : (
                        <article className="prose lg:prose-lg max-w-none text-gray-700 whitespace-pre-wrap">
                            {content}
                        </article>
                    )}
                </div>

                <div className="p-4 border-t border-gray-200 text-right">
                    <button 
                        onClick={onClose} 
                        className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-colors"
                    >
                        Chiudi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArticleModal;
