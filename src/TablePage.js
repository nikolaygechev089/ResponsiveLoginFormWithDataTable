import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from './Layout'; // Импортирай Layout компонента
import Pagination from './Pagination';

const TablePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cachedData = localStorage.getItem(`swapi-page-${page}`);
                if (cachedData) {
                    setData(JSON.parse(cachedData));
                } else {
                    const response = await axios.get(
                        `https://swapi.py4e.com/api/people/?page=${page}`
                    );
                    localStorage.setItem(
                        `swapi-page-${page}`,
                        JSON.stringify(response.data.results)
                    );
                    setData(response.data.results);
                }
            } catch (err) {
                setError("Failed to fetch data. Please check your connection.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const handleNextPage = () => setPage((prev) => prev + 1);
    const handlePrevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

    if (loading) return <Layout><div className="table-container p-8">Loading...</div></Layout>;
    if (error) return <Layout><div className="table-container p-8">{error}</div></Layout>;

    return (
        <Layout>
            <div className="table-container">

                <div className="flex justify-center items-center h-[50vh] bg-opacity-0">
                    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="overflow-auto">
                            <h2 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Star Wars Characters
                            </h2>
                            <table className="w-full table-fixed">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Mass
                                        </th>
                                        <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Height
                                        </th>
                                        <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Hair Color
                                        </th>
                                        <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Skin Color
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data.map((character) => (
                                        <tr key={character.name}>
                                            <td className="w-1/5 px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {character.name}
                                            </td>
                                            <td className="w-1/5 px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {character.mass}
                                            </td>
                                            <td className="w-1/5 px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {character.height}
                                            </td>
                                            <td className="w-1/5 px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {character.hair_color}
                                            </td>
                                            <td className="w-1/5 px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {character.skin_color}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination page={page} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TablePage;