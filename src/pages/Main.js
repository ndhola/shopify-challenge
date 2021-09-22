import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageDetails from "../components/ImageDetails";
import axios, { Routes } from "../services/axios";

const Main = () => {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImageData();
  }, []);

  const fetchImageData = async () => {
    try {
      const { url, method, params } = Routes.apod.listAPOD();

      const { data } = await axios[method](url, { params: params });

      setImageList(data);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {loading ? (
        <CircularProgress
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            top: "40%",
            left: "46%",
          }}
        />
      ) : (
        imageList &&
        imageList.map((image, index) => {
          return (
            <ImageDetails
              key={index}
              imageTitle={image.title}
              imageExplanation={image.explanation}
              imageUrl={image.url}
              dateOfCapture={image.date}
            />
          );
        })
      )}
    </div>
  );
};

export default Main;
