import { A } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Advertise() {
  return (
    <MetaProvider>
      <Title>Advertise with Tech in Jos Newsletter - www.techinjos.com.ng</Title>
      <Link rel="canonical" href="https://techinjos.com.ng/" />
      <Meta
        name="description"
        content="Advertise with the #1 Weekly and Quick Brief for Jos' Tech Ecosystem!"
      />
      <div>
        <Header />
        <div class="pt-24 md:pt-28">
          <div class="w-full md:w-11/12 2xl:w-9/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 mx-auto space-y-3">
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-fuchsia-300 p-1">Advertise</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-bold">
                  Reach the Heart of Jos' Tech Scene
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    Advertise with techINJos and connect with the innovators,
                    entrepreneurs, learners, tech enthusiast and professionals
                    driving Jos' thriving tech ecosystem.
                  </p>
                  <p>2 reasons why you should advertise with us:</p>
                  <p>
                    <b>#1. Targeted Audience:</b>
                    <br />
                    Reach a highly engaged audience of tech enthusiasts,
                    startups, and industry leaders in Jos.
                  </p>
                  <p>
                    <b>#2. Credibility:</b>
                    <br />
                    Associate your brand with the most trusted source of tech
                    news and insights in Jos.
                  </p>
                  <p>
                    Ready to reach the heart of Jos' tech scene? Contact me via
                    WhatsApp{" "}
                    <a href="https://wa.me/23407036935026">07036935026</a> to
                    discuss your advertising needs and create a customized
                    campaign.
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

export default Advertise;
