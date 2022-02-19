import Head from "next/head";
import { useState } from "react";
import ContactIcon from "../public/mail.svg";
import { BiLoaderAlt } from "react-icons/bi";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, subject, message };
    setLoading(true);
    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log(response);
    if (response.status === 200) {
      setComplete(true);
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Contact | Michael Tong</title>
      </Head>
      <div className="px-0 relative md:py-16 mx-auto max-w-md md:max-w-none flex flex-col-reverse md:flex-row gap-8 pb-16">
        <div className="md:max-w-[24rem]">
          <header className="mx-auto text-2xl md:text-3xl text-gray-800 font-semibold mb-2">
            <h1 className="tracking-tight	leading-8 mb-1">Contact:</h1>
            <div className="text-lg md:text-xl text-gray-500 font-normal leading-6">
              Want to collaborate? Or just have an awesome idea to share?
              Let&apos;s connect!
            </div>
          </header>
          {loading ? (
            <div className="grid h-full w-full place-items-center">
              <span className="animate-spin text-2xl">
                <BiLoaderAlt />
              </span>
            </div>
          ) : complete ? (
            <div className="w-full px-2 py-1 border-2 rounded-lg border-emerald-400 bg-emerald-100 text-emerald-500 font-semibold text-sm">
              Message sent!
            </div>
          ) : (
            <form
              className="flex flex-col gap-2"
              method="post"
              onSubmit={handleOnSubmit}
            >
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
          )}
        </div>
        <div className="flex items-center justify-center flex-auto sm:min-w-[20rem]">
          <ContactIcon className="max-w-[18rem]" />
        </div>
      </div>
    </>
  );
}
