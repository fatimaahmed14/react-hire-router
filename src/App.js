import { useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import PeopleList from "./pages/Dashboard/components/PeopleList";
import "./styles.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/Dashboard" element={<PeopleList />} />
      </Routes>
    </>
  );
}
