import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
