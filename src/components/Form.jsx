import React, { useEffect } from "react";
import Select from "react-select";
import { options } from "../constant/options";
import { useForm, Controller } from "react-hook-form";
import { formValidation } from "../utils/formValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { API_KEY } from "../config/api";
import { useCallback } from "react";
import Loading from "./Loading";
import { useState } from "react";
const Form = ({ refetch, editData, setEditData }) => {
  let [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
    mode: "onChange",
  });

  if (loading) {
    <Loading />;
  }

  useEffect(() => {
    if (editData?.data) {
      setValue("name", editData?.data.name || "");
      setValue("sectors", editData?.data.sectors || []);
      setValue("agreeToTerms", editData?.data.agreeToTerms || false);
    }
  }, [editData, setValue]);

  const onSubmit = (data) => {
    if (editData?.data) {
      axios
        .put(`${API_KEY}/api/v1/sector/${editData.data._id}`, data)
        .then(function (response) {
          setLoading(true);
          refetch();
          setValue([], "sectors");
          reset();
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .post(`${API_KEY}/api/v1/sector/`, data)
        .then(function (response) {
          setLoading(true);
          refetch();
          reset();
          setValue([], "sectors");
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleDelete = useCallback((id) => {
    axios
      .delete(`${API_KEY}/api/v1/sector/${id}`)
      .then(function (response) {
        setLoading(true);
        refetch();
        reset();
        setValue([], "sectors");
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const addValue = useCallback(() => {
    setEditData(null);
    setValue("name", "");
    setValue("sectors", []);
    setValue("agreeToTerms", false);
  }, []);
  return (
    <div>
      <div class="flex h-screen ">
        <div class="m-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <button
                onClick={addValue}
                type="button"
                class="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <g>
                    <rect fill="none" height="24" width="24"></rect>
                  </g>
                  <g>
                    <g>
                      <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                    </g>
                  </g>
                </svg>
                <span class="pl-2 mx-1">Create new </span>
              </button>
              <div class="mt-5 bg-white rounded-lg shadow">
                <div class="flex">
                  <div class="flex-1 py-5 pl-5 overflow-hidden">
                    <h1 class="inline text-2xl font-semibold leading-none">
                      {editData?.data ? "Edit New" : "Add New"}
                    </h1>
                  </div>
                </div>
                <div class="px-5 pb-5">
                  <input
                    {...register("name")}
                    placeholder="Name"
                    class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-400 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                  {errors?.name && (
                    <p className="text-left mt-2 text-sm text-[#E85A2D]">
                      {errors?.name.message}
                    </p>
                  )}
                  <div className=" ">
                    <Controller
                      name="sectors"
                      control={control}
                      defaultValue={[]}
                      render={({ field }) => (
                        <Select
                          {...field}
                          isMulti
                          placeholder="Sectors you involved"
                          options={options}
                          className="text-black placeholder-gray-600 w-full px-4 py-2.5  mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 z-10 "
                          classNamePrefix="Sectors"
                        />
                      )}
                    />
                  </div>
                  {errors?.sectors && (
                    <p className="text-left mt-2 text-sm text-[#E85A2D]">
                      {errors?.sectors.message}
                    </p>
                  )}
                  <div class="flex items-center pt-3">
                    <input
                      {...register("agreeToTerms")}
                      type="checkbox"
                      class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                    />
                    <label
                      for="agreeToTerms"
                      class="block ml-2 text-sm text-gray-900"
                    >
                      Agree to terms
                    </label>
                  </div>
                  {errors?.agreeToTerms && (
                    <p className="text-left mt-2 text-sm text-[#E85A2D]">
                      {errors?.agreeToTerms.message}
                    </p>
                  )}
                </div>

                <hr class="mt-4" />
                <div class="flex flex-row-reverse p-3">
                  <div class="flex-initial pl-3">
                    <button
                      onClick={handleSubmit(onSubmit)}
                      type="button"
                      class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                          opacity=".3"
                        ></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                      </svg>
                      <span class="pl-2 mx-1">Save</span>
                    </button>
                  </div>
                  <div class="flex-initial">
                    <button
                      disabled={editData?.data ? false : true}
                      onClick={() => handleDelete(editData?.data._id)}
                      type="button"
                      className={`flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out  ${
                        editData?.data ? "opacity-100" : "opacity-50"
                      } `}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M8 9h8v10H8z" opacity=".3"></path>
                        <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                      </svg>
                      <span class="pl-2 mx-1">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
