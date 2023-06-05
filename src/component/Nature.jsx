import React from "react";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { saveAs } from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Nature() {
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
      url: "https://drive.google.com/uc?Export=view&id=1QyRmcC_phVCn-CVpIGzZqJf3QgfJib4C",
    },
    {
      id: "4",
      url: "https://drive.google.com/uc?Export=view&id=1Qo_A5NxWoX4pJ8upUPIhQcbu84BumzIG",
    },
    {
      id: "6",
      url: "https://drive.google.com/uc?Export=view&id=1-uowOEZnKMzrLUTC5GKEWjA1s3eVO0ci",
    },
    {
      id: "5",
      url: "https://drive.google.com/uc?Export=view&id=1CXUfUmIyJs0CpSe_oocD__T180zGzxgm",
    },
    {
      id: "7",
      url: "https://drive.google.com/uc?Export=view&id=19I9mqD5fxi6TQoL9vZts3OdwvtWjUEvq",
    },
    {
      id: "8",
      url: "https://drive.google.com/uc?Export=view&id=17K95bVbJloz41LuT7Si1Et0zFwQJh_LE",
    },
    {
      id: "9",
      url: "https://drive.google.com/uc?Export=view&id=1XRWeGvzfiuQMXuYn8Fs9O2SfVkwlJQ33",
    },
    {
      id: "10",
      url: "https://drive.google.com/uc?Export=view&id=1KgDv45CDzJ8mfnkKiVIquuyfkdZnwbUn",
    },
    {
      id: "11",
      url: "https://drive.google.com/uc?Export=view&id=1EBgTlV9YV0bF2ZkDdfCrSwNAGe_loOnZ",
    },
    {
      id: "12",
      url: "https://drive.google.com/uc?Export=view&id=1514vlnKO5-LYBAFomsONd1Df0P72PAWM",
    },
    {
      id: "13",
      url: "https://drive.google.com/uc?Export=view&id=1YT9Mzfeo51k8xcb_tDO03lq2TVXxCegd",
    },
    {
      id: "14",
      url: "https://drive.google.com/uc?Export=view&id=1BHX2_oAqs03vEWsIfxdclNORdcuvVkXj",
    },
    {
      id: "15",
      url: "https://drive.google.com/uc?Export=view&id=1QbSvjmvVQoaeLqbz4OP4b8JpeBtFUmL4",
    },
    {
      id: "16",
      url: "https://drive.google.com/uc?Export=view&id=1QGVCsptcFA1fK84QZn9JAG18Iyzjy3u3",
    },

    {
      id: "17",
      url: "https://drive.google.com/uc?Export=view&id=1qrjQxxjZOcpPorJKrkp3HdJOZ8q_yyuc",
    },
    {
      id: "18",
      url: "https://drive.google.com/uc?Export=view&id=1mIgucOg4fQO0hjzvjmwDHbPG9I9wRIIL",
    },
    {
      id: "19",
      url: "https://drive.google.com/uc?Export=view&id=1gQFKCE5qxXtz-CMv64RY1NiX_jFivlST",
    },
    {
      id: "20",
      url: "https://drive.google.com/uc?Export=view&id=1dd4CWseQ2jwxXr2HzN461kJ5FOHwlNLA",
    },
    {
      id: "21",
      url: "https://drive.google.com/uc?Export=view&id=1z2JsJ-VF79TMtrifns1nFu8OVpVw30Xp",
    },
  ];
  const [sideDiv, setSideDiv] = useState("side-div");
  const [mainDiv, setMainDiv] = useState("mydiv");
  const [nt, setnet] = useState(false);
  const [ntimgsrc, setntimgsrc] = useState("");
  const closeImg = () => {
    setnet(false);
    setMainDiv("mydiv");
    setSideDiv("side-div");
  };
  const getImg = (url) => {
    setntimgsrc(url);
    setMainDiv("updated-main-div");
    setSideDiv("updated-side-div");
    setnet(true);
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
  const renderedImages = getRandomImages(10);

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
          <div className={nt ? "name open" : "name"}>
            <img src={ntimgsrc} alt="" />
            <CancelIcon className="myicon" onClick={closeImg} />
          </div>
          <button onClick={() => saveAs(ntimgsrc)}>
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

export default Nature;
