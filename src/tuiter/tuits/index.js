import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import { useSelector} from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { findTuitsThunk } from "../services/tuits-thunks";
const TuitsList = () => {
  const { tuits, loading } = useSelector(state => state.tuits)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk)
  }, [dispatch])
 return(
  <div>
   <ul className="list-group">
         { loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }
     {
       tuits.map(tuit =>
        <TuitItem 
        key={tuit._id}
        tuit={tuit}/>
        )
     }
   </ul>
   </div>
 );
};

export default TuitsList;