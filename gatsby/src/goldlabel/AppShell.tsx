import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import React from "react"
import "./theme/default.css"
import {
  SEO,
  WrapRedux,
  MuiTheme,
  App,
} from "../"
import {
  CssBaseline,
} from "@mui/material"
import {Tings} from "./packages/Tings"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
}

export const fbApp = initializeApp(firebaseConfig)
export const fsDb = getFirestore(fbApp)

export default function AppShell(props: any) {
  const {
    appData,
    type,
    book,
    children,
    location,
  } = props

  return (<>
            <WrapRedux>
              <Tings />
              <MuiTheme>
                <CssBaseline />
                <App location={location} appData={appData} type={type} book={book} >
                  {children}
                </App>
              </MuiTheme>
            </WrapRedux>
          </>)
}

/*
<SEO appData={appData} type={type} book={book}/>
*/