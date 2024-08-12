import { A } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import facebook from "../src/assets/facebook.png";
import twitter from "../src/assets/twitterx.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShareButtons from "./components/ShareButtons";

function App() {
  return (
    <MetaProvider>
      <Title>TechInJos Newsletter - www.techinjos.com.ng</Title>
      <Link rel="canonical" href="https://techinjos.com.ng/" />
      <Meta
        name="description"
        content="Your Weekly and Quick Brief of Jos' Tech Ecosystem!"
      />
      <div>
        <Header />
        <div class="pt-20 md:pt-28">
          <div class="w-full md:w-11/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 mx-auto space-y-3">
              <div class="bg-white p-2 md:p-6">
                <div class="text-center border-b-2 border-black pb-4">
                  <h1 class="text-4xl md:text-5xl font-semibold">
                    Tech<span class="text-gray-400">IN</span>Jos
                  </h1>
                  <div class="text-base md:text-base text-black mt-1 leading-tight">
                    #1 Weekly and Quick Brief for Jos' Tech Ecosystem!
                  </div>
                </div>
                <div class="mt-8 space-y-6 text-base">
                  <p>
                    <b>Good morning. It's another Thursday, July 20</b>, and
                    we're covering widespread disruption from a tech outage,
                    nationwide unrest in Bangladesh, and much more. First time
                    reading? Join over 3.5 million readers.{" "}
                    <a href="/">Sign up here</a>.
                  </p>
                  <p>
                    You share. We listen. As always, send us feedback at{" "}
                    <a href="/">hello@join1440.com</a>.
                  </p>
                </div>
              </div>
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-green-300 p-1">Quick Question</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight">
                  Is There Even a Tech Ecosystem in Jos?
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    As we eagerly discuss the growth and potential of Jos' tech
                    scene, a nagging question lingers: Do we actually have a
                    tech ecosystem in Jos?
                  </p>
                  <p>
                    Or are we just a collection of isolated individuals and
                    startups struggling to find common ground and shared
                    purpose?
                  </p>
                  <p>
                    A true ecosystem implies interconnectedness,
                    interdependence, and a sense of collective progress. It's
                    not just about the number of startups or tech events, but
                    about the relationships, collaborations, and knowledge
                    sharing that drive innovation and growth.
                  </p>
                  <p>
                    So, let's ask ourselves: Are we supporting each other, or
                    competing in isolation? - Are we sharing resources,
                    expertise, and opportunities, or hoarding them? - Are we
                    building bridges between industries, academia, and
                    government, or operating in silos?
                  </p>
                  <p>
                    If we're honest, the answer might be uncomfortable. But it's
                    only by confronting this question that we can begin to build
                    a true tech ecosystem in Jos – one that's greater than the
                    sum of its parts.
                  </p>
                </div>
              </div>
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-yellow-300 p-1">Advertisement</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight">
                  Is There Even a Tech Ecosystem in Jos?
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    As we eagerly discuss the growth and potential of Jos' tech
                    scene, a nagging question lingers: Do we actually have a
                    tech ecosystem in Jos?
                  </p>
                  <p>
                    Or are we just a collection of isolated individuals and
                    startups struggling to find common ground and shared
                    purpose?
                  </p>
                  <p>
                    A true ecosystem implies interconnectedness,
                    interdependence, and a sense of collective progress. It's
                    not just about the number of startups or tech events, but
                    about the relationships, collaborations, and knowledge
                    sharing that drive innovation and growth.
                  </p>
                  <p>
                    So, let's ask ourselves: Are we supporting each other, or
                    competing in isolation? - Are we sharing resources,
                    expertise, and opportunities, or hoarding them? - Are we
                    building bridges between industries, academia, and
                    government, or operating in silos?
                  </p>
                  <p>
                    If we're honest, the answer might be uncomfortable. But it's
                    only by confronting this question that we can begin to build
                    a true tech ecosystem in Jos – one that's greater than the
                    sum of its parts.
                  </p>
                </div>
              </div>
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-purple-300 p-1">Feature</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight">
                  How Nengee Transport has successfully won online booking
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    As we eagerly discuss the growth and potential of Jos' tech
                    scene, a nagging question lingers: Do we actually have a
                    tech ecosystem in Jos?
                  </p>
                  <p>
                    Or are we just a collection of isolated individuals and
                    startups struggling to find common ground and shared
                    purpose?
                  </p>
                  <p>
                    A true ecosystem implies interconnectedness,
                    interdependence, and a sense of collective progress. It's
                    not just about the number of startups or tech events, but
                    about the relationships, collaborations, and knowledge
                    sharing that drive innovation and growth.
                  </p>
                  <p>
                    So, let's ask ourselves: Are we supporting each other, or
                    competing in isolation? - Are we sharing resources,
                    expertise, and opportunities, or hoarding them? - Are we
                    building bridges between industries, academia, and
                    government, or operating in silos?
                  </p>
                  <p>
                    If we're honest, the answer might be uncomfortable. But it's
                    only by confronting this question that we can begin to build
                    a true tech ecosystem in Jos – one that's greater than the
                    sum of its parts.
                  </p>
                </div>
              </div>
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-teal-300 p-1">FYI</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight">
                  Tech News Titbits from within Jos
                </h2>
                <div class="space-y-6 text-base">
                  <ul>
                    <li>
                      As we eagerly discuss the growth and potential of Jos'
                      tech scene, a nagging question lingers: Do we actually
                      have a tech ecosystem in Jos?
                    </li>
                    <li>
                      Or are we just a collection of isolated individuals and
                      startups struggling to find common ground and shared
                      purpose?
                    </li>
                    <li>
                      A true ecosystem implies interconnectedness,
                      interdependence, and a sense of collective progress. It's
                      not just about the number of startups or tech events, but
                      about the relationships, collaborations, and knowledge
                      sharing that drive innovation and growth.
                    </li>
                    <li>
                      So, let's ask ourselves: Are we supporting each other, or
                      competing in isolation? - Are we sharing resources,
                      expertise, and opportunities, or hoarding them? - Are we
                      building bridges between industries, academia, and
                      government, or operating in silos?
                    </li>
                    <li>
                      If we're honest, the answer might be uncomfortable. But
                      it's only by confronting this question that we can begin
                      to build a true tech ecosystem in Jos – one that's greater
                      than the sum of its parts.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-fuchsia-300 p-1">Etcetera</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight">
                  More Tech Reads Across Nigeria & Beyound
                </h2>
                <div class="space-y-6 text-base">
                  <ul>
                    <li>
                      A true ecosystem implies interconnectedness,
                      interdependence, and a sense of collective progress. It's
                      not just about the number of startups or tech events, but
                      about the relationships, collaborations, and knowledge
                      sharing that drive innovation and growth.
                    </li>
                    <li>
                      So, let's ask ourselves: Are we supporting each other, or
                      competing in isolation? - Are we sharing resources,
                      expertise, and opportunities, or hoarding them? - Are we
                      building bridges between industries, academia, and
                      government, or operating in silos?
                    </li>
                    <li>
                      If we're honest, the answer might be uncomfortable. But
                      it's only by confronting this question that we can begin
                      to build a true tech ecosystem in Jos – one that's greater
                      than the sum of its parts.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-slate-300 p-1">Support TechINJos</span>
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    <b>Don't keep us a secret.</b> Tell your friends about
                    TechINJos and share this post using the share buttons below.
                  </p>
                  <ShareButtons />
                  <p>
                    <b>Support our team</b> by{" "}
                    <a href="/advertise">advertising with</a> us for as little
                    as 20K Naira per month.
                  </p>
                  <div>
                    <div
                      class="fb-comments"
                      data-href="https://techinjos.netlify.app/"
                      data-width=""
                      data-numposts="7"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="mt-6 py-8 md:mt-20 md:p-20 md:pb-0 text-center text-sm space-y-4">
                <div class="flex justify-center space-x-6">
                  <a href="https://www.facebook.com/TechINJos">
                    <img src={facebook} class="rounded-full h-10" />
                  </a>
                  <a href="https://www.x.com/TechINJos">
                    <img src={twitter} class="rounded-full h-10" />
                  </a>
                </div>
                <div class="p-4">
                  <A href="/">TechInJos Newsletter</A> is an Independent media
                  publication delivering impressive reporting about tech,
                  startups and entrepreneurship in Jos, Plateau state, Nigeria.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-11/12 mx-auto my-10 py-4 flex justify-between border-t border-black">
          <A href="/" class="flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>PREVIOUS</span>
          </A>
          <A href="/" class="flex space-x-1">
            <span>NEXT</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </A>
        </div>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default App;
