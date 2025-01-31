type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  return <div>{props.status}</div>;
};

export default Status;
