import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HireForm from "./components/HireForm";

function PersonProfile({ hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);

  const location = useLocation();
  useEffect(() => {
    if (!location.state) return;
    const personToHireData = location.state.person;
    setPerson(personToHireData);
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
