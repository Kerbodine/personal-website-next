export default function LinkTag({ icon, title, link }) {
  return (
    <a
      className="w-min px-2 py-1 border-2 border-gray-300 hover:border-gray-800 bg-gray-100 text-gray-500 font-bold tracking-wide rounded-full cursor-pointer flex items-center gap-1 hover:bg-gray-800 hover:text-white"
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      {icon}
      <p className="text-sm">{title}</p>
    </a>
  );
}
