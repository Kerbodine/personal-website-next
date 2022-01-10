export default function LinkButton({ link, icon }) {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="w-8 h-8 text-2xl rounded-md border-2 border-gray-300 hover:border-gray-800 bg-gray-100 text-gray-500 font-bold tracking-wide flex items-center justify-center hover:bg-gray-800 hover:text-white"
    >
      {icon}
    </a>
  );
}
