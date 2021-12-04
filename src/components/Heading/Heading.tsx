import "./Heading.css";

interface Props {
  title: string;
}

export const Heading = (props: Props) => {
  return <h2 className="Heading">{props.title}</h2>;
};
