import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <>
      <div className="container-fluid" id="myfooter">
        <div className="px-5 text-center">
          <h4>Contect me</h4>
          <a
            href="https://instagram.com/dixit_gusain?igshid=YmMyMTA2M2Y="
            target="_blank"
            id="insta"
          >
            <InstagramIcon />
          </a>
          <a href="https://github.com/Dixit-Gusain" target="_blank" id="git">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/dixit-gusain-3086951a9"
            target="_blank"
            id="Linkdin"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:dixitgusain555@gmail.com" target="_blank" id="mail">
            <EmailIcon />
          </a>
          <a
            href="https://twitter.com/Beast_Dixu1123?t=yRWi0lx2HXrXRBw_ADwdvQ&s=09"
            target="_blank"
            id="twt"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
