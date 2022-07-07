import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  console.log(location.state.starship.url)

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <div>
    <h1>NAME: {starshipDetails.name}</h1>
    <h1>MODEL: {starshipDetails.model}</h1>
    <Link to='/'>
      RETURN
      </Link>
    </div>
  );
}

export default StarshipDetails;