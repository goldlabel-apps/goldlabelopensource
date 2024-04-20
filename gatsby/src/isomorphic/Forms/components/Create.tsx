import * as React from "react"
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material"
import {
  // usePwaSelect,
  // usePwaDispatch,
  // selectCollections,
  // setCreateKey,
  // selectCreate,
  Icon,
  Font,
} from "../../../goldlabel"
import {
  SelectOption,
  InputString,
} from "../"

export default function Create() {

  // const dispatch = usePwaDispatch()
  // const c = usePwaSelect(selectCreate)
  // const collections = usePwaSelect(selectCollections)
  // const {
  //   open,
  //   // collection,
  // } = c

  const closeCreate = () => {
    // dispatch(setCreateKey("open", false))
  }

  const saveFeeditem = () => {
    console.log("saveFeeditem")
  }

  const changeCollection = (e: any) => {
    // dispatch(setCreateKey("collection", e.target.value))
  }
  
  return <Dialog 
          fullWidth
          fullScreen
          maxWidth="sm"
          open={false}
          onClose={closeCreate}>
          <DialogTitle>
            <Font variant="title">
              Create
            </Font>
          </DialogTitle>
          
          <DialogContent>
            <SelectOption 
              onSelect= {changeCollection}
              field={{
                label: "Collection",
                options: [],
              }}
            />
            <InputString 
              field = {{
                id: "newItemTitle",
                label: "Title",
                required: true,
                helperText: "This should be the title",
              }}
            
            />
          
          </DialogContent>

          <DialogActions>

              <Button
                onClick={saveFeeditem}
              >
                  <Font>
                    Save
                  </Font>
                  <Box sx={{ml:1, mt: 0.5}}>
                    <Icon icon="save" />
                  </Box>
              </Button>


              <Button
                onClick={closeCreate}
              >
                  <Font>
                    Cancel
                  </Font>
                  <Box sx={{ml:1, mt: 0.5}}>
                    <Icon icon="close" />
                  </Box>
              </Button>
            </DialogActions>


            {/* <pre>Create {JSON.stringify(c, null, 2)}</pre> */}
          </Dialog>
  
}
