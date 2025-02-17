import { A } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import techINJos from "../assets/about-techINJos.png";

function About() {
  return (
    <MetaProvider>
      <Title>About Tech in Jos Newsletter | www.techinjos.com.ng</Title>
      <Link rel="canonical" href="https://techinjos.com.ng/" />
      <Meta
        name="description"
        content="Your #1 tech Newsletter for, from, & about Jos, Plateau state!"
      />
      <div>
        <Header />
        <div class="pt-24 md:pt-28">
          <div class="w-full md:w-11/12 2xl:w-9/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-7/12 2xl:w-6/12 mx-auto space-y-3">
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-violet-300 p-1">About</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-bold">
                  Tech in Jos!
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    <b>techINJos</b> (
                    <A href="https://techinjos.com.ng">www.techinjos.com.ng</A>)
                    is an independent weekly online newsletter focused on the
                    tech ecosystem in <b>Jos</b> - <b>Plateau state</b>.
                  </p>
                  <p>
                    <b>Every Sunday</b> afternoon we deliver only relevant and
                    impactful information to help readers stay informed, and
                    embrace the thriving tech scene in Jos.
                  </p>
                  <p>
                    <img src={techINJos} alt="About techINJos" />
                  </p>
                  <p>
                    <b>Our mission</b>: is to inspire love for the growing tech
                    ecosystem in Jos by amplifying stories for and about Jos
                    tech community, showcasing the diverse perspectives, and
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
                    each new newsletter so you never get to miss any:{" "}
                    <a href="https://whatsapp.com/channel/0029VaEVLBHBfxoG5GZxz72v">
                      techINJos WhatsApp Channel
                    </a>
                    .
                  </p>
                  <p>
                    <b>To contact the editor:</b> Send a WhatsApp chat or call:{" "}
                    <a href="https://wa.me/23408092772909">08092772909</a>
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
