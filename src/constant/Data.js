// importing reasons Icons
import VectorHeadPhone from "./../assets/reasonsData/VectorHeadPhone.svg";
import iconDesignTool from "./../assets/reasonsData/iconDesignTool.svg";
// importing services icon
import ArchitectureIcon from "./../assets/servicesData/ArchitectureIcon.svg";
import ConstructionIcon from "./../assets/servicesData/ConstructionIcon.svg";
import ConsultationIcon from "./../assets/servicesData/ConsultationIcon.svg";
import ElectricIcon from "./../assets/servicesData/ElectricIcon.svg";
import RenovationIcon from "./../assets/servicesData/RenovationIcon.svg";
import RepairIcon from "./../assets/servicesData/RepairIcon.svg";

// importing projects data
import mrParkinStoneHouse from "./../assets/projectsData/mrParkinStoneHouse.png";
import oreganoHeight from "./../assets/projectsData/oreganoHeight.png";
import wildStoneInfraHotel from "./../assets/projectsData/wildStoneInfraHotel.png";
import wishStoneBuilding from "./../assets/projectsData/wishStoneBuilding.png";
// NavLink Constant Data
export const navLinks = [
  "Home",
  "About Us",
  "Projects",
  "Services",
  "Contact Us",
];
// Reasons Portion Constant Data
export const reasonsData = [
  {
    icon: VectorHeadPhone,
    heading: "Best Services",
    description:
      "We not only provide best services but also have a positive attitude towards our customers.",
  },
  {
    icon: VectorHeadPhone,
    heading: "Best Teams",
    description:
      "We have best teams which is focus on goals and also consist of great leaders.",
  },
  {
    icon: iconDesignTool,
    heading: "Best Designs",
    description:
      "We provide best designs which are not only beautiful but also well made and socially beneficial.",
  },
];
// Services Portion Constant Data
export const servicesData = [
  { icon: ConstructionIcon, text: "Construction" },
  {
    icon: RenovationIcon,
    text: "Renovation",
  },
  {
    icon: ConsultationIcon,
    text: "Consultation",
  },
  {
    icon: RepairIcon,
    text: "Repair Services",
  },
  {
    icon: ArchitectureIcon,
    text: "Architecture",
  },
  {
    icon: ElectricIcon,
    text: "Electric",
  },
];
// Projects Nav Link
export const projectNavlinkData = [
  { title: "All" },
  { title: "Commercial" },
  { title: "Residential" },
  { title: "Other" },
];
// Projects Cards Data
export const projectsCardData = [
  {
    img: wildStoneInfraHotel,
    buildingName: "Wild Stone Infra Hotel",
    buildingAddress: "2715 Ash Dr. San Jose, South Dakota",
  },
  {
    img: wishStoneBuilding,
    buildingName: "Wish Stone Building",
    buildingAddress: "2972 Westheimer Rd. Santa Ana, Illinois",
  },
  {
    img: mrParkinStoneHouse,
    buildingName: "Mr.Parkin Stone House",
    buildingAddress: "3517 W. Gray St. Utica, Pennsylvania",
  },
  {
    img: oreganoHeight,
    buildingName: "Oregano Height",
    buildingAddress: "2464 Royal Ln. Mesa, New Jersey",
  },
];
