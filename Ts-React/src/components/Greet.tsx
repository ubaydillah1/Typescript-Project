type GreetProps = {
  name: string;
  messageCount: number;
  isLogin: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLogin
          ? `Hello World ${props.name} ${props.messageCount}`
          : "You are not Login"}
      </h2>
    </div>
  );
};

export default Greet;
