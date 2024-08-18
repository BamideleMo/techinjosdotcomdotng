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
      <Title>techInJos Newsletter - www.techinjos.com.ng</Title>
      <Link rel="canonical" href="https://techinjos.com.ng/" />
      <Meta
        name="description"
        content="Your Weekly and Quick Brief of Jos' Tech Ecosystem!"
      />
      <div>
        <Header />
        <div class="pt-20 md:pt-24">
          <div class="w-full md:w-11/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 mx-auto space-y-5">
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-purple-300 p-1">Issue #1</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                  Good afternoon. It's another Sunday, Aug. 18, 2024.
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    We’re asking about Jos’ tech ecosystem, reporting the
                    outcome of our quick survey, covering the Musk-Trump X
                    interview “flop” plus what it means for tech creators and
                    much more. First time reading? Join our WhatsApp channel so
                    you never get to miss any other issue.{" "}
                    <a href="/">Join here</a>.
                  </p>
                  <p>
                    You share. We listen. As always, send us feedback at{" "}
                    <a href="/">techinjosnewsletter@gmail.com</a>.
                  </p>
                </div>
              </div>
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-green-300 p-1">Quick Question</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
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
                <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-yellow-300 p-1">Advertisement</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                  Are you tired of fake or low-quality smartwatches?
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    Stop wearing counterfeit smartwatches that compromise on
                    quality and functionality!
                  </p>
                  <p>
                    At "<b>Original Smartwatch Plug, Jos</b>", we offer a wide
                    range of genuine smartwatches from top brands, ensuring you
                    get the best value for your money.
                  </p>
                  <img src="/test.png" />
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
                <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-cyan-300 p-1">Feature</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
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
                <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-pink-400 p-1">Bytes Within</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                  Tech News Titbits from within Jos
                </h2>
                <div class="space-y-6 text-base">
                  <ul>
                    <li>
                      <b>Share Your Story, Shape the Narrative:</b> As we
                      eagerly discuss the growth and potential of Jos' tech
                      scene, a nagging question lingers: Do we actually have a
                      tech ecosystem in Jos?
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
                <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-fuchsia-300 p-1">Etcetera</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
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
                <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-orange-300 p-1">Support techINJos</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                  Don't keep us a secret
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    Tell your friends about TechINJos and share this post using
                    the share buttons below.
                  </p>
                  <ShareButtons />
                </div>
              </div>

              <div class="bg-white p-2 md:p-6">
                <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-slate-300 p-1">Send us your Feedback</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                  It is invaluable.
                </h2>
                <div class="space-y-6 text-base">
                  <p>
                    Whether you have a suggestion, a comment, or a concern, we
                    want to hear from you. Send a mail to:{" "}
                    <a href="mailto:techinjosnewsletter@gmail.com">
                      techinjosnewsletter@gmail.com
                    </a>
                  </p>
                  <p>
                    <b>Don't forget:</b>
                    <br /> We publish a fresh issue{" "}
                    <b>every Sunday afternoon</b>. See you again.
                  </p>
                </div>
              </div>
              <div class="py-16 md:py-20 md:px-12 md:pb-10 text-center text-sm space-y-4">
                <div class="flex justify-center space-x-6">
                  <a href="https://www.facebook.com/techINJos">
                    <img src={facebook} class="rounded-full h-10" />
                  </a>
                  <a href="https://www.x.com/techINJos">
                    <img src={twitter} class="rounded-full h-10" />
                  </a>
                </div>
                <div class="p-4">
                  <A href="https://techinjos.com.ng">techINJos</A> is an
                  independent online newsletter delivering impressive reporting
                  about tech, startups and entrepreneurship for and about the
                  Tech Ecosystem, in Jos - Plateau state.
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
