import React from "react";
import "./Image.css";
import bun1 from "../../../../../svgs/bun/1.svg";
import bun2 from "../../../../../svgs/bun/2.svg";
import bun3 from "../../../../../svgs/bun/3.svg";
import bun4 from "../../../../../svgs/bun/4.svg";
import bun5 from "../../../../../svgs/bun/5.svg";
import plate1 from "../../../../../svgs/plate/1.svg";
import plate2 from "../../../../../svgs/plate/2.svg";
import plate3 from "../../../../../svgs/plate/3.svg";
import plate4 from "../../../../../svgs/plate/4.svg";
import plate5 from "../../../../../svgs/plate/5.svg";
import patty1 from "../../../../../svgs/patty/1.svg";
import patty2 from "../../../../../svgs/patty/2.svg";
import patty3 from "../../../../../svgs/patty/3.svg";
import patty4 from "../../../../../svgs/patty/4.svg";
import patty5 from "../../../../../svgs/patty/5.svg";

const Image = (props) => {
  if (props.image === "bun") {
    switch (props.num) {
      case "2":
        return <img className="image" src={bun2} alt="" />;
        break;
      case "3":
        return <img className="image" src={bun3} alt="" />;
        break;
      case "4":
        return <img className="image" src={bun4} alt="" />;
        break;
      case "5":
        return <img className="image" src={bun5} alt="" />;
        break;
      default:
        return <img className="image" src={bun1} alt="" />;
    }
  } else if (props.image === "plate") {
    switch (props.num) {
      case "2":
        return <img className="image" src={plate2} alt="" />;
        break;
      case "3":
        return <img className="image" src={plate3} alt="" />;
        break;
      case "4":
        return <img className="image" src={plate4} alt="" />;
        break;
      case "5":
        return <img className="image" src={plate5} alt="" />;
        break;
      default:
        return <img className="image" src={plate1} alt="" />;
    }
  } else if (props.image === "patty") {
    switch (props.num) {
      case "2":
        return <img className="image" src={patty2} alt="" />;
        break;
      case "3":
        return <img className="image" src={patty3} alt="" />;
        break;
      case "4":
        return <img className="image" src={patty4} alt="" />;
        break;
      case "5":
        return <img className="image" src={patty5} alt="" />;
        break;
      default:
        return <img className="image" src={patty1} alt="" />;
    }
  }
};
export default Image;
