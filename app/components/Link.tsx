import NextLink from "next/link";

type LinkProps = {
  href: string;
  children?: React.ReactNode
};

function Link(props: LinkProps) {
  return <NextLink href={props.href}>{props.children}</NextLink>
}

export default Link;
