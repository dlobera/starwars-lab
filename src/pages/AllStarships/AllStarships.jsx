import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";

const AllStarships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchAllStarships()
  }, [])

  return (
    <>
      <div className='all-starships'>
        {starships.map(starship =>
          <Link to='/starship' state={{starship}} key={starship.name}>
            {starship.name}
          </Link>
        )}
    </div>
    </>
  );
}

export default AllStarships;