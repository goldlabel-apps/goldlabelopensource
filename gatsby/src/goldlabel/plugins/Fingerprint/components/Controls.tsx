import * as React from 'react'
import {
  styled, 
  alpha,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
} from "../../../../goldlabel"
import {toggleFullScreen} from "../../Fingerprint"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export default function Controls() {
  const dispatch = usePwaDispatch()

  const closeFingerprint = () => {
    dispatch(toggleFullScreen(false))
    return true
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        color="inherit"
        sx={{
          background: "none",
          boxShadow: "none"
        }}>
        <Toolbar>
          
          <IconButton
            disabled
            edge="start"
            color="primary"
            sx={{ mr: 2 }}
          >
            <Icon icon="ting" />
          </IconButton>
          <Font variant="title" noWrap>
            Fingerprint Controls
          </Font>
          <Search>
            <SearchIconWrapper>
              <Icon icon="search" color="primary" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{}}>
            <IconButton
              onClick={closeFingerprint}
              color="primary">
              <Icon icon="close" />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
