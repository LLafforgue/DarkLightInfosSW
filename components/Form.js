import { useState } from 'react';

function Form(props) {
  const [searchText, setSearchText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(searchText);
    setSearchText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/5 flex justify-center align-center">
      <div className="bg-neutral-500 w-4/5 rounded-lg">
        <input
          className="-translate-y-[6px] caret-neutral-200 dark:caret-neutral-800 w-full text-neutral-200 dark:text-neutral-800 font-bold border-neutral-800 dark:border-neutral-300 rounded-lg bg-neutral-800  dark:bg-neutral-200 p-3 outline-none"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          autoFocus
        />
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
