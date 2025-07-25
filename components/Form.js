import { useState } from 'react';
import AsyncSelect from 'react-select/async';

function Form(props) {
  const [searchText, setSearchText] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(searchText.label);
    setSearchText('');
  };
  const loadOptions = async (inputValue, callback) => {
    if (!inputValue || inputValue.length < 3) {
      setOption([])
      callback([]);
      return;
    }

    const endpoints = ["people", "planets", "films", "starships"];

  try {
    const responses = await Promise.all(
      endpoints.map((el) =>
        fetch(`https://swapi.py4e.com/api/${el}/?search=${inputValue}`)
          .then((res) => res.json())
          .catch(() => ({ results: [] }))
      )
    );

    const allResults = responses.flatMap((data, endpointIndex) =>
      data.results.map((result, i) => ({
        value: `${endpointIndex}-${i}`, // pour avoir une clé unique
        label: result.name || result.title || "Sans nom",
      }))
    );

    callback(allResults);
      // console.log(option)
    } catch (error) {
      console.error(error);
      callback([]);
    }};
  console.log(searchText.label)

  return (
    <form onSubmit={handleSubmit} className="w-2/5 flex justify-center align-center">
      <div className="bg-neutral-500 w-4/5 rounded-lg">
        <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions={false}
        onChange={(selectedOption) => {setTimeout(()=>{console.log(selectedOption) ; setSearchText(selectedOption)},1000)}}
        value={searchText}
        placeholder='find character ; planet ; machines ; actor ; ...'
        isClearable
        className="-translate-y-[6px] caret-neutral-200 dark:caret-neutral-800 w-full text-neutral-500 dark:text-neutral-800 font-bold border-neutral-800 dark:border-neutral-300 rounded-lg bg-neutral-800  dark:bg-neutral-200 p-3 outline-none"

      />
      {/* <input
          className="-translate-y-[6px] caret-neutral-200 dark:caret-neutral-800 w-full text-neutral-200 dark:text-neutral-800 font-bold border-neutral-800 dark:border-neutral-300 rounded-lg bg-neutral-800  dark:bg-neutral-200 p-3 outline-none"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          autoFocus
          placeholder='find character ; planet ; machines ; actor ; ...'
        /> */}
      </div>

      <div className="bg-neutral-500 w-1/5 rounded-lg ml-2">
        <button
          type="submit"
          className={`border-neutral-800 dark:border-neutral-200  w-full -translate-y-[6px] active:-translate-y-[2px] text-neutral-200 dark:text-neutral-800 border-l border-solid border-neutral-200 font-bold rounded-lg bg-neutral-800 dark:bg-neutral-200 p-3`}
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}

export default Form;
