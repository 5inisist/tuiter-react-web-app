import { faCheckCircle, faHeart, faReply, faRetweet, faUpload, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deleteTuitThunk } from "../services/tuits-thunks";
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
    dispatch(deleteTuitThunk(id));
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
       <div className="fw-bolder"> {tuit.userName} <FontAwesomeIcon icon={faCheckCircle} style={{color: "#005eff",}}/>
         {tuit.handle} . {tuit.time}</div>
       <div>{tuit.tuit}</div>
       <div><FontAwesomeIcon icon={faReply}/> &nbsp;  {tuit.replies} &nbsp; <FontAwesomeIcon icon={faRetweet}/> &nbsp; {tuit.retuits} &nbsp; <FontAwesomeIcon icon={faHeart} style={{color:"#ff0000",}} /> &nbsp; {tuit.likes} &nbsp; <FontAwesomeIcon icon={faUpload}/> &nbsp; </div>
     </div>
   </div>
  </li>
 );
};
export default TuitItem;