import { A } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Advertise() {
  return (
    <MetaProvider>
      <Title>Advertise with TechINJos Newsletter - www.techinjos.com.ng</Title>
      <Link rel="canonical" href="https://TechINJos.com.ng/" />
      <Meta
        name="description"
        content="Advertise with the #1 Weekly and Quick Brief for Jos' Tech Ecosystem!"
      />
      <div>
        <Header />
        <div class="pt-24 md:pt-28">
          <div class="w-full md:w-11/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 mx-auto space-y-3">
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-fuchsia-300 p-1">Advertise</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                  Reach the Heart of Jos' Tech Scene
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    Advertise with TechINJos and connect with the innovators,
                    entrepreneurs, learners, tech enthusiast and professionals
                    driving Jos' thriving tech ecosystem.
                  </p>
                  <h3>Why Advertise with Us?</h3>
                  <p>
                    <b>Targeted Audience:</b> Reach a highly engaged audience of
                    tech enthusiasts, startups, and industry leaders in Jos.
                  </p>
                  <p>
                    <b>Credibility:</b> Associate your brand with the most
                    trusted source of tech news and insights in Jos.
                  </p>
                  <h3>Advertising Options</h3>
                  <p>
                    <b>Display Ads:</b> Showcase your brand through eye-catching
                    banner ads on our website.
                  </p>
                  <p>
                    <b>Sponsored Content:</b> Partner with us to create
                    engaging, native content that resonates with our audience.
                  </p>
                  <p>
                    Ready to reach the heart of Jos' tech scene? Contact us at{" "}
                    <a href="mailto:techinjosnewsletter@gmail.com">
                      TechINJosnewsletter@gmail.com
                    </a>{" "}
                    to discuss your advertising needs and create a customized
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
