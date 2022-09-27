import React, { useEffect } from 'react'
import { PollState } from '../context/PollContext';


const Dashboard = () => {
    const { votes } = PollState()

    useEffect(() => {
        document.title = "Dashboard - Syook";
    }, []);

    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <div className="my-8">
            <div className="mb-14 px-14">
                <h5 className="text-center text-4xl font-semibold">Hey, <span className="capitalize">{user.username}</span> <br />Check Your Poll Results !!</h5>
                <div className="container mx-auto">
                    <p className="text-center font-mono text-gray-600 my-4 ">
                        The leftmost column shows your selections Rank.
                        Also a (1, 2, 3 format) in the rank column or a score of (30, 20, 10)
                        means that the dish  rank by any user. And middle column
                        shows you your ranked disheses which are empty now.
                        It will show the rank when you select your dishes rank
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center mx-auto my-4 w-full">
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
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th className="py-3 px-6" scope="row">1</th>
                                <td>{votes[0]}</td>
                                <td>{30}</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th className="py-3 px-6" scope="row">2</th>
                                <td>{votes[1]}</td>
                                <td>{20}</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th className="py-3 px-6" scope="row">3</th>
                                <td>{votes[2]}</td>
                                <td>{10}</td>
                            </tr>
                        </tbody>


                    </table>
                </div>


            </div>


        </div>
    )
}

export default Dashboard