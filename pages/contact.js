import ContactIcon from "../public/mail.svg";

export default function contact() {
  return (
    <div className="px-0 relative md:py-16 mx-auto max-w-md md:max-w-none flex flex-col-reverse md:flex-row gap-8 pb-16">
      <form className="flex flex-col gap-2 md:max-w-[24rem]">
        <div className="mb-2">
          <header className="mx-auto text-2xl md:text-3xl text-gray-800 font-semibold">
            <h1 className="tracking-tight	leading-8 mb-1">Contact:</h1>
            <div className="text-lg md:text-xl text-gray-500 font-normal leading-6">
              Want to collaborate? Or just have an awesome idea to share?
              Let&apos;s connect!
            </div>
          </header>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-500"
          >
            Email address:
          </label>
          <input
            id="email"
            type="email"
            required
            className="outline-none w-full h-9 rounded-lg bg-gray-50 border-2 border-gray-200 px-2 focus:border-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-gray-500"
          >
            Subject:
          </label>
          <input
            id="subject"
            type="subject"
            required
            autoComplete="off"
            className="outline-none w-full h-9 rounded-lg bg-gray-50 border-2 border-gray-200 px-2 focus:border-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-500"
          >
            Message:
          </label>
          <textarea
            id="message"
            className="w-full h-28 resize-none border-2 border-gray-200 bg-gray-50 rounded-lg outline-none p-2 focus:border-gray-400"
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 text-sm hover:text-white hover:bg-gray-700 rounded-lg font-semibold"
        >
          Submit
        </button>
      </form>
      <div className="flex items-center justify-center flex-auto sm:min-w-[20rem]">
        <ContactIcon className="max-w-[18rem]" />
      </div>
    </div>
  );
}
