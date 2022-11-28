import Head from "next/head";
import Nav from "../components/Nav";
import Input from "../components/Input";
import ContentBlock from "../components/ContentBlock";
import Footer from "../components/Footer";

const headline = "SoCal * Flights";
const mainText =
  "Flights from SoCal is dedicated to the nomad who wants to travel the world on a budget. We will find you the best flight deals departing from Southern California, so you don't have to.";
const subheadline = "Finding the best flight deals from Southern California.";

export default function Home() {
  return (
    <div className="dark:bg-[#35465C]">
      <Head>
        <title>
          SoCal Flights | The Best Deals on Flights from Southern California
        </title>
      </Head>
      <div className="font-mono p-4 md:p-12">
        <div>
          <ContentBlock
            headline={headline}
            subhead={subheadline}
            body={mainText}
          />
          <div className="my-10">
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
}
