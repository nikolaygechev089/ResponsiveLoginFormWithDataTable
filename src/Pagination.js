import React from 'react';

const Pagination = ({ page, handlePrevPage, handleNextPage }) => {
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
            {/* Бутон "Previous" */}
            <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className={`px-4 py-2 rounded-md ${page === 1
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
            >
                Previous
            </button>

            {/* Текуща страница */}
            <span className="text-lg font-medium text-gray-700">Page {page}</span>

            {/* Бутон "Next" */}
            <button
                onClick={handleNextPage}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;