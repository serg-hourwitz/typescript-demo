// * Base
import useTitle from '../../components/hooks/use-title.hook';
import { useEffect, useState, memo, FC } from 'react';
import axios from 'axios';


// *Types
type FactData = {
  createdAt: string;
  shortFact: string;
  longFact: string;
  country: string;
  id: string;
};

const Search: FC = memo(() => {
  const pageTitle: string = useTitle({ title: 'Search' });
  const [isloading, setIsloading] = useState<boolean>(true);
  const [factsData, setFactsData] = useState<FactData[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<FactData[]>([]);

  useEffect(() => {
    axios
      .get(`https://63db4515b8e69785e47e7435.mockAPI.io/country`)
      .then((response) => {
        setFactsData(response.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, []);

  useEffect(() => {
    const filteredData = factsData.filter((item) => {
      return Object.values(item)
        .join('')
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  }, [factsData, searchInput]);

  return (
    <div>
      <h1 className="text-start text-xl font-bold">{pageTitle}</h1>
      <header className="p-2 text-center">
        <h2 className="my-0 mx-0 mb-4 font-semibold">Random Country Facts</h2>

        <div className="flex w-full max-w-400 mx-auto">
          <label className="rounded-sm grow">
            <input
              className="w-full bg-gray-200 p-4 border border-gray-300 px-5 py-1 rounded-md focus:outline-slate-400 cursor-pointer"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              required
            />
          </label>
        </div>
      </header>

      <main>
        {isloading ? (
          <p>Loading...</p>
        ) : filteredResults.length === 0 ? (
          <p className="text-red-600 font-bold">No matching results found.</p>
        ) : (
          <section className="grid grid-cols-3 gap-2 ml-4 mr-8">
            {filteredResults.length !== 0
              ? factsData.map((data) => (
                  <article
                    className="border border-gray-300 rounded-lg p-2 md:p-4 shadow-md relative"
                    key={data.id}
                  >
                    <h3>{data.shortFact}</h3>
                    <p>{data.longFact}</p>
                    <p className="border border-gray-300 rounded-lg max-w-max p-2">
                      {data.country}
                    </p>
                    <p className="text-right absolute bottom-0 right-2">
                      {data.createdAt.slice(0,10)}
                    </p>
                  </article>
                ))
              : filteredResults.map((data) => (
                  <article
                    className="border border-gray-300 rounded-lg p-2 md:p-4 shadow-md relative"
                    key={data.id}
                  >
                    <h3>{data.shortFact}</h3>
                    <p>{data.longFact}</p>
                    <p className="border border-gray-300 rounded-lg max-w-max p-2">
                      {data.country}
                    </p>
                    <p className="text-right absolute bottom-0 right-2">
                      {data.createdAt.slice(0,10)}
                    </p>
                  </article>
                ))}
          </section>
        )}
      </main>
    </div>
  );
});

export default Search;
