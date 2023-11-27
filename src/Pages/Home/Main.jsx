import React, { useState, useCallback } from "react";
import "./main.css";
import Form from "../../components/Form";
import { useQuery } from "react-query";
import Sectors from "../../components/Sectors";
import axios from "axios";
import Loading from "../../components/Loading";
import { fetchData } from "../../utils/fetchData";
import { API_KEY } from "../../config/api";
const Main = () => {
  const [editData, setEditData] = useState(null);
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["sector"],
    fetchData
  );

  const handleEdit = useCallback(async (id) => {
    await axios
      .get(`${API_KEY}/api/v1/sector/${id}`)
      .then((response) => {
        setEditData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div class="hero h-auto mt-14 bg-gray-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <Form {...{ refetch, editData, setEditData }} />
          <div className="text-left p-6">
            <h1 class="text-5xl font-bold typewriter">
              Add Sector You Work For !
            </h1>
            <p class="py-6">
              You can edit after add or can delete from bottom of the form
              delete button
            </p>
            <button
              type="button"
              class="btn border-none bg-gradient-to-r from-black-500 to-white-500 "
            >
              Get Started
            </button>
            <div className=" flex justify-left align-left flex-wrap gap-3 shadow-xl-drop">
              {data?.data.map((item) => (
                <Sectors
                  handleEdit={handleEdit}
                  name={item.name}
                  sectors={item.sectors}
                  id={item._id}
                  agreeToTerms={item.agreeToTerms}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
