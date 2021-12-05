import halfPeople from "../images/halfPeople.png";
import store from "../images/store.png";
import shoppingNonResponsive from "../images/shoppingNonResponsive.png";
import bootstrap from "../images/bootstrap.png";
import covidToday from "../images/covid-today.png";

interface PerformanceProps {
  id: string;
  name: string;
  responsive: string;
  tools: string[];
  link: string;
  pic?: string;
}

export const Performance: PerformanceProps[] = [
  {
    id: "01",
    name: "เว็ปไซต์คนละครึ่ง",
    responsive: "y",
    tools: [
      "React",
      "mobx",
      "mobx-react",
      "material-ui",
      "framer-motion",
      "react-icons",
      "axios",
    ],
    link: "https://github.com/nutthanonn/half-people-2020",
    pic: halfPeople,
  },
  {
    id: "02",
    name: "React Store",
    responsive: "y",
    tools: [
      "React",
      "mobx",
      "mobx-react",
      "material-ui",
      "framer-motion",
      "react-icons",
      "react-intersection-observer",
    ],
    link: "https://github.com/nutthanonn/react-typescript",
    pic: store,
  },
  {
    id: "03",
    name: "Bootstrap performance",
    responsive: "n",
    tools: ["Bootstrap"],
    link: "https://github.com/nutthanonn/bootstrap",
    pic: bootstrap,
  },
  {
    id: "04",
    name: "React Ecommerce(simple)",
    responsive: "n",
    tools: [
      "React",
      "mobx",
      "mobx-react",
      "material-ui",
      "framer-motion",
      "react-icons",
    ],
    link: "https://github.com/nutthanonn/react-ts-ecommerce",
    pic: shoppingNonResponsive,
  },
  {
    id: "05",
    name: "Covid19 Today",
    responsive: "n",
    tools: [
      "React",
      "mobx",
      "mobx-react",
      "material-ui",
      "framer-motion",
      "react-icons",
      "axios",
      "momentjs",
      "react-countup",
    ],
    link: "https://github.com/nutthanonn/react-covid19-realtime",
    pic: covidToday,
  },
];