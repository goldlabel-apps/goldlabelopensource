import { AppThunk } from "../../featuresStore";
import { 
  setAtracktKey,
  setSharedKey,
} from "../../../Features";

export const setDimensions = (): AppThunk => async (dispatch: any) => {
  try {
    const width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    const height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
    dispatch(setAtracktKey({ key: "screenDimensions", value: {
        width,
        height,
    }}));
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "101",
      message: error.toString()
    }}))
  }
};
