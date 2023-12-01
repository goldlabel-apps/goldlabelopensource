// Main
import {SEO} from "../core/SEO"
import {BackofficeSEO} from "../core/components/SEO/BackofficeSEO"
import PWA from "../core/PWA"
import App from "./App"
import {Auth} from "./Auth"
import {
    Pingpong,
    PingPublic,
} from "../plugins/Pingpong"
import {firebaseSignin} from "./actions/auth/firebaseSignin"
import {firebaseSignout} from "./actions/auth/firebaseSignout"
import {setDisplay} from "./actions/setDisplay"
import {setCoreKey} from "./actions/setCoreKey"
import {resetLocalstorage} from "./actions/resetLocalstorage"
// State
import {WrapState} from "./state/WrapState"
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
    selectPingpong,
    selectBackoffice,
} from "./state/reducer"
// Theme
import Theme from "../core/theme/Theme"
import {Font} from "../core/theme/Font"
import Icon from "../core/theme/Icon"

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
// Translation
import {
    translations,
    getTranslation,
} from "./state/translation"
import Debugger from "./components/Debugger"
// Forms
import {FormButton} from "./components/Inputs/FormButton"
import {FormIconButton} from "./components/Inputs/FormIconButton"
import {InputString} from "./components/Inputs/InputString"
import {InputCheckbox} from "./components/Inputs/InputCheckbox"
import {InputEmail} from "./components/Inputs/InputEmail"
import {InputPassword} from "./components/Inputs/InputPassword"
// Actions
import {boot} from "./actions/boot"
import {notify} from "./actions/notify/notify"
import {notifyCancel} from "./actions/notify/notifyCancel"
import {setFrontmatter} from "./actions/setFrontmatter"
import {navigate} from "./actions/navigate"
import {toggleFSDialog} from "./actions/toggleFSDialog"
import {scrollTo} from "./actions/scrollTo"
// Listings
import Markdown from "./components/Listings/Markdown"
import CatNav from "./components/Listings/CatNav"
import Meta from "./components/Listings/Meta"
import ShareMenu from "./components/Listings/ShareMenu"
import ListingMobile from "./components/Listings/ListingMobile"
import ListingDesktop from "./components/Listings/ListingDesktop"
import Categories from "../core/components/Listings/Categories"
import Children from "../core/components/Listings/Children"
import Siblings from "../core/components/Listings/Siblings"
import Image from "./components/Listings/Image"
import TitleMobile from "./components/Listings/TitleMobile"

// Auth
import {AuthedDialog} from "./components/Auth/AuthedDialog"
import {Signin} from "./components/Auth/Signin"
import {Signup} from "./components/Auth/Signup"
import {AccountMenu} from "./components/Auth/AccountMenu"
import {MembersOnly} from "./components/Auth/MembersOnly"

// System
import MultiSelect from "./components/System/MultiSelect"
import DarkmodeToggle from "./components/System/DarkmodeToggle"
import NotifyerSnack from "./components/System/NotifyerSnack"
import PopupMenu from "./components/System/PopupMenu"
import ScrollUp from "./components/System/ScrollUp"
import SystemMenu from "./components/System/SystemMenu"
import NotFound from "./components/System/NotFound"
import WindowResizeListener from "./components/System/WindowResizeListener"
import BottomBar from "./components/System/BottomBar"
import {Device} from "./components/System/Device"

///////////////////
// System
export {
    Debugger,
    DarkmodeToggle,
    MultiSelect,
    NotifyerSnack,
    selectNotifyer,
    PopupMenu,
    ScrollUp,
    WindowResizeListener,
    NotFound,
    SystemMenu,
    BottomBar,
    Device,
}
// Listings
export {
    CatNav,
    Markdown,
    Meta,
    ShareMenu,
    ListingDesktop,
    ListingMobile,
    Categories,
    Children,
    Siblings,
    Image,
    TitleMobile,
}
// Auth
export {
    Auth,
    AuthedDialog,
    Signin,
    Signup,
    AccountMenu,
    MembersOnly,
}

// Main
export {
    PWA,
    App,
    SEO,
    BackofficeSEO,
    Pingpong,
    PingPublic,
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
// Translation
export {
    getTranslation,
    translations,
}
// State
export {
    store,
    persistor,
    setPwaKey,
    WrapState,
    selectBootTime,
    selectConfig,
    selectCore,
    selectDisplay,
    selectFrontmatter,
    selectAuth,
    selectPingpong,
    selectBackoffice,
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
