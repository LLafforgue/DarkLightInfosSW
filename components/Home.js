import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSith } from '@fortawesome/free-brands-svg-icons';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { searchAPI } from '../functions/searchAPI';
import {useTheme} from 'next-themes'
import Card from './Card';
import Form from './Form';

function Home() {
  const {theme, setTheme } = useTheme();
  const [loading, setLoading]= useState(false)
  // const {theme, setTheme} = useState("light");
  console.log(theme)
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (searchText) => {
    setLoading(true)
    const result = await searchAPI(searchText);
    setSearchResult(result);
    setLoading(false)
  };

  const cards = searchResult.map((data, i) => {
    return <Card key={i} theme={theme} infos={data} />;
  });

  const lightMode = {
    h1:"font-starjedi"
  }

  const darkMode = {
    h1:"font-starjout"
  }
  return (
    <div id="main" className= {`py-0 px-5 bg-left-top bg-right-top bg-no-repeat bg-cover w-screen min-h-screen relative flex flex-col justify-center items-center transition-all bg-light dark:bg-dark`}>
      {/* TOGGLE THEME BUTTON */}
      <div className="rounded-full cursor-pointer border-none absolute top-6 right-6 w-[50px] h-[50px] bg-neutral-500 dark:bg-neutral-400 ">
        <button 
        onClick={()=>{setTheme(theme==="light"?"dark":"light")}}
        className="flex justify-center items-center w-full h-full rounded-full -translate-y-[6px] dark:translate-y-[6px] active:translate-y-[10px] dark:active:-translate-y-[10px] bg-neutral-800 dark:bg-neutral-300">
          {theme==='light'?
            <FontAwesomeIcon icon={faSith} className="text-2xl text-neutral-200" />
            :<FontAwesomeIcon icon={faJedi} className="text-2xl text-neutral-700" />}
        </button>
      </div>

      {/* TITLE */}
      <h1 className={`text-6xl m-10 text-neutral-800 dark:text-neutral-300 font-star-jedi dark:font-starjout`}>THEME WARS</h1>
      <p className={`text-6xs m-10 text-neutral-800 dark:text-neutral-300 font-star-jedi dark:font-starjout`}>Toutes les infos sur StarWars dans cet espace</p>

      {/* SEARCH */}
      <Form handleSearch={handleSearch} />

      {/* CARDS */}

      <div className="w-2/5 flex flex-col items-center">
        {loading&&<h2 className={`text-2xs m-10 text-neutral-800 dark:text-neutral-300 font-star-jedi dark:font-starjout`} >Loading</h2>}
        {cards}
      </div>
    </div>
  );
}

export default Home;
