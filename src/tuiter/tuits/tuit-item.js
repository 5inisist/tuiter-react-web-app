import { faCheckCircle, faHeart, faReply, faRetweet, faUpload, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deleteTuit } from "../reducers/tuits-reducer";
import { useDispatch } from "react-redux";

const TuitItem = (
 {
   tuit = {
     "userName": "SpaceX",
     "handle": "@spacex",
     "time": "2h",
     "tuit": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "spacex.jpg",
     "replies": "234",
     "retuits": "432",
     "likes": "22345",
   }  
 }
 
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
 return(
  <li className="list-group-item">
   <div className="row">
   <div className="col-2">
       <img width={70} className="float-end rounded-4" src={`/images/${tuit.image}`}/>
   </div>
     <div className="col-10">
      <div>
      <FontAwesomeIcon icon={faX} onClick={() => deleteTuitHandler(tuit._id)}/>
      </div>
       <div className="fw-bolder">{tuit.userName}<FontAwesomeIcon icon={faCheckCircle} style={{color: "#005eff",}}/>
         {tuit.handle} . {tuit.time}</div>
       <div>{tuit.tuit}</div>
       <div><FontAwesomeIcon icon={faReply}/>  {tuit.replies}  <FontAwesomeIcon icon={faRetweet}/>  {tuit.retuits}  <FontAwesomeIcon icon={faHeart} style={{color:"#ff0000",}} />  {tuit.likes}  <FontAwesomeIcon icon={faUpload}/>  </div>
     </div>
   </div>
  </li>
 );
};
export default TuitItem;