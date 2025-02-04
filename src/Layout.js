import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-blue-500 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Responsive Login Form With Data Table</h1>
            </header>

            {/* Основно съдържание (центрирано) */}
            <main className="flex-grow flex justify-center items-center">
                <div className="w-129 h-81 bg-white rounded-lg shadow-lg flex flex-col justify-center"> {/* Ограничава ширината и добавя падинг */}
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2025 Responsive Login Form With Data Table. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
