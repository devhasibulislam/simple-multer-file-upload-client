import React from "react";
import useData from "../utils/useData";
import Card from "./Card";

const Content = () => {
  const { data, isLoading } = useData();

  if (isLoading) {
    return "Loading...";
  }

  return (
    <section className="h-[400px] overflow-y-scroll overflow-x-hidden">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-4 gap-y-4">
        {data?.data?.map((dta) => (
          <Card
            key={dta?._id}
            _id={dta?._id}
            name={dta?.name}
            email={dta?.email}
            avatar={dta?.avatar}
            password={dta?.password}
          />
        )).reverse()}
      </div>
    </section>
  );
};

export default Content;
