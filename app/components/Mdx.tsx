import Link from "./Link";
import Image from "./Image";
import { useMDXComponent } from "next-contentlayer/hooks";

type MdxProps = {
  code: string;
  className?: string;
};

function Mdx({ code, className }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className={className}>
      <Component components={{ Link, Image }} />
    </article>
  );
}

export default Mdx;
