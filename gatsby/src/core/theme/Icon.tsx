import * as React from "react"
import BlokeyIcon from "./SVGIcons/BlokeyIcon"
import WordpressIcon from "./SVGIcons/WordpressIcon"
import GoldlabelIcon from "./SVGIcons/GoldlabelOutlined"
import HomeIcon from "@mui/icons-material/HomeOutlined"
import NewsIcon from "@mui/icons-material/AttachFile"
import ExampleIcon from "@mui/icons-material/RocketLaunch"
import MedicalIcon from "@mui/icons-material/MedicalServicesOutlined"
import ActivitesIcon from "@mui/icons-material/DirectionsRun"
import DivingIcon from "@mui/icons-material/ScubaDiving"
import DiveshopIcon from "@mui/icons-material/RecommendOutlined"
import CategoryIcon from "@mui/icons-material/CategoryOutlined"
import DefaultIcon from "@mui/icons-material/DisabledByDefault"
import LeafIcon from "@mui/icons-material/EnergySavingsLeafOutlined"
import ApiIcon from "@mui/icons-material/Code"
import SuccessIcon from "@mui/icons-material/Check"
import InfoIcon from "@mui/icons-material/Help"
import EmailIcon from "@mui/icons-material/EmailOutlined"
import SpyIcon from "@mui/icons-material/RemoveRedEye"
import ShareIcon from "@mui/icons-material/Share"
import WarningIcon from "@mui/icons-material/Warning"
import ErrorIcon from "@mui/icons-material/Error"
import MenuIcon from "@mui/icons-material/MenuOutlined"
import LeftIcon from "@mui/icons-material/ArrowBackOutlined"
import UpIcon from "@mui/icons-material/ArrowUpwardOutlined"
import RightIcon from "@mui/icons-material/ArrowForwardOutlined"
import DownIcon from "@mui/icons-material/ArrowDownwardOutlined"
import ScooterIcon from "@mui/icons-material/Moped"
import FoodIcon from "@mui/icons-material/Restaurant"
import StarIcon from "@mui/icons-material/StarOutlined"
import SettingsIcon from "@mui/icons-material/SettingsOutlined"
import TingIcon from "@mui/icons-material/Fingerprint"
import FacebookIcon from "@mui/icons-material/FacebookOutlined"
import TwitterIcon from "@mui/icons-material/Twitter"
import WebIcon from "@mui/icons-material/Language"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ExpandIcon from "@mui/icons-material/MenuOpen"
import WhereIcon from "@mui/icons-material/LocationOnOutlined"
import TechstackIcon from "@mui/icons-material/CodeOutlined"
import BlogIcon from "@mui/icons-material/NewspaperOutlined"
import FishIcon from "@mui/icons-material/Phishing"

export default function Icon(props: any) {
  let { icon, color } = props
  if (!color) color = "inherit"
  let iconFragment: JSX.Element = <React.Fragment />
  switch (icon) {
    case "home":
      iconFragment = <HomeIcon color={color} />
      break
    case "fish":
      iconFragment = <FishIcon color={color} />
      break
    case "spy":
      iconFragment = <SpyIcon color={color} />
      break
    case "blog":
      iconFragment = <BlogIcon color={color} />
      break
    case "techstack":
      iconFragment = <TechstackIcon color={color} />
      break
    case "example":
      iconFragment = <ExampleIcon color={color} />
      break
    case "goldlabel":
      iconFragment = <GoldlabelIcon color={color} />
      break
    case "wordpress":
      iconFragment = <WordpressIcon color={color} />
      break
    case "where":
      iconFragment = <WhereIcon color={color} />
      break
    case "whatsapp":
      iconFragment = <WhatsAppIcon color={color} />
      break
    case "expand":
      iconFragment = <ExpandIcon color={color} />
      break
    case "web":
      iconFragment = <WebIcon color={color} />
      break
    case "twitter":
      iconFragment = <TwitterIcon color={color} />
      break
    case "facebook":
      iconFragment = <FacebookIcon color={color} />
      break
    case "ting":
      iconFragment = <TingIcon color={color} />
      break
    case "settings":
      iconFragment = <SettingsIcon color={color} />
      break
    case "email":
      iconFragment = <EmailIcon color={color} />
      break
    case "share":
      iconFragment = <ShareIcon color={color} />
      break
    case "leaf":
      iconFragment = <LeafIcon color={color} />
      break
    case "star":
      iconFragment = <StarIcon color={color} />
      break
    case "food":
      iconFragment = <FoodIcon color={color} />
      break
    case "medical":
      iconFragment = <MedicalIcon color={color} />
      break
    case "scooter":
      iconFragment = <ScooterIcon color={color} />
      break
    case "diveshop":
      iconFragment = <DiveshopIcon color={color} />
      break
    case "diving":
      iconFragment = <DivingIcon color={color} />
      break
    case "news":
      iconFragment = <NewsIcon color={color} />
      break
    case "activities":
      iconFragment = <ActivitesIcon color={color} />
      break
    case "left":
      iconFragment = <LeftIcon color={color} />
      break
    case "down":
      iconFragment = <DownIcon color={color} />
      break
    case "up":
      iconFragment = <UpIcon color={color} />
      break
    case "right":
      iconFragment = <RightIcon color={color} />
      break
    case "menu":
      iconFragment = <MenuIcon color={color} />
      break
    case "success":
      iconFragment = <SuccessIcon color={color} />
      break
    case "categories":
      iconFragment = <CategoryIcon color={color} />
      break
    case "category":
      iconFragment = <CategoryIcon color={color} />
      break
    case "info":
      iconFragment = <InfoIcon color={color} />
      break
    case "warning":
      iconFragment = <WarningIcon color={color} />
      break
    case "error":
      iconFragment = <ErrorIcon color={color} />
      break
    case "api":
      iconFragment = <ApiIcon color={color} />
      break
    case "blokey":
      iconFragment = <BlokeyIcon color={color} />
      break
    default:
      iconFragment = <DefaultIcon color="error" />
  }
  
  return <>{iconFragment}</>
}
