type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div key={name.first}>
            <h2>{name.first}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
