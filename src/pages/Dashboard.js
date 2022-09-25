import React, { useEffect } from 'react'
import { PollState } from '../context/PollContext';
import data from "../db.json";


const Dashboard = () => {
    const { state: { ranks }, dispatch } = PollState()

    useEffect(() => {
        document.title = "Dashboard - Sybook";
    }, []);

    return (
        <div className="my-8">
            <div className="mb-14 px-14">
                <h5 className="text-center text-4xl font-semibold">Your Poll Results !!</h5>
                <p className="text-center text-md font-mono mt-2">
                    The leftmost column shows your selections.
                    Also a ? in the rank column or a score of 0
                    means that the dish has not been ranked by any user.
                </p>
            </div>

            <div className="flex items-center justify-center my-4 w-full">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg md:w-[900px]">
                    <table className="w-full  text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-md text-gray-700  border-b-2  border-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Rank
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Dishname
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Score
                                </th>

                            </tr>
                        </thead>
                        {
                            ranks.map((item) => {
                                return (
                                    <tbody key={item.id}>
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <td className="py-4 px-6">
                                                {item.rank1}
                                            </td>
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.dishName}
                                            </th>
                                            <td className="py-4 px-6">
                                                0
                                            </td>


                                        </tr>

                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard