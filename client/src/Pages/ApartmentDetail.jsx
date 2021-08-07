import React,{useEffect} from 'react';
import { useParams,useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_APARTMENT } from '../GraphQL/query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faChevronLeft, faGripHorizontal, faShower } from '@fortawesome/free-solid-svg-icons';

function ApartmentDetail() {
  const history = useHistory();
    const { id } = useParams();

  const goBack = () => {
    history.goBack()
  }

  useEffect(() => {
    document.title="SuCasa | Apartment"
  }, []);

    const { data, loading, error } = useQuery(GET_SINGLE_APARTMENT, {
        variables: {
            id
        }
    })

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error....</div>;


    const {image, description, areacode, beds, baths, dimension, price } =
      data.apartment;

    return (
      <section>
        <div className="p-4 lg:mt-4">
            <div className="flex items-center space-x-2 mb-2 text-[#002349] lg:ml-5" onClick={goBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <p className='cursor-pointer '>Go Back</p>
          </div>
          <div className="lg:flex lg:space-x-3 lg:p-4">
          <div className="flex flex-col lg:w-1/2">
            <figure className="flex justify-center">
              <img src={image} alt="" className="w-full lg:h-[300px]" />
            </figure>
            <div>
              <div className="flex justify-between items-center mt-2 ">
                <h1 className="font-semibold text-lg text-[#002349] lg:text-base">
                  {areacode}
                </h1>
                <p className="font-semibold text-lg text-[#002349] lg:text-base">${price}</p>
              </div>
              <div className="flex justify-between mt-2 lg:inline-block ">
                <div className="flex space-x-2 items-center">
                  <FontAwesomeIcon icon={faBed} className="text-[#002349]" />
                  <p>{beds}</p>
                </div>
                <div className="flex space-x-2 items-center">
                  <FontAwesomeIcon icon={faShower} className="text-[#002349]" />
                  <p>{baths}</p>
                </div>
                <div className="flex space-x-2 items-center">
                  <FontAwesomeIcon
                    icon={faGripHorizontal}
                    className="text-[#002349]"
                  />
                  <p>{dimension}</p>
                </div>
              </div>
              </div>
              </div>
              <div className="mt-2 lg:w-1/2">
                <h1 className="font-semibold text-lg underline text-[#002349]">
                  About Property
                </h1>
                <p className="text-sm mt-2 leading-5">{description}</p>
              </div>
              </div>
           
          </div>
      </section>
    );
}

export default ApartmentDetail
