import React from 'react';

const InProgress = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-fondo">
            <div className="text-center px-4">
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-4 border-t-gray-300 rounded-full animate-spin"></div>
                </div>
                <h1 className="text-3xl font-bold text-white">Estamos trabajando en ello...</h1>
                <p className="text-lg text-gray-400 mt-2">
                    La página estará disponible en breve. Gracias por tu paciencia.
                </p>
            </div>
        </div>
    );
};

export { InProgress };
