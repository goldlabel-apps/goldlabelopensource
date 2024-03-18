// Main
import App from "./App"
import PWA from "../goldlabel/PWA"
// SEO
import {SEO} from "../goldlabel/components/SEO/SEO"
import {BackofficeSEO} from "../goldlabel/components/SEO/BackofficeSEO"
import {ChatGPTSEO} from "../goldlabel/components/SEO/ChatGPTSEO"
import {GoldlabelSEO} from "../goldlabel/components/SEO/GoldlabelSEO"
import {KeywordSEO} from "../goldlabel/components/SEO/KeywordSEO"
// Auth
import {Auth} from "./Auth"
import {firebaseSignin} from "./state/actions/auth/firebaseSignin"
import {firebaseSignout} from "./state/actions/auth/firebaseSignout"
import {setDisplay} from "./state/actions/setDisplay"
import {setCoreKey} from "./state/actions/setCoreKey"
import {resetLocalstorage} from "./state/actions/resetLocalstorage"
// State
import {WrapState} from "./state/WrapState"
import {namesByLetter} from "./algorithms/namesByLetter"
import {store, persistor} from "./state/store"
import {
    setPwaKey,
    selectBootTime,
    selectConfig,
    selectCore,
    selectNotifyer,
    selectDisplay,
    selectFrontmatter,
    selectAuth,
    selectFingerprint,
    selectTheme,
    selectFlash,
    selectGeo,
    selectOutput,
} from "./state/reducer"
// Theme
import Theme from "../goldlabel/theme/Theme"
import {Font} from "../goldlabel/theme/Font"
import Icon from "../goldlabel/theme/Icon"
// Hooks
import {useSiteMetadata} from "./hooks/useSiteMetadata"
import {useAllMarkdown} from "./hooks/useAllMarkdown"
import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {usePwaSelect} from "./hooks/usePwaSelect"
import {useCategories} from "./hooks/useCategories"
import {useChildren} from "./hooks/useChildren"
import {useSiblings} from "./hooks/useSiblings"
import {useDisplay} from "./hooks/useDisplay"
import {useParent} from "./hooks/useParent"
import {getIsElementInView} from "./hooks/getIsElementInView"
// Forms
import {FormButton} from "./components/Inputs/FormButton"
import {FormIconButton} from "./components/Inputs/FormIconButton"
import {InputString} from "./components/Inputs/InputString"
import {InputCheckbox} from "./components/Inputs/InputCheckbox"
import {InputEmail} from "./components/Inputs/InputEmail"
import {InputPassword} from "./components/Inputs/InputPassword"
// Actions
import {boot} from "./state/actions/boot"
import {notify} from "./state/actions/notify/notify"
import {notifyCancel} from "./state/actions/notify/notifyCancel"
import {setFrontmatter} from "./state/actions/setFrontmatter"
import {navigate} from "./state/actions/navigate"
import {toggleFSDialog} from "./state/actions/toggleFSDialog"
import {scrollTo} from "./state/actions/scrollTo"
// Listings
import Markdown from "./components/Listings/Markdown"
import CatNav from "./components/Listings/CatNav"
import Meta from "./components/Listings/Meta"
import Categories from "../goldlabel/components/Listings/Categories"
import Children from "../goldlabel/components/Listings/Children"
import Siblings from "../goldlabel/components/Listings/Siblings"
import Image from "./components/Listings/Image"
import ResetBtn from "./components/Listings/ResetBtn"
import HomeHero from "./components/Listings/HomeHero"
import ContentCard from "./components/Listings/ContentCard"
// Auth
import {AuthedDialog} from "./components/Auth/AuthedDialog"
import {Signin} from "./components/Auth/Signin"
import {Signup} from "./components/Auth/Signup"
import {MembersOnly} from "./components/Auth/MembersOnly"
import {PasswordOnly} from "./components/Auth/PasswordOnly"
// System
import MultiSelect from "./components/System/MultiSelect"
import DarkmodeToggle from "./components/System/DarkmodeToggle"
import NotifyerSnack from "./components/System/NotifyerSnack"
import ScrollUp from "./components/System/ScrollUp"
import ShareMenu from "./components/System/ShareMenu"
import NotFound from "./components/System/NotFound"
import WindowResizeListener from "./components/System/WindowResizeListener"
import {Device} from "./components/System/Device"
import Pricing from "./components/System/Pricing"
// Nav
import NavDialog from "./components/Nav/NavDialog"
import Navigator from "./components/Nav/Navigator"
import Goldlabel from "./components/Nav/Goldlabel"
import SystemMenu from "./components/Nav/SystemMenu"
import PopupMenu from "./components/Nav/PopupMenu"
import BottomBar from "./components/Nav/BottomBar"
import {Keywords} from "./components/Nav/Keywords"
// Layout
import Mobile from "./components/Layout/Mobile"
import Desktop from "./components/Layout/Desktop"
import ControlBar from "./components/Layout/ControlBar"
import Keyword from "./components/Layout/Keyword"
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
// Algorithms
import {randomDisplayName} from "./algorithms/randomDisplayName"
// App
export {
    PWA,
    App,
    SEO,
    BackofficeSEO,
    ChatGPTSEO,
    GoldlabelSEO,
    KeywordSEO,
}

export {
    randomDisplayName,
}

export {
    Mobile,
    Desktop,
    ControlBar,
    Keyword,
    Header,
}

// Navigator
export {
    Navigator,
    PopupMenu,
    Goldlabel,
    NavDialog,
}

// System
export {
    DarkmodeToggle,
    MultiSelect,
    NotifyerSnack,
    selectNotifyer,
    ScrollUp,
    WindowResizeListener,
    NotFound,
    SystemMenu,
    BottomBar,
    Device,
    Pricing,
    Footer,
}
// Listings & Nav
export {
    Keywords,
    CatNav,
    Markdown,
    Meta,
    ShareMenu,
    Categories,
    Children,
    Siblings,
    Image,
    ResetBtn,
    HomeHero,
    ContentCard,
}
// Auth
export {
    Auth,
    AuthedDialog,
    Signin,
    Signup,
    MembersOnly,
    PasswordOnly,
}


// Hooks
export {
    useSiteMetadata,
    useAllMarkdown,
    usePwaDispatch,
    usePwaSelect,
    useCategories,
    useChildren,
    useSiblings,
    useDisplay,
    useParent,
    getIsElementInView,
}
// Theme
export {
    Theme,
    Font,
    Icon,
}
// Forms
export {
    FormButton,
    FormIconButton,
    InputString,
    InputEmail,
    InputPassword,
    InputCheckbox,
}
// State
export {
    store,
    persistor,
    setPwaKey,
    namesByLetter,
    WrapState,
    selectBootTime,
    selectConfig,
    selectCore,
    selectDisplay,
    selectFrontmatter,
    selectAuth,
    selectFingerprint,
    selectTheme,
    selectFlash,
    selectGeo,
    selectOutput,
}
// Actions
export {
    boot,
    scrollTo,
    notify,
    notifyCancel,
    setFrontmatter,
    navigate,
    toggleFSDialog,
    firebaseSignin,
    firebaseSignout,
    setDisplay,
    setCoreKey,
    resetLocalstorage,
}
