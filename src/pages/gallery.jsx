import React, { useState } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";

const photos = [
  "/src/images/image1.png", 
  "/src/images/image2.png", 
  "/src/images/image3.png", 
  "/src/images/image4.png", 
  "/src/images/image5.png", 
  "/src/images/image6.png", 
  "/src/images/image7.png", 
  "/src/images/image8.png", 
  "/src/images/image9.png", 
  "/src/images/image10.png", 
  "/src/images/image11.png", 
  "/src/images/image12.png", 
  "/src/images/image13.png", 
  "/src/images/image14.png", 
  "/src/images/image15.png", 

  // Add more photo paths as needed
];

export function Gallery() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <PageTitle title="Photo Gallery" />
      <div className="flex justify-center bg-black items-center  pt-24 pb-32">
        <Card className="w-full md:w-2/3 lg:w-1/2 overflow-hidden shadow-lg transition-all duration-300">
          <CardBody className="relative">
            <div className="w-full h-96 bg-white flex justify-center items-center">
              <img
                src={photos[currentPhotoIndex]}
                alt={`Gallery Photo ${currentPhotoIndex + 1}`}
                className="object-contain max-h-full max-w-full transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
              <button
                onClick={prevPhoto}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-70 transition-all"
              >
                &#8249;
              </button>
              <button
                onClick={nextPhoto}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-70 transition-all"
              >
                &#8250;
              </button>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative w-1/4 md:w-1/6 transition-transform transform hover:scale-105"
          >
            <img
              src={photo}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg cursor-pointer transition-transform duration-300"
              onClick={() => setCurrentPhotoIndex(index)}
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Gallery;