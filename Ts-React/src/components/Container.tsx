type ContainerProps = {
  style: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return (
    <div style={props.style}>
      Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      repellendus asperiores, ipsum delectus minus tenetur molestias
      exercitationem optio rem voluptatem blanditiis minima quaerat veniam at
      doloremque sequi aut molestiae dolorem.
    </div>
  );
};

export default Container;
