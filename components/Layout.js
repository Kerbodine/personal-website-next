export default function Wrapper({ children }) {
  return (
    <div className="mx-auto max-w-screen-lg px-6 md:px-12 pt-16 md:pt-24">
      <main>{children}</main>
    </div>
  );
}
