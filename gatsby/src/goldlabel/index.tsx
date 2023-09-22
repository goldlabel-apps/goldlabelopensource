// Goldlabel
import App from "./App"
import AppShell from "./AppShell"
import {goldlabelConfig} from "../goldlabelConfig"
import {SEO} from "./SEO"

// Hooks
import {useSiteMetadata} from "./hooks/useSiteMetadata"
import {usePwaSelect} from "./hooks/usePwaSelect"
import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {useAllMarkdown} from "./hooks/useAllMarkdown"
import {useCategories} from "./hooks/useCategories"
import {usePagesByCategory} from "./hooks/usePagesByCategory"
import {useFeatured} from "./hooks/useFeatured"

// Redux
import {
  selectPWA, 
  setPwaKey,
  selectDarkMode,
  selectGeo,
  selectLocale,
  selectAuth,
  selectTings,
} from "./reducer"

import {WrapRedux} from "./redux/WrapRedux"
import {store, persistor} from "./redux/store"
import {boot} from "./actions/boot"
import {onUpdate} from "./actions/onUpdate"
import {updateHistory} from "./actions/updateHistory"
import {notify} from "./actions/notify"
import {goAuth} from "./actions/goAuth"
import {navigate} from "./actions/navigate"
import {resetRedux} from "./actions/resetRedux"
import {setRoute} from "./actions/setRoute"
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

// Theme
import ThemeContext from "./theme/ThemeContext"
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
import PWANav from "./components/PWANav"
import AuthedNav from "./components/AuthedNav"
import SettingsNav from "./components/SettingsNav"
import Share from "./components/Share"
import Settings from "./components/Settings"
import Image from "./components/Image"
import PageTitle from "./components/PageTitle"
import Featured from "./components/Featured"

export { // Goldlabel
  goldlabelConfig,
  AppShell,
  App,
  SEO,
  CTA,
  TopAppbar,
  Notifyer,
  Settings,
  SiteBottom,
  PWANav,
  AuthedNav,
  SettingsNav,
  GenericDialog,
  Share,
  Title,
  PageTitle,
  Image,
  Featured,
}

export { // Theme
  ThemeContext,
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
  goAuth,
  navigate,
  boot,
  updateHistory,
  resetRedux,
  setShare,
  setRoute,
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
  selectDarkMode,
  selectGeo,
  selectLocale,
  selectAuth,
  selectTings,
}

export { // Hooks
  usePwaSelect,
  useSiteMetadata,
  usePwaDispatch,
  useAllMarkdown,
  useCategories,
  usePagesByCategory,
  useFeatured,
}
