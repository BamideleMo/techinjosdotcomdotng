import { A } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <MetaProvider>
      <Title>About TechINJos Newsletter - www.techinjos.com.ng</Title>
      <Link rel="canonical" href="https://TechINJos.com.ng/" />
      <Meta
        name="description"
        content="About TechINJos, the #1 Weekly and Quick Brief for Jos' Tech Ecosystem!"
      />
      <div>
        <Header />
        <div class="pt-20 md:pt-28">
          <div class="w-full md:w-11/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 mx-auto space-y-3">
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-violet-300 p-1">About</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                  #1 Weekly and Quick Brief for Jos' Tech Ecosystem!
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    Get the latest news, insights, and updates from Jos' growing
                    tech ecosystem with TechINJos weekly newsletter (
                    <a href="https://www.techinjos.com.ng">
                      www.techinjos.com.ng
                    </a>
                    ).
                  </p>
                  <p>
                    <b>Every Thursday</b> TechINJos cuts through the noise,
                    delivering only the most relevant and impactful information
                    to help readers stay informed, stay competitive and drive
                    innovation.
                  </p>
                  <p>
                    Our mission is to provide the Jos tech community with a
                    reliable, concise, and actionable source of information.
                  </p>
                  <h3>Get Involved</h3>
                  <p>
                    Will you like to contribut to TechINJos? We'd love to hear
                    from you! Whether you're a writer, designer, or industry
                    expert, we invite you to join us in contributing to the
                    future of Jos' tech scene.
                  </p>
                  <p>
                    Follow us on X:{" "}
                    <a href="https://x.com/TechINJos">@TechINJos</a> and on
                    Facebook: <a href="/">@TechINJos</a>
                  </p>
                  <p>
                    Join our WhatsApp Channel for Weekly reminders so you never
                    get to miss any of our publication:{" "}
                    <a href="https://whatsapp.com/channel/0029VaEVLBHBfxoG5GZxz72v">
                      TechINJos WhatsApp Channel
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
