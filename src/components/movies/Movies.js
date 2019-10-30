import React, { useContext } from "react";
import { Context } from "../../context";
import Spinner from "../layout/Spinner";
import Movie from "../movies/Movie";

const Movies = () => {
  const [state] = useContext(Context);
  const { movie_list, heading } = state;

    
  if (movie_list === undefined || movie_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {movie_list.map(item => (
            <Movie key={item.id} movie={item} />
          ))}
        </div>
        {console.log(movie_list)}
            
      </div> 
    );
    }
  };


//   if (movie_list === undefined || movie_list.length === 0) {
//     return <Spinner />;
//   } else {
//     return (
//       <>
//         <h3 className="text-center mb-4">{heading}</h3>
//         <div className="row">
//           {movie_list.map(item => (
//             <Movie key={item.id} movie={item} />
//           ))}
//         </div>
//         {console.log(movie_list)}
            
//       </>
      
//     );
//   }
// };

export default Movies;
