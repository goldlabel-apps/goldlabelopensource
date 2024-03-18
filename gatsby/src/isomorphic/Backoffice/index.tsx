import Backoffice from "./Backoffice"
import Collection from "./components/Collection"
import {backofficeState} from "./backofficeState"

import {unsubscribeCollection} from "./actions/collections/unsubscribeCollection"
import {subscribeCollection} from "./actions/collections/subscribeCollection"

import {newBus} from "./actions/api/newBus"
import {updateBus} from "./actions/api/updateBus"
import {fetchAPI} from "./actions/api/fetchAPI"
import {setActiveCollection} from "./actions/collections/setActiveCollection"
import {confirmAction} from "./actions/confirm/confirmAction"
import {confirmNo} from "./actions/confirm/confirmNo"
import {confirmYes} from "./actions/confirm/confirmYes"
import {confirmReset} from "./actions/confirm/confirmReset"
import GameMenu from "./components/menus/GameMenu"
import TopRight from "./components/menus/TopRight"
import Desktop from "./components/layout/Desktop"
import Mobile from "./components/layout/Mobile"
import ConfirmDialog from "./components/dialogs/ConfirmDialog"
import AddDoc from "./components/dialogs/AddDoc"
import ChangeDoc from "./components/dialogs/ChangeDoc"
import {
    StyledDrawerHeader,
    StyledDrawer,
    StyledAppBar,
} from "./components/mixins/StyledMixins"

export {
    backofficeState,
    subscribeCollection,
    unsubscribeCollection,
    StyledDrawerHeader,
    StyledDrawer,
    StyledAppBar,
    Backoffice,
    newBus,
    updateBus,
    fetchAPI,
    setActiveCollection,
    confirmAction,
    confirmReset,
    confirmNo,
    confirmYes,
    Desktop,
    Mobile,
    GameMenu,
    ConfirmDialog,
    AddDoc,
    ChangeDoc,
    TopRight,
    Collection,
}
