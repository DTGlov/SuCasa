import React,{useEffect} from 'react';
import { GET_SINGLE_LOCATION } from "../GraphQL/query";
import { useQuery } from "@apollo/client";
import { useHistory, useParams } from 'react-router-dom';
import ApartmentCard from '../components/ApartmentCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function LocationDetail() {
    const history = useHistory();
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_SINGLE_LOCATION, {
        variables: {
        id
    }
    });
  useEffect(() => {
    document.title = "SuCasa | Location";
  }, []);
    
      const goBack = () => {
        history.goBack();
      };
if (loading) return <div>loading...</div>;

if (error) return <div>error...</div>;

    
  const { slug } = data.location;


    return (
      <section>
        <div>
          <div
            className="flex items-center p-4 space-x-2 mb-2 text-[#002349]"
            onClick={goBack}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <p className="cursor-pointer">Go Back</p>
          </div>
          <h1 className="text-center text-lg underline  text-[#002349] font-semibold">
            Properties in {slug}
          </h1>
          <div className="flex flex-col justify-center p-4 lg:grid lg:grid-cols-3 gap-3 lg:p-6">
            {data.location.apartments.map(
              ({ id, image, title, description, beds, baths, dimension }) => (
                <ApartmentCard
                  key={id}
                  id={id}
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

export default LocationDetail
