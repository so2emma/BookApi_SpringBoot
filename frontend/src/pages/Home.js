import { useState,useEffect } from "react";
import api from "../api/AxiosConfig";

const Home = () => {
// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// getting the book from the initial loading of the page 

  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await api.get("/api/books");
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  // =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // this is for the search query 

  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/api/books");
      // const data = ;
      console.log(data);
   } catch (error) {
      console.error('Error:', error);
   }
  };

  return (
    <section className="text-white font-normal mt-11">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <form onsSubmit={handleSubmit}>
          <div className="mt-6 m-3 block">
            <div className="flex justify-center w-full">
              <input
                className="search-box"
                type="text"
                value={query}
                placeholder="Find Book?"
                onChange={(e) => setQuery(e.target.value)}
              />

              <button className="search-button">Find Book.</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;
