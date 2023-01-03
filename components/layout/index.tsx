import Footer from "../footer";
import Navbar from "../navbar";
import Head from "next/head";

export default function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div>
      <Head>
        <title>{title + " | FRC 3407"}</title>
      </Head>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
