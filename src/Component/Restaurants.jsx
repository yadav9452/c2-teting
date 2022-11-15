import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

const fetchdata = async (page) => {
  // console.log(page);
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`
  ).then((res) => res.json());
  // .then((res) => res.data());
};

function Restaurants() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    // gettingData();
    gettingData(1);
  }, [page]);

  // console.log(data);
  if (loading) {
    return <LoadingIndicator />;
  }

  async function gettingData(page) {
    try {
      setLoading(true);
      let { data, totalPages } = await fetchdata(page);
      setLoading(false);
      setData(data);
      setTotalPages(totalPages);
      // fetchdata(page)
      //   .then((res) => setData(res.data))
      //   .then(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      console.log("Error:", error);
    }
  }

  const handlePage = (pageNo) => {
    setPage(pageNo);
    console.log(pageNo);
    gettingData(pageNo);
  };

  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
        {/* Restaurant Card */}
        {data.map((el) => {
          return (
            <div key={el.id}>
              <RestaurantCard
                name={el.name}
                id={el.id}
                type={el.type}
                image={el.image}
                rating={el.rating}
                number_of_votes={el.number_of_votes}
                price_starts_from={el.price_starts_from}
              />
            </div>
          );
        })}
      </div>
      <div>
        {/* Pagination Component */}

        <Pagination curr={page} handlePage={handlePage} />
      </div>
    </div>
  );
}

export default Restaurants;
