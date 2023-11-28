import * as React from "react"
import PingpongballIcon from "./SVGIcons/PingpongballIcon"
import BlokeyIcon from "./SVGIcons/BlokeyIcon"
import CanaryIcon from "./SVGIcons/CanaryIcon"
import WordpressIcon from "./SVGIcons/WordpressIcon"
import GoldlabelIcon from "./SVGIcons/GoldlabelOutlined"
import ChromeIcon from "./SVGIcons/devices/ChromeIcon"
import SafariIcon from "./SVGIcons/devices/SafariIcon"
import EdgeIcon from "./SVGIcons/devices/EdgeIcon"
import FirefoxIcon from "./SVGIcons/devices/FirefoxIcon"
import IphoneIcon from "./SVGIcons/devices/IphoneIcon"
import LinuxIcon from "./SVGIcons/devices/LinuxIcon"
import MacIcon from "./SVGIcons/devices/MacIcon"
import WindowsIcon from "./SVGIcons/devices/WindowsIcon"
import XboxIcon from "./SVGIcons/devices/XboxIcon"
import MembersIcon from "@mui/icons-material//SupervisedUserCircle"
import AndroidIcon from "@mui/icons-material/Android"
import CloseIcon from "@mui/icons-material/CloseOutlined"
import BugIcon from "@mui/icons-material/BugReportOutlined"
import GeolocatorIcon from "@mui/icons-material/Public"
import DesktopMacIcon from "@mui/icons-material/DesktopMacOutlined"
import DesktopIcon from "@mui/icons-material/DesktopWindowsOutlined"
import GithubIcon from "@mui/icons-material/GitHub"
import MobileIcon from "@mui/icons-material/PhoneAndroid"
import NotifyrIcon from "@mui/icons-material/MarkUnreadChatAlt"
import ResetIcon from "@mui/icons-material/Refresh"
import HomeIcon from "@mui/icons-material/HomeOutlined"
import NewsIcon from "@mui/icons-material/GradeOutlined"
import ExampleIcon from "@mui/icons-material/RocketLaunch"
import MedicalIcon from "@mui/icons-material/MedicalServicesOutlined"
import DarkmodeIcon from "@mui/icons-material/DarkModeOutlined"
import AccommodationIcon from "@mui/icons-material/Bed"
import LightModeIcon from "@mui/icons-material/LightModeOutlined"
import ActivitesIcon from "@mui/icons-material/DirectionsRun"
import DivingIcon from "@mui/icons-material/ScubaDiving"
import DiveshopIcon from "@mui/icons-material/RecommendOutlined"
import CancelIcon from "@mui/icons-material/CancelOutlined"
import SearchIcon from "@mui/icons-material/SearchOutlined"
import CategoryIcon from "@mui/icons-material/CategoryOutlined"
import WorkIcon from "@mui/icons-material/WorkHistoryOutlined"
import EditIcon from "@mui/icons-material/EditOutlined"
import LeafIcon from "@mui/icons-material/EnergySavingsLeafOutlined"
import ApiIcon from "@mui/icons-material/Code"
import TingsIcon from "@mui/icons-material/MarkUnreadChatAltOutlined"
import SignoutIcon from "@mui/icons-material/ExitToAppOutlined"
import DeleteIcon from "@mui/icons-material/DeleteOutline"
import SuccessIcon from "@mui/icons-material/Check"
import InfoIcon from "@mui/icons-material/HelpOutline"
import EmailIcon from "@mui/icons-material/EmailOutlined"
import SigninIcon from "@mui/icons-material/LoginOutlined"
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
import PingIcon from "@mui/icons-material/Fingerprint"
import FacebookIcon from "@mui/icons-material/FacebookOutlined"
import TwitterIcon from "@mui/icons-material/Twitter"
import WebIcon from "@mui/icons-material/Language"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ExpandIcon from "@mui/icons-material/MenuOpen"
import WhereIcon from "@mui/icons-material/LocationOnOutlined"
import TechstackIcon from "@mui/icons-material/CodeOutlined"
import FishIcon from "@mui/icons-material/Phishing"
import BackofficeIcon from "@mui/icons-material/SecurityOutlined"
import ShopIcon from "@mui/icons-material/ShoppingBasketOutlined"
import BarIcon from "@mui/icons-material/LocalBarOutlined"
import CarIcon from "@mui/icons-material/DirectionsCarOutlined"
import BoatIcon from "@mui/icons-material/DirectionsBoatOutlined"
import BusIcon from "@mui/icons-material/DirectionsBusOutlined"
import PoolIcon from "@mui/icons-material/PoolOutlined"
import DocIcon from "@mui/icons-material/ArticleOutlined"
import PluginIcon from "@mui/icons-material/ExtensionOutlined"
import LinguaIcon from "@mui/icons-material/TranslateOutlined"
import GoogleIcon from "@mui/icons-material/Google"

export type IconShape = {
  icon: "bug" | "canary" | "geolocator" | "google" | "lingua" | "plugin" | "doc" | "reset" | "accommodation" | "spy" | "seed" | "github" | "members" | "notifyer" | "notifyr" | "pingpong" | "close" | "bus" | "darkmode" | "lightmode" | "pool" | "boat" | "car" | "bar" | "shop" | "home" | "fish" | "mobile"| "blog" | "search" | "cancel" | "delete" | "techstack" | "backoffice" | "edit" | "example" | "goldlabel" | "wordpress" | "where" | "whatsapp" | "expand" | "web" | "twitter" | "facebook" | "ping" | "settings" | "email" | "share" | "leaf" | "star" | "food" | "medical" | "scooter" | "diveshop" | "diving" | "news" | "activities" | "left" | "down" | "up" | "right" | "menu" | "success" | "categories" | "category" | "tings" | "info" | "warning" | "error" | "signout" | "api" | "work" | "signin" | "blokey" | "android" | "chrome" | "desktop" | "desktopmac" | "edge" | "linux" | "windows" | "xbox" | "mac" | "iphone" | "safari" | "firefox"
  color?: any
}

export default function Icon({icon, color}: IconShape) {
  if (!color) color = "inherit"
  let iconFragment: JSX.Element = <React.Fragment />
  switch (icon) {
    case "home":
      iconFragment = <HomeIcon color={color} />
      break
    case "canary":
      iconFragment = <CanaryIcon color={color} />
      break 
    case "google":
      iconFragment = <GoogleIcon color={color} />
      break
    case "bug":
      iconFragment = <BugIcon color={color} />
      break
    case "lingua":
      iconFragment = <LinguaIcon color={color} />
      break
    case "plugin":
      iconFragment = <PluginIcon color={color} />
      break
    case "doc":
      iconFragment = <DocIcon color={color} />
      break
    case "reset":
      iconFragment = <ResetIcon color={color} />
      break
    case "github":
      iconFragment = <GithubIcon color={color} />
      break
    case "close":
      iconFragment = <CloseIcon color={color} />
      break
    case "geolocator":
      iconFragment = <GeolocatorIcon color={color} />
      break
    case "darkmode":
      iconFragment = <DarkmodeIcon color={color} />
      break
    case "lightmode":
      iconFragment = <LightModeIcon color={color} />
      break
    case "pool":
      iconFragment = <PoolIcon color={color} />
      break
    case "bus":
      iconFragment = <BusIcon color={color} />
      break
    case "boat":
      iconFragment = <BoatIcon color={color} />
      break
    case "bar":
      iconFragment = <BarIcon color={color} />
      break
    case "car":
      iconFragment = <CarIcon color={color} />
      break
    case "shop":
      iconFragment = <ShopIcon color={color} />
      break
    case "fish":
      iconFragment = <FishIcon color={color} />
      break
    case "mobile":
      iconFragment = <MobileIcon color={color} />
      break
    case "spy":
      iconFragment = <SpyIcon color={color} />
      break
    case "seed":
      iconFragment = <SpyIcon color={color} />
      break
    case "blog":
      iconFragment = <NewsIcon color={color} />
      break
    case "accommodation":
      iconFragment = <AccommodationIcon color={color} />
      break
    case "search":
      iconFragment = <SearchIcon color={color} />
      break
    case "cancel":
      iconFragment = <CancelIcon color={color} />
      break
    case "delete":
      iconFragment = <DeleteIcon color={color} />
      break
    case "techstack":
      iconFragment = <TechstackIcon color={color} />
      break
    case "backoffice":
      iconFragment = <BackofficeIcon color={color} />
      break
    case "edit":
      iconFragment = <EditIcon color={color} />
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
    case "ping":
      iconFragment = <PingIcon color={color} />
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
    case "signout":
      iconFragment = <SignoutIcon color={color} />
      break
    case "api":
      iconFragment = <ApiIcon color={color} />
      break
    case "work":
      iconFragment = <WorkIcon color={color} />
      break
    case "signin":
      iconFragment = <SigninIcon color={color} />
      break
    case "blokey":
      iconFragment = <BlokeyIcon color={color} />
      break
    case "android":
      iconFragment = <AndroidIcon color={color} />
      break
    case "chrome":
      iconFragment = <ChromeIcon color={color} />
      break
    case "desktop":
      iconFragment = <DesktopIcon color={color} />
      break
    case "desktopmac":
      iconFragment = <DesktopMacIcon color={color} />
      break
    case "edge":
      iconFragment = <EdgeIcon color={color} />
      break
    case "firefox":
      iconFragment = <FirefoxIcon color={color} />
      break
    case "safari":
      iconFragment = <SafariIcon color={color} />
      break
    case "iphone":
      iconFragment = <IphoneIcon color={color} />
      break
    case "mac":
      iconFragment = <MacIcon color={color} />
      break
    case "xbox":
      iconFragment = <XboxIcon color={color} />
      break
    case "windows":
      iconFragment = <WindowsIcon color={color} />
      break
    case "linux":
      iconFragment = <LinuxIcon color={color} />
      break
    case "pingpong":
      iconFragment = <PingpongballIcon color={color} />
      break
    case "members":
      iconFragment = <MembersIcon color={color} />
      break
    case "notifyer":
      iconFragment = <NotifyrIcon color={color} />
      break
    case "notifyr":
      iconFragment = <NotifyrIcon color={color} />
      break
    default:
      iconFragment = <ErrorIcon color={"warning"} />
  }  
  return <>{iconFragment}</>
}
