import React from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_ALL_APARTMENTS } from '../GraphQL/query';
// import { faBed, faGripHorizontal, faShower } from '@fortawesome/free-solid-svg-icons';
import ApartmentCard from './ApartmentCard';

function AllApartments({handleClick}) {
const { data, loading, error } = useQuery(GET_ALL_APARTMENTS);
if (loading) return <div>loading...</div>;

if (error) return <div>error...</div>;

    return (
      <section>
        <div className="mt-4">
          <h1 className="text-center font-semibold text-lg lg:text-2xl underline text-[#002349] lg:mt-8">
            All Properties
          </h1>
          <div className="flex flex-col justify-center p-4 lg:grid lg:grid-cols-3 gap-3 lg:p-6">
            {data.apartments.map(
              ({ id, image, title, description, beds, baths, dimension }) => (
                <ApartmentCard
                  key={id}
                  id={id}
                  handleClick={handleClick}
                  beds={beds}
                  image={image}
                  title={title}
                  description={description}
                  baths={baths}
                  dimension={dimension}
                />
              )
            )}
          </div>
        </div>
      </section>
    );
}

export default AllApartments
