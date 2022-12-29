// import React, { Component } from 'react';

// class Like extends Component {
//     state = {
//         like : true
//      }
//     render() {
//         return (
//             <React.Fragment>
//                 <td>
//                   {this.state.like ? (
//                     <i
//                       onClick={this.toggleLike}
//                       className="fa fa-heart-o"
//                       aria-hidden="true"
//                     ></i>
//                   ) : (
//                     <i
//                       onClick={this.toggleLike}
//                       className="fa fa-heart"
//                       aria-hidden="true"
//                     ></i>
//                   )}
//                 </td>
//             </React.Fragment>

//         );
//     }

//     toggleLike = () => {
//         let unlike = !this.state.like;
//         console.log(this.state , "old");
//         this.setState({like : unlike})

//         console.log(this.state , "new");
//       };
// }

// export default Like;
import React, { useState ,useContext} from "react";
import LikeContext from "../context/likecontext";
function Like(props) {
  const [like, setLike] = useState(props.isLiked.like);
  const likecontext = useContext(LikeContext)
  return (
    <React.Fragment>
      <td>
        {!like ? (
        <i
          onClick={() => setLike(!like)}
          className="fa fa-heart-o"
          aria-hidden="true"
        ></i>
        ) : (
          <i
            onClick={() => setLike(!like)}
            className="fa fa-heart"
            aria-hidden="true"
          ></i>
        )}
      </td>
    </React.Fragment>
  );
}

export default Like;
