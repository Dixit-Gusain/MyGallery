import React from "react";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { saveAs } from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Night() {
  const myImgs = [
    {
      id: "1",
      url: "https://drive.google.com/uc?Export=view&id=1ojCSU9xqsvxFOp0AJiVdha9kvXF1PGG9",
    },
    {
      id: "2",
      url: "https://drive.google.com/uc?Export=view&id=11k9KNrZZyQ0YfnVi0SsscRWy0lAOx13I",
    },
    {
      id: "3",
      url: "https://drive.google.com/uc?Export=view&id=1Ay72KzmDCxHS8zdHA6nF3DYUZWtNqNEu",
    },
    {
      id: "4",
      url: "https://drive.google.com/uc?Export=view&id=1de2-xzgEeh75xHAsI-f8bs6eukNx7F4d",
    },
    {
      id: "6",
      url: "https://drive.google.com/uc?Export=view&id=1G9kncICwhIr94l2hF8PCTXN1ZgpPOCDK",
    },
    {
      id: "5",
      url: "https://drive.google.com/uc?Export=view&id=1U008IQkqDU3A2XxV5_09-8JGpqJXaVhN",
    },
    {
      id: "7",
      url: "https://drive.google.com/uc?Export=view&id=17Dg_S1v_DvLORK4wKfdZkqh7ir0gIecj",
    },
    {
      id: "8",
      url: "https://drive.google.com/uc?Export=view&id=1UWNCeuP4KfbmQbKTO3vXiHvSp_tL4rUX",
    },
    {
      id: "9",
      url: "https://drive.google.com/uc?Export=view&id=1estD6ZGVAKntiwihk3Nedvn8jkIuJ_-0",
    },

    {
      id: "10",
      url: "https://drive.google.com/uc?Export=view&id=1HaovYOaimS9YO3fd2xSKKohmcmDDnoYB",
    },
    {
      id: "11",
      url: "https://drive.google.com/uc?Export=view&id=1U4z1wFQu5TpH9ga6KOtLS2QBevME2yh8",
    },
  ];
  const [sideDiv, setSideDiv] = useState("side-div");
  const [mainDiv, setMainDiv] = useState("mydiv");
  const [night, setnight] = useState(false);
  const [nightimgsrc, setnightimgsrc] = useState("");
  const closeImg = () => {
    setnight(false);
    setMainDiv("mydiv");
    setSideDiv("side-div");
  };
  const getImg = (url) => {
    setnightimgsrc(url);
    setMainDiv("updated-main-div");
    setSideDiv("updated-side-div");
    setnight(true);
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
          <div className={night ? "name open" : "name"}>
            <img src={nightimgsrc} alt="" />
            <CancelIcon className="myicon" onClick={closeImg} />
          </div>
          <button onClick={() => saveAs(nightimgsrc)}>
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

export default Night;
