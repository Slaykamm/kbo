type ButtonProps = {
  className?: string;
  children: string | JSX.Element;
  type: "button" | "submit";
};

export default function Button(props: ButtonProps) {
  const { children, type = "button", ...attributes } = props;

  return (
    <button
      className="border border-gray-800 px-4 py-2 rounded uppercase from-green-500"
      type={type}
      {...attributes}
    >
      {children}
    </button>
  );
}
