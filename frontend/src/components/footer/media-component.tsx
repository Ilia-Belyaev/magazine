type MediaComponentProps = {
  name: string;
  title: string;
  href: string;
}

export default function MediaComponent({name, title, href}: MediaComponentProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={name} title={title}/>
    </a>
  );
}
