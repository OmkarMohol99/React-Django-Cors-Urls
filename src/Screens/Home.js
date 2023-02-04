import React from "react";
import { useForm } from "react-hook-form";
import { postDataToDatabase } from "../Database/DBService";

const Home = () => {
  const { register, handleSubmit } = useForm();

  const getData = (data) => {
    // console.log(data);
    postDataToDatabase(data);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(getData)}>
          <input type="number" {...register("roll")} />
          <input type="text" {...register("name")} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Home;
