type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  return <div>{props.children}</div>;
};

export default Card;
