type ButtonProps = {
  variant: "primary" | "secondary";
  children?: string;
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ variant, children = "Ini Button", ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
