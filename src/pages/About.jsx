import { A } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import techINJos from "../assets/about-techINJos.png";

function About() {
  return (
    <MetaProvider>
      <Title>About techINJos Newsletter | www.techinjos.com.ng</Title>
      <Link rel="canonical" href="https://techinjos.com.ng/" />
      <Meta
        name="description"
        content="About techINJos, the #1 Weekly and Quick Brief for Jos' Tech Ecosystem!"
      />
      <div>
        <Header />
        <div class="pt-24 md:pt-28">
          <div class="w-full md:w-11/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 mx-auto space-y-3">
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-violet-300 p-1">About</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-bold">
                  Your #1 Weekly Brief For and About Jos' Tech Ecosystem!
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    <b>techINJos</b> (
                    <A href="https://techinjos.com.ng">www.techinjos.com.ng</A>)
                    is an independent weekly online newsletter focused on the
                    tech ecosystem in <b>Jos</b> - <b>Plateau state</b>.
                  </p>
                  <p>
                    <b>Every Sunday</b> afternoon we cut through the noise,
                    delivering only relevant and impactful information to help
                    readers stay informed, and embrace the thriving tech scene
                    in Jos.
                  </p>
                  <p>
                    <img src={techINJos} alt="About techINJos" />
                  </p>
                  <p>
                    Our mission is to inspire love for the growing tech
                    ecosystem in Jos by amplifing stories for and about Jos tech
                    community, showcasing the diverse perspectives, and
                    celebrating the community's wins.
                  </p>
                  <p>
                    Follow us on X:{" "}
                    <a href="https://x.com/techINJos">@techINJos</a> and on
                    Facebook:{" "}
                    <a href="https://facebook.com/techINJos">@techINJos</a>
                  </p>
                  <p>
                    Join our WhatsApp Channel for weekly reminders to checkout
                    each new issues so you never get to miss any:{" "}
                    <a href="https://whatsapp.com/channel/0029VaEVLBHBfxoG5GZxz72v">
                      techINJos WhatsApp Channel
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default About;
