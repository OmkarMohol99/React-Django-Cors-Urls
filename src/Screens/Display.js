import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  deleteSelectedDataFromDatabase,
  getDataFromDatabase,
} from "../Database/DBService";
import { NavLink } from "react-router-dom";

const Display = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    getFullData();
  }, [flag]);

  const getFullData = async () => {
    let res = await getDataFromDatabase();
    setData(res.data);
  };

  const handleDelete = (sId) => {
    deleteSelectedDataFromDatabase(sId);
    if (flag) {
      setFlag(!flag);
    } else {
      setFlag(!flag);
    }
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ROLL</th>
              <th>NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <>
                <tr>
                  <td>{d.roll}</td>
                  <td>{d.name}</td>
                  <td>
                    <NavLink to={`/editStudent/${d.sId}`}>
                      <button>EDIT</button>
                    </NavLink>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(d.sId)}>DELETE</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
