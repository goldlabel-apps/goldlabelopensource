import * as React from "react"
import {
  PWA,
  KeywordSEO,
} from "../goldlabel"

export default function Page(data: any) {
  let keyword = data.location.search.slice(1)
  if (!keyword) return <>No Keyword</>

  return  <>
            <KeywordSEO />
            <PWA 
              appData={{...data}} 
              type="keyword"
              keyword={keyword}
            />
          </>
}
