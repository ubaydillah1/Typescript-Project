import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Greet from "../components/Greet";
import Input from "../components/Input";
import Person from "../components/Person";
import PersonList from "../components/PersonList";
import Status from "../components/Status";

function App() {
  const personName = {
    first: "Bryne",
    last: "Sigar",
  };

  const nameList = [
    { first: "Bryne", last: "Sigar" },
    { first: "March", last: "Sigar" },
    { first: "Syne", last: "Sigar" },
  ];

  return (
    <>
      <Greet name="Top" messageCount={10} isLogin={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Card>
        <h1>This is Card Children h1</h1>
      </Card>
      <Button
        handleClick={(event, id) => {
          console.log("Click : " + event + id);
        }}
      />

      <Input
        value="This is Value"
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <Container style={{ background: "blue", color: "red" }} />
    </>
  );
}

export default App;
