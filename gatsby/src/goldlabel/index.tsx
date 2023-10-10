// Goldlabel
import App from "./App"
import AppShell from "./AppShell"
import {goldlabelConfig} from "../goldlabelConfig"
import {SEO} from "./SEO"
import {SEOBackoffice} from "./SEOBackoffice"

import {getTranslation} from "../mods/Lingua"

import {
  Auth,
  AuthChip,
  firebaseSignin,
  firebaseSignout,
  AccountPage,
  Signin,
  Signup,
  AccountMenu,
} from "./Auth"

// Hooks
import {useSiteMetadata} from "./hooks/useSiteMetadata"
import {usePwaSelect} from "./hooks/usePwaSelect"
import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {useAllMarkdown} from "./hooks/useAllMarkdown"
import {useCategories} from "./hooks/useCategories"
import {usePagesByCategory} from "./hooks/usePagesByCategory"
import {useChildPages} from "./hooks/useChildPages"
import {useFeatured} from "./hooks/useFeatured"
import {useSameParent} from "./hooks/useSameParent"
import {useScreensize} from "./hooks/useScreensize"
import {useIsBig} from "./hooks/useIsBig"


// Selectors
import {
  selectPWA, 
  setPwaKey,
  selectDarkMode,
  selectLocale,
  selectAuth,
  selectTings,
  selectCategories,
  selectType,
  selectGeolocator,
  selectFrontmatter,
  selectWeather,
  selectBackoffice,
} from "./reducer"

import {WrapRedux} from "./redux/WrapRedux"
import {store, persistor} from "./redux/store"
import {boot} from "./actions/boot"
import {onUpdate} from "./actions/onUpdate"
import {updateTing} from "./actions/updateTing"
import {updateHistory} from "./actions/updateHistory"
import {notify} from "./actions/notify"
import {navigate} from "./actions/navigate"
import {resetRedux} from "./actions/resetRedux"
import {setShare} from "./actions/setShare"
import {setLingua} from "./actions/setLingua"
import {toggleCategories} from "./actions/toggles/toggleCategories"
import {togglePages} from "./actions/toggles/togglePages"
import {toggleSettings} from "./actions/toggles/toggleSettings"
import {toggleAccount} from "./actions/toggles/toggleAccount"
import {toggleAddListing} from "./actions/toggles/toggleAddListing"
import {toggleNavOpen} from "./actions/toggles/toggleNavOpen"
import {toggleDarkmode} from "./actions/toggles/toggleDarkmode"
import {toggleMore} from "./actions/toggles/toggleMore"
import {toggleGenericDialog} from "./actions/toggles/toggleGenericDialog"
import {setFrontmatter} from "./actions/setFrontmatter"
import {scrollUp} from "./actions/scrollUp"

// Setters
import {setType} from "./actions/setters/setType"

// Theme
import MuiTheme from "./theme/MuiTheme"
import {makeTheme} from "./theme/makeTheme"
import Icon from "./theme/Icon"
import {Font} from "./theme/Font"

// Components
import CTA from "./components/CTA"
import Title from "./components/Title"
import GenericDialog from "./components/GenericDialog"
import Notifyer from "./components/Notifyer"
import TopAppbar from "./components/TopAppbar"
import SiteBottom from "./components/SiteBottom"
import TopNav from "./components/TopNav"
import SettingsMenu from "./components/SettingsMenu"
import ShareMenu from "./components/ShareMenu"
import Settings from "./components/Settings"
import Image from "./components/Image"
import Featured from "./components/Featured"
import CatNav from "./components/CatNav"
import MiniSettings from "./components/MiniSettings"
import YouTubePlayer from "./components/YouTubePlayer"

export { // Auth
  Auth,
  AuthChip,
  Signin,
  Signup,
  AccountPage,
  AccountMenu,
  firebaseSignout,
  firebaseSignin,
  
}
export { // Goldlabel
  goldlabelConfig,
  getTranslation,
  AppShell,
  App,
  SEO,
  SEOBackoffice,
  CTA,
  TopAppbar,
  Notifyer,
  Settings,
  SiteBottom,
  TopNav,
  SettingsMenu,
  GenericDialog,
  Title,
  Image,
  Featured,
  CatNav,
  ShareMenu,
  MiniSettings,
  YouTubePlayer,
  
}

export { // Theme
  MuiTheme,
  makeTheme,
  Icon,
  Font,
}

export { // Redux
  setPwaKey,
  store,
  persistor,
  WrapRedux,
  selectPWA,
  onUpdate,
  notify,
  navigate,
  boot,
  updateHistory,
  resetRedux,
  setShare,
  setLingua,
  toggleCategories,
  togglePages,
  toggleSettings,
  toggleAccount,
  toggleAddListing,
  toggleNavOpen,
  toggleDarkmode,
  toggleMore,
  toggleGenericDialog,
  setFrontmatter,
  scrollUp,
  updateTing,
}

export { // Selectors
  selectDarkMode,
  selectLocale,
  selectAuth,
  selectTings,
  selectCategories,
  selectType,
  selectGeolocator,
  selectFrontmatter,
  selectWeather,
  selectBackoffice,
}

export { // Setters
  setType,
}


export { // Hooks
  usePwaSelect,
  useSiteMetadata,
  usePwaDispatch,
  useAllMarkdown,
  useCategories,
  usePagesByCategory,
  useFeatured,
  useChildPages,
  useSameParent,
  useScreensize,
  useIsBig,
}
