import React, { useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";

const style = {
  // bg: `h-[1800px] w-screen p-10 bg-gradient-to-r from-[#09203F] to-[#537895] text-center`,
  bg: `h-[1800px] w-screen p-10 bg-gray-700 text-center`,
  search: `rounded-full pl-5 shadow-xl border p-2 w-md text-xl placeholder:italic placeholder:text-slate-400`,
  container: `flex space-x-4 justify-center mb-20`,
  btn: `bg-slate-100 rounded-full py-2 px-4`,
  heading: `mb-10 text-3xl font-extrabold text-slate-200 md:text-5xl lg:text-6xl`,
  headgradient: ` text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400`,
  // row: `grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4`
  row: `columns-3 gap-3 w-[1200px] mx-auto space-y-3`,
  col: `break-inside-avoid`,
};

function App() {
  const [photos, setPhotos] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setPhotos(e.target.value);
  };

  const showPhotos = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${photos}&client_id=cNu-wlzwkmjB4Uc20zLG2VE3cR8akYa8sS1xsEkfRX8`
      )
      .then((Response) => {
        // console.log(Response.data)
        setResult(Response.data.results);
      });
  };
  return (
    <div className={style.bg}>
      <h1 className={style.heading}>
        <spam className={style.headgradient}>Image Search </spam>
        React Application
      </h1>
      <div className={style.container}>
        <input
          type="text"
          className={style.search}
          value={photos}
          onChange={handleChange}
          placeholder="search for anything...."
        />
        <button type="submit" onClick={showPhotos} className={style.btn}>
          <AiOutlineSearch size={20} />
        </button>
      </div>
      <div className={style.row}>
        {result.map((value) => {
          return (
            <div className={style.col}>
              <a href="#" className={style.images}>
                <img className={style.img} src={value.urls.small} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
