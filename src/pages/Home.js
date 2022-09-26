import { useState } from 'react';
import data from "../db.json";
import Footer from "../components/Footer";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { PollState } from '../context/PollContext';


const Home = () => {
  const { dishes, dispatchDishes, dispatchVotes } = PollState()

  const [pageNumber, setPageNumber] = useState(0)
  const dataPerPage = 8;
  const pagesVisited = pageNumber * dataPerPage;
  const pageCount = Math.ceil(data.length / dataPerPage);
  const rank = ["Rank1", "Rank2", "Rank3"]


  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const clickRank = (value, item) => {
    if (value === "Rank1") {
      dispatchVotes({
        type: "RANK1",
        payload: [item.id, item.dishName]
      })
      dispatchDishes({
        type: "RANK1",
        payload: [item.id]
      })
    }

    else if (value === "Rank2") {
      dispatchVotes({
        type: "RANK2",
        payload: [item.id, item.dishName]
      })
      dispatchDishes({
        type: "RANK2",
        payload: [item.id]
      })
    }

    if (value === "Rank3") {
      dispatchVotes({
        type: "RANK3",
        payload: [item.id, item.dishName]
      })
      dispatchDishes({
        type: "RANK3",
        payload: [item.id]
      })
    }


  }


  return (
    <>
      <div className="container mx-auto">
        <div className="w-full mt-6 mb-4">
          <div className="px-14 my-6">
            <p className="sm:text-4xl text-3xl font-semibold">Select and rank <br /> of your favorite dishes </p>
            <p className="text-lg text-gray-700 font-mono mt-2">You have ranked 0 dishes</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-4  sm:grid-cols-2 grid-cols-1  w-full mt-4 px-12">
            {
              dishes
                .slice(pagesVisited, pagesVisited + dataPerPage)
                .map(item => (
                  <div key={item.id} className="shadow-lg shadow-slate-300 rounded-md cursor-pointer p-4">

                    <img
                      src={`${item.image}?random=${item.id}`}
                      alt={item.dishName}
                      className="rounded object-cover flex justify-center h-56 w-full bg-transparent"
                    />
                    <div>
                      <h5 className="font-sans text-2xl mb-2 font-semibold mt-4">{item.dishName}</h5>

                      <p>{item.description}</p>
                    </div>

                    <div className="pt-4 pb-2">

                      {
                        rank.map((val, index) => (
                          <button key={index} onClick={() => clickRank(val, item)} className={`cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-orange-500 hover:text-white hover:shadow-lg`}>
                            #{val}
                          </button>
                        ))
                      }




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

      <Footer />
    </>

  )
}

export default Home