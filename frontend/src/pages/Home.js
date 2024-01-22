import { useState,useEffect } from "react";
import api from "../api/AxiosConfig";
import BookListing from "../components/BookListing";

const Home = () => {

  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");


  const getBooks = async () => {
    const response = await api.get("/api/books");
    setBooks(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);


  const handleInputChange = async (e) => {
    setQuery(e.target.value);
    try {
      const response = await api.get(`/api/books/search?query=${e.target.value}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
 };


  return (
    <section className="text-white font-normal mt-11">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <form>
          <div className="mt-6 m-3 block">
            <div className="flex justify-center w-full">
              <input
                className="search-box"
                type="text"
                value={query}
                placeholder="Find Book?"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>

        <div className="m-11">
          <BookListing Books={books}/>
        </div>
      </div>
    </section>
  );
};

export default Home;
