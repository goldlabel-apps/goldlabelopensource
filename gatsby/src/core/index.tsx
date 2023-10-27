// Main
import {SEO} from "../core/SEO"
import PWA from "../core/PWA"
import App from "./App"
import {Auth} from "./Auth"
// Tings
import Tings from "./components/Tings/Tings"
import {getIPGeo} from "./actions/tings/getIPGeo"
import {getUserAgent} from "./actions/tings/getUserAgent"
import {makeFingerprint} from "./actions/tings/makeFingerprint"
import {notifyTing} from "./actions/tings/notifyTing"
import {resetTing} from "./actions/tings/resetTing"
import {startTing} from "./actions/tings/startTing"
import {checkTing} from "./actions/tings/checkTing"
import {createTing} from "./actions/tings/createTing"
import {updateTing} from "./actions/tings/updateTing"
import {firebaseSignin} from "./actions/firebase/firebaseSignin"
import {firebaseSignout} from "./actions/firebase/firebaseSignout"
import {setDisplay} from "./actions/setDisplay"


// State
import {WrapState} from "./state/WrapState"
import {store, persistor} from "./state/store"
import {
    setPwaKey,
    selectBootTime,
    selectConfig,
    selectCore,
    selectNotifyr,
    selectDisplay,
    selectTings,
    selectFrontmatter,
    selectAuth,
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
import Paid from "./components/Listings/Paid"
import CatNav from "./components/Listings/CatNav"
import Meta from "./components/Listings/Meta"
import ShareMenu from "./components/Listings/ShareMenu"
import ListingMobile from "./components/Listings/ListingMobile"
import ListingDesktop from "./components/Listings/ListingDesktop"
import Categories from "../core/components/Listings/Categories"
import Children from "../core/components/Listings/Children"
import Siblings from "../core/components/Listings/Siblings"
import Image from "./components/Listings/Image"
import Title from "./components/Listings/Title"
import TitleMobile from "./components/Listings/TitleMobile"
import AuthChip from "./components/Auth/AuthChip"
import AuthHeader from "./components/Auth/AuthHeader"
import {Signin} from "./components/Auth/Signin"
import {Signup} from "./components/Auth/Signup"

// System
import Notifyer from "./components/System/Notifyer"
import PopupMenu from "./components/System/PopupMenu"
import ScrollButton from "./components/System/ScrollButton"
import WindowResizeListener from "./components/System/WindowResizeListener"


///////////////////
// Tings
export {
    startTing,
    Tings,
    selectTings,
    getIPGeo,
    getUserAgent,
    makeFingerprint,
    notifyTing,
    resetTing,
    checkTing,
    createTing,
    updateTing,
}
// System
export {
    Notifyer,
    selectNotifyr,
    PopupMenu,
    ScrollButton,
    WindowResizeListener,
}
// Listings
export {
    Paid,
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
    Title,
    TitleMobile,

}
// Auth
export {
    Auth,
    AuthChip,
    AuthHeader,
    Signin,
    Signup,
}

// Main
export {
    PWA,
    App,
    SEO,
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
    WrapState,
    store,
    persistor,
    setPwaKey,
    selectBootTime,
    selectConfig,
    selectCore,
    selectDisplay,
    selectFrontmatter,
    selectAuth,
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
}
