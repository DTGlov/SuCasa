import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from "react-router-dom";
import { GET_LOCATIONS } from '../GraphQL/query';

function LocationSection() {

    const { data, loading, error } = useQuery(GET_LOCATIONS);
    if (loading) return <div>loading...</div>;

  if (error) return <div>error...</div>;
  
    return (
      <section>
        <div className="mt-4 lg:mt-8">
          <h1 className="text-center font-semibold text-lg lg:text-2xl text-[#002349] underline">
            Search Properties By Location
          </h1>
        </div>
        <div className="flex space-x-3 p-4 lg:mt-8">
          {data.locations.map(({ id, image, capital }) => (
            <div key={id} className="w-[33.33%]">
              <figure className="">
                <img
                  src={image}
                  alt=""
                  className="h-[150px] w-full object-cover"
                />
              </figure>
              <Link to={`/location/${id}`}>
                <p className="text-center text-[#002349] underline mt-2 font-semibold">
                  {capital}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
}

export default LocationSection
