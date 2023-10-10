import Backoffice from "./Backoffice"
import Collection from "./components/Collection"
import {backofficeState} from "./backofficeState"
import {newBus} from "./actions/api/newBus"
import {updateBus} from "./actions/api/updateBus"
import {fetchAPI} from "./actions/api/fetchAPI"
import {selectCollection} from "./actions/collections/selectCollection"
import {confirmAction} from "./actions/confirm/confirmAction"
import {confirmNo} from "./actions/confirm/confirmNo"
import {confirmYes} from "./actions/confirm/confirmYes"
import {confirmReset} from "./actions/confirm/confirmReset"
import Sidebar from "./components/menus/Sidebar"
import TopRight from "./components/menus/TopRight"
import Desktop from "./components/layout/Desktop"
import Dashboard from "./components/layout/Dashboard"
import ConfirmDialog from "./components/dialogs/ConfirmDialog"
import AddDoc from "./components/dialogs/AddDoc"
import ChangeDoc from "./components/dialogs/ChangeDoc"
import TopList from "./components/TopList"
import {
    StyledDrawerHeader,
    StyledDrawer,
    StyledAppBar,
} from "./components/mixins/StyledMixins"

export {
    backofficeState,
    StyledDrawerHeader,
    StyledDrawer,
    StyledAppBar,
    Backoffice,
    newBus,
    updateBus,
    fetchAPI,
    selectCollection,
    confirmAction,
    confirmReset,
    confirmNo,
    confirmYes,
    Desktop,
    Dashboard,
    Sidebar,
    ConfirmDialog,
    AddDoc,
    ChangeDoc,
    TopRight,
    TopList,
    Collection,
}
