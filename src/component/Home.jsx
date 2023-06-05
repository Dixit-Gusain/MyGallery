import React, { useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import CancelIcon from "@mui/icons-material/Cancel";
import NavBar from "./NavBar";
import { saveAs } from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Home() {
  const myImgs = [
    {
      id: "1",
      url: "https://drive.google.com/uc?Export=view&id=175VWNCqv45VnO7HD6BHoS2UMth81AgFk",
    },
    {
      id: "2",
      url: "https://drive.google.com/uc?Export=view&id=1iUcHy6oFINHH_QYMdAJfe9kmupnyHBqN",
    },
    {
      id: "3",
      url: "https://drive.google.com/uc?Export=view&id=1oQOzjIKokOs96Hc4D0-6j9WoJ58m3PI3",
    },
    {
      id: "4",
      url: "https://drive.google.com/uc?Export=view&id=1M5dRrAFAojGwOdOi2GzkowBMyVo_B_N7",
    },
    {
      id: "5",
      url: "https://drive.google.com/uc?Export=view&id=1VS-oqkiiwfDPNXS0MVmZdJPnT5q_yaOr",
    },
    {
      id: "6",
      url: "https://drive.google.com/uc?Export=view&id=1lUhqBbanF5G7Tu-bO0sW8Z2TGdU_Wwn5",
    },
    {
      id: "7",
      url: "https://drive.google.com/uc?Export=view&id=16wazpERcfA9dbaB3WMHhnhqAfCmDn-HI",
    },
    {
      id: "8",
      url: "https://drive.google.com/uc?Export=view&id=1x0g7dvgQu3dkBf9g4t1Npmyxq9A4fgmI",
    },
    {
      id: "9",
      url: "https://drive.google.com/uc?Export=view&id=1GCBqu5hhtm8o2VFFH8DlogmWbU7jqiOx",
    },
    {
      id: "10",
      url: "https://drive.google.com/uc?Export=view&id=1Y6mtqMcdb73O1R3RDmC5mVj5OSUsaaOG ",
    },
    {
      id: "11",
      url: "https://drive.google.com/uc?Export=view&id=1-AyWSAyY6otpH7wIjAHTnoGYpc1AVm03",
    },
    {
      id: "12",
      url: "https://drive.google.com/uc?Export=view&id=1ZFQnjeIAOxeqX3ZpvG5WgYzAu5tcedBK",
    },
    {
      id: "13",
      url: "https://drive.google.com/uc?Export=view&id=1Zu5PNYKVCMnL1dlfWLVAXGhCKl31V64Z",
    },
    {
      id: "14",
      url: "https://drive.google.com/uc?Export=view&id=1y7zN0a4qUuH0AxqIPhS1GQlRflR-_QP9",
    },
    {
      id: "15",
      url: "https://drive.google.com/uc?Export=view&id=1yDacZBOGKPbazuWg69OTu9irC_k54p6l",
    },
    {
      id: "16",
      url: "https://drive.google.com/uc?Export=view&id=1gIYjjvDPZO0YP5fCl8HuP80DvOR_gVpo",
    },

    {
      id: "17",
      url: "https://drive.google.com/uc?Export=view&id=1RBGfebsBIG3BByfuaePRkuK1t7awgNKu",
    },
    {
      id: "18",
      url: "https://drive.google.com/uc?Export=view&id=1kYOvC8NFwBKMj4g7x7bOBW518nYr7-Mp",
    },
    {
      id: "19",
      url: "https://drive.google.com/uc?Export=view&id=1VROwaHmdZQwi_V6FVHqLULOU-XBe_MXH",
    },
    {
      id: "20",
      url: "https://drive.google.com/uc?Export=view&id=1ZsMTWhf74T0qGymfCgzcHS2R--l-jEiV",
    },
    {
      id: "21",
      url: "https://drive.google.com/uc?Export=view&id=1UCLhYtVrhSHe_TEK0VzzDd1kVTVKmww6",
    },
    {
      id: "22",
      url: "https://drive.google.com/uc?Export=view&id=1y2FKyMnAOq-iSkZIy_yyyVnSylyyk4_8",
    },
    {
      id: "23",
      url: "https://drive.google.com/uc?Export=view&id=1oQOzjIKokOs96Hc4D0-6j9WoJ58m3PI3",
    },
    {
      id: "24",
      url: "https://drive.google.com/uc?Export=view&id=1yQKq8SWyuuIfzseMl860EoWtOo6hCu5u",
    },
    {
      id: "25",
      url: "https://drive.google.com/uc?Export=view&id=1m5WoCQ4CixxFstivgwqA_jYvuCpLM7T8",
    },
    {
      id: "26",
      url: "https://drive.google.com/uc?Export=view&id=1IgpPAWQ_QQMqUSRbmgzp2a3yu3WXiISR",
    },
    {
      id: "27",
      url: "https://drive.google.com/uc?Export=view&id=1xxtQo0GYHP5W1uCW1Jij0wXHxPZeTg2D",
    },
  ];
  const [sideDiv, setSideDiv] = useState("side-div");
  const [mainDiv, setMainDiv] = useState("mydiv");
  const [name, setname] = useState(false);
  const [imgsrc, setimgsrc] = useState("");
  const closeImg = () => {
    setname(false);
    setMainDiv("mydiv");
    setSideDiv("side-div");
  };
  const getImg = (url) => {
    setimgsrc(url);
    setMainDiv("updated-main-div");
    setSideDiv("updated-side-div");
    setname(true);
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
          <div className={name ? "name open" : "name"}>
            <img src={imgsrc} alt="" />
            <CancelIcon className="myicon" onClick={closeImg} />
          </div>
          <button onClick={() => saveAs(imgsrc)}>
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

export default Home;
