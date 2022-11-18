function PeopleListItem(props) {
  const { person } = props;

  // need to use useEffect to import data ?

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  );
}

export default PeopleListItem;
