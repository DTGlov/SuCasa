import React from 'react';
import { Link } from "react-router-dom";
import {
  faBed,
  faGripHorizontal,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ApartmentCard({handleClick,id,title,beds,image,baths,description,dimension}) {
    return (
      <div className=" bg-gray-100 mt-4">
        <figure className="flex justify-center">
          <img src={image} alt="apartment" className="w-[80%] h-[200px]" />
        </figure>
        <div className="flex flex-col justify-center mt-2">
          <div className="flex justify-center">
            <h1 className="text-center font-semibold w-[80%] text-[#002349]">
              {title}
            </h1>
          </div>
          <div className="flex justify-center mt-2">
            <div className="flex justify-between w-[80%]">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faBed} className="text-[#002349]" />
                <p>{beds}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faShower} className="text-[#002349]" />
                <p>{baths}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faGripHorizontal}
                  className="text-[#002349]"
                />
                <p>{dimension}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="w-[80%]">
              <p className="line-clamp-4 text-sm">{description}</p>
            </div>
          </div>

          <Link to={`/apartment/${id}`} onClick={handleClick}>
            <div className="flex justify-center mt-2">
              <p className="w-[80%] text-xs text-[#002349] font-bold underline mb-2 ">
                READ MORE
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default ApartmentCard
