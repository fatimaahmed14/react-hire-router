import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile/index";
import "./styles.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((peopleData) => setPeople(peopleData.results));
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/people/:id"
          element={
            <PersonProfile
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
            />
          }
        />
      </Routes>
    </>
  );
}
