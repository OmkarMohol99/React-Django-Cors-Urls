import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getSpecificData, updateData } from "../Database/DBService";

const EditStudent = () => {
  const { id } = useParams();
  console.log("Id", id);
  const { register, handleSubmit, setValue } = useForm();
  const [student, setStudent] = useState({});
  console.log("Student", student);

  useEffect(() => {
    getSpStudent();
  }, []);

  const getSpStudent = async () => {
    let res = await getSpecificData(id);
    setStudent(res.data);
  };

  const updatedData = (uData) => {
    console.log("Hello", uData);
    updateData(uData);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(updatedData)}>
          <input type="number" {...register("sId")} value={student.sId} />
          <input
            type="number"
            {...register("roll")}
            defaultValue={student.roll}
          />
          <input
            type="text"
            {...register("name")}
            defaultValue={student.name}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default EditStudent;
