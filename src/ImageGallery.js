import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const API_KEY = "23712727-d4c6b00a134b1e5e5e5dcfaa5"; // Replace with your Pixabay API key
    const searchQuery = "nature"; // Replace with the desired search query
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo`;

    try {
      const response = await axios.get(URL);
      setImages(response.data.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.previewURL} alt={image.tags} />
            <p>By: {image.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
