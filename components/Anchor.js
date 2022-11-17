import { useRouter } from "next/router";
export default function Anchor({ href, className, children }) {
  const router = useRouter();
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}
