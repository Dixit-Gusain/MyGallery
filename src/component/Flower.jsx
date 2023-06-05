import React from "react";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { saveAs } from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Flower() {
  const myImgs = [
    {
      id: "1",
      url: "https://drive.google.com/uc?Export=view&id=1GtBnZ_plBGXc7UO7-HqJnW9D7NtnNNVJ",
    },
    {
      id: "2",
      url: "https://drive.google.com/uc?Export=view&id=1MCxmOxh00HIJwkXXOCGpile3lYgPZd_t",
    },
    {
      id: "3",
      url: "https://drive.google.com/uc?Export=view&id=1AuDRWG_HhOZ-T0ZC1anOtzbTVF4VhClc",
    },
    {
      id: "4",
      url: "https://drive.google.com/uc?Export=view&id=10pEm9Nr_7SVyDHbpSijLfdPNZTtUrchb",
    },
    {
      id: "6",
      url: "https://drive.google.com/uc?Export=view&id=1jrn9iMR7i-mJ9JMT3gkLFOoEJJkCj2GU",
    },
    {
      id: "5",
      url: "https://drive.google.com/uc?Export=view&id=1M_-CqrWT8S2uSjHv82lzmOPC-GCRyVIH",
    },
    {
      id: "7",
      url: "https://drive.google.com/uc?Export=view&id=1S2E-pU2jZMcr2yFk-l4TtQwAAUkOnYqv",
    },
    {
      id: "8",
      url: "https://drive.google.com/uc?Export=view&id=13XvchgNhcrT5V8u60OYP3nZ7UnAY0JDy",
    },
    {
      id: "9",
      url: "https://drive.google.com/uc?Export=view&id=18-_OIxk_PiOw6MhJd9RHttJZVpvo9g-W",
    },
    {
      id: "10",
      url: "https://drive.google.com/uc?Export=view&id=1VLHYDm0n3nP33FDrKL35XdZGddsUlRAQ",
    },
    {
      id: "11",
      url: "https://drive.google.com/uc?Export=view&id=1uFIpqKZOC2YsskhSqG-Mfwyvf7Fre_JK",
    },
    {
      id: "12",
      url: "https://drive.google.com/uc?Export=view&id=1XzLTdJ5iZ1yZ9zTDIAjVkDpUt2mou6jl",
    },
    {
      id: "13",
      url: "https://drive.google.com/uc?Export=view&id=1P4tL64NP4KzgnLDFdkWSKnG7SVj-c1ri",
    },
    {
      id: "14",
      url: "https://drive.google.com/uc?Export=view&id=1AqF7NVJY5JXW4cqTKc8ESyzf1xS1CsaO",
    },
    {
      id: "15",
      url: "https://drive.google.com/uc?Export=view&id=1DAcvVFjnAlhDbzzF4GrJzEi3noAe-IuT",
    },
    {
      id: "16",
      url: "https://drive.google.com/uc?Export=view&id=1k-jDpwEuI_QQQZCesQ29vDDiR3CDAfLx",
    },
  ];

  const [sideDiv, setSideDiv] = useState("side-div");
  const [mainDiv, setMainDiv] = useState("mydiv");
  const [flow, setflow] = useState(false);
  const [floimgsrc, setfloimgsrc] = useState("");
  const closeImg = () => {
    setflow(false);
    setMainDiv("mydiv");
    setSideDiv("side-div");
  };
  const getImg = (url) => {
    setfloimgsrc(url);
    setMainDiv("updated-main-div");
    setSideDiv("updated-side-div");
    setflow(true);
  };
  const getRandomImages = (count) => {
    const shuffledImages = [...myImgs];
    let currentIndex = shuffledImages.length;
    let temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = shuffledImages[currentIndex];
      shuffledImages[currentIndex] = shuffledImages[randomIndex];
      shuffledImages[randomIndex] = temporaryValue;
    }

    return shuffledImages.slice(0, count);
  };
  const renderedImages = getRandomImages(6);

  return (
    <>
      <div className="d-flex flex-row">
        <div className={mainDiv}>
          {myImgs.map((obj, index) => {
            return (
              <div
                className="mypics"
                key={index}
                onClick={() => getImg(obj.url)}
              >
                <img src={obj.url} alt=""></img>
              </div>
            );
          })}
        </div>
        <div className={sideDiv}>
          <div className={flow ? "name open" : "name"}>
            <img src={floimgsrc} alt="" />
            <CancelIcon className="myicon" onClick={closeImg} />
          </div>
          <button onClick={() => saveAs(floimgsrc)}>
            <FileDownloadIcon className="mx-2" />
            Dowload image in JPG
          </button>
          <div className="related-images d-flex flex-row mt-5">
            {renderedImages.map((obj, index) => {
              return (
                <div
                  className="mypics"
                  key={index}
                  onClick={() => getImg(obj.url)}
                >
                  <img src={obj.url} alt=""></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Flower;
