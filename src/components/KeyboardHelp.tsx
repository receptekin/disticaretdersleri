import React, { useState } from 'react';

export const KeyboardHelp: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-secondary/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-secondary/90 transition-colors"
                aria-label="Klavye kısayolları"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </button>

            {isVisible && (
                <div className="absolute bottom-16 right-0 bg-secondary/90 backdrop-blur-sm p-4 rounded-lg shadow-xl w-64">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Klavye Kısayolları</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex justify-between">
                            <span>Sonraki Slayt</span>
                            <kbd className="px-2 py-1 bg-primary/20 text-primary rounded">→</kbd>
                        </li>
                        <li className="flex justify-between">
                            <span>Önceki Slayt</span>
                            <kbd className="px-2 py-1 bg-primary/20 text-primary rounded">←</kbd>
                        </li>
                        <li className="flex justify-between">
                            <span>İlk Slayt</span>
                            <kbd className="px-2 py-1 bg-primary/20 text-primary rounded">Home</kbd>
                        </li>
                        <li className="flex justify-between">
                            <span>Son Slayt</span>
                            <kbd className="px-2 py-1 bg-primary/20 text-primary rounded">End</kbd>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}; 