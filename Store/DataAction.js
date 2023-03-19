import {AddItemToFavActionConst, AddToCartActionConst, DeleteCartActionConst, userLoginActionConst} from "./DataActionCons"
import { BaseUrl } from "../Components/BaseUrl";
import { baseGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon";

export const AddItemToFavAction=(obj)=>{
    return (dispatch) => {
        dispatch ({
            type: AddItemToFavActionConst.ADD_ITEM_TO_FAV,
            obj: obj
        })
    }
}

//    ........................................API INTEGRATION................................

export const UserLoginAction = (formFields) => {
    return dispatch => {
        dispatch({
            type: userLoginActionConst.USER_LOGIN_REQ
        })
       
 //ned demo
 var myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");

 var raw = JSON.stringify({
 "phoneNumber": formFields.phoneNumber,
 "password": formFields.password
 });

 var requestOptions = {
 method: 'GET',
 headers: myHeaders,
 redirect: 'follow'
 };

 var userID = formFields.phoneNumber;
 var password= formFields.password;

 fetch(`${BaseUrl}api/Users/Login/saqlain/hemanical1`, requestOptions)
 .then(response => response.json())
 .then(result => {
     if (result.Status === "Success") {
         dispatch({
             type: userLoginActionConst.USER_LOGIN_SUCC,
             userSuccData : result?.Result
         })
     }
     else {
         dispatch({
             type: userLoginActionConst.USER_LOGIN_FAIL,
             userFailData: result
         })
     }
 })
 .catch(error => console.log('error', error));
    }}

       
        
    


export const AddToCartAction=(obj)=>{
    return (dispatch) => {
        dispatch ({
            type: AddToCartActionConst.ADD_TO_CART_ACTION,
            obj: obj
        })
    }
}


export const DeleteCartAction=(obj)=>{
    return (dispatch) => {
        dispatch ({
            type: DeleteCartActionConst.DELETE_CART_ACTION,
            obj: obj
        })
    }
}


// var raw = "";

        // var requestOptions = {
        //   method: 'GET',
        //   body: raw,
        //   redirect: 'follow'
        // };
        
        // fetch(`${BaseUrl}api/Users/Login/saqlain/hemanical1`, requestOptions)
        //   .then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error', error));