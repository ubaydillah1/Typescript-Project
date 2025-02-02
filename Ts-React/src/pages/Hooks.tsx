import { Box } from "../components/context/Box";
import ThemeContextProvider from "../components/context/ThemeContext";
import Counter from "../components/states/Counter";
import LoggedIn from "../components/states/LoggedIn";
import User from "../components/states/User";
import UserContext from "../components/context/User";
import UserContextProvider from "../components/context/UserContexProvider";
import DomRef from "../components/ref/DomRef";
import List from "../components/generics/List";
import RandomNumber from "../components/restriction/RandomNumber";
import Toast from "../components/templateLiteral/Toast";
import Button from "../components/html/Button";
import Input from "../components/html/Input";
import Text from "../components/polymorphic/Text";

const Hooks = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <LoggedIn />
        <br />
        <User />
        <br />
        <Counter />
        <br />
        <Box />
        <br />
        <UserContext />
        <br />
        <DomRef />
        <br />
        <List
          items={["Ubay", "Adrien", "Ihsan"]}
          onClick={(item) => console.log(item)}
        />
        <List
          items={[
            {
              id: 1,
              name: "Ubay",
              email: "ubay@gmail.com",
            },
            {
              id: 2,
              name: "Adrien",
              email: "Adrien@gmail.com",
            },
          ]}
          onClick={(item) => console.log(item)}
        />

        <br />
        <RandomNumber value={10} isPositive />
        <br />
        <Toast position="center" />
        <br />
        <Button variant="primary" onClick={() => console.log("Clicked")} />
        <Input type="text" style={{ background: "#aaa ", color: "white" }} />
        <br />
        <Text size="lg" as="h1">
          Heading
        </Text>
        <Text size="md" as="p">
          Paragraph
        </Text>
        <Text size="sm" color="secondary" as="label" htmlFor="someId">
          Label
        </Text>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};

export default Hooks;
