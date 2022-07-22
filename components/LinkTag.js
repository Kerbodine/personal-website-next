import Link from "next/link";

export default function LinkTag({ icon, title, link }) {
  return (
    <Link href={link} passHref>
      <a
        className="link-tag"
        href={link}
        rel="noreferrer"
        target="_blank"
        data-splitbee-event="Profile"
        data-splitbee-event-destination={`${title}`}
      >
        {icon}
        {/* {title && <p className="text-sm">{title}</p>} */}
      </a>
    </Link>
  );
}
