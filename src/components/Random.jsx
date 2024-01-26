import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

  const {gif, loading, fetchData} = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h2 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h2>

      {
        loading ? (<Spinner />) : (<img src={gif} width='450' alt="meme"></img>)
      }

      <button className="w-10/12 bg-yellow-300 text-lg py-1 rounded-lg mb-[20px]" onClick={clickHandler}>
        Generate
      </button>

    </div>
  );
}
