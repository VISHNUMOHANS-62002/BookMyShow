import React, { useState } from 'react'
import { MovieContext } from "../Context/Movie.Context";
const MovieInfo=()=>{
const { movie } = useContext(MovieContext);
const [isOpen,setIsOpen]=useState(false);
const [price, setprice] = useState(0);
const genres = movie.genres?.map(({ name }) => name).join(",");
const rentMovie=()=>{
    setIsOpen(true);
    setprice(149);
}
const buyMovie=()=>{
    setIsOpen(false);
    setprice(599);
}

    return (
      <>
        {/* // <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price}> */}
        <div className="flex flex-col-reverse gap-3 px-4 my-3">
          <div className="text-black flex flex-col gap-2 md:px-4">
            <h4>5K Rating</h4>
            <h4>Kannada,English,Hindi,Telegu</h4>
            <h4>
              {movie.runtime} min|{genres}
            </h4>
          </div>
        </div>
      </>
    );
}
export default MovieInfo