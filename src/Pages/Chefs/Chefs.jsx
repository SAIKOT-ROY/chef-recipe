import React, { useEffect, useState } from "react";
import ChefsBio from "../ChefsBio/ChefsBio";

const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefsData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h4 className="text-center text-5xl mb-10 font-serif">Chef section</h4>
      <div className="grid md:grid-cols-3 md:w-3/4 md:mx-auto gap-y-10">
        {chefsData.map((chef) => (
          <ChefsBio key={chef.id} chef={chef}></ChefsBio>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
