import { useState } from 'react';
import data from "../db.json";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { PollState } from '../context/PollContext';


const Home = () => {
  const { state: { ranks }, dispatch } = PollState()

  const [pageNumber, setPageNumber] = useState(0)
  const dataPerPage = 8;
  const pagesVisited = pageNumber * dataPerPage;
  const pageCount = Math.ceil(data.length / dataPerPage);


  //console.log(rankNumber);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  console.log(ranks);



  return (
    <div className="container mx-auto">
      <div className="w-full mt-6 mb-4">
        <div className="px-14 my-6">
          <p className="sm:text-4xl text-3xl font-semibold">Select and rand 3 <br /> of your favorite dishes </p>
          <p className="text-lg text-gray-700 font-mono mt-2">You have ranked 0 dishes</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-4  sm:grid-cols-2 grid-cols-1  w-full mt-4 px-12">
          {
            data
              .slice(pagesVisited, pagesVisited + dataPerPage)
              .map(item => (
                <div key={item.id} className="shadow-lg shadow-slate-300 rounded-md cursor-pointer p-4">

                  <img
                    src={item.image}
                    alt={item.dishName}
                    className="rounded object-cover flex justify-center h-56 w-full bg-transparent"
                  />
                  <div>
                    <h5 className="font-sans text-2xl mb-2 font-semibold mt-4">{item.dishName}</h5>

                    <p>{item.description}</p>
                  </div>

                  <div class="pt-4 pb-2">
                    {
                      ranks.some(d => d.id === item.id ? (
                        <button onClick={() => {

                          dispatch({
                            type: "REMOVE_RANKS",
                            payload: item,
                          })
                        }} className="cursor-pointer inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rank1</button>
                      ) :
                        (
                          <button onClick={() => {
                            dispatch({
                              type: "ADD_RANKS",
                              payload: item,
                            })
                          }} className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rank1</button>
                        )
                      )
                    }
                    {/* <button onClick={() => {
                      dispatch({
                        type: "ADD_RANKS",
                        payload: item,
                      })
                    }} className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rank1</button> */}




                  </div>

                </div>
              ))}

        </div>

        <div className="my-8">
          <ReactPaginate
            previousLabel={<FaChevronLeft />}
            nextLabel={<FaChevronRight />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>


    </div>
  )
}

export default Home