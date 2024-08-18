import { A, useParams } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal, createEffect, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import facebook from "../../src/assets/facebook.png";
import twitter from "../../src/assets/twitterx.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShareButtons from "../components/ShareButtons";
import Loading from "../components/Loading";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Issue() {
  const params = useParams();
  const [issue, setIssue] = createStore([]);
  const [issueNumber, setIssueNumber] = createSignal();
  const [issueMeta, setIssueMeta] = createSignal();

  const issueDetails = async () => {
    const response = await fetch(
      VITE_API_URL + "/open/issue/" + params.issueNumber,
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    );
    const result = await response.json();
    if (result.success) {
      console.log(result.response[1]);
      setIssueNumber(result.response[0].issue_number);
      setIssueMeta(result.response[1].post_topic);
      setIssue(result.response);
    }

    return {
      issue,
    };
  };

  const [resource] = createResource(issueDetails);
  return (
    <MetaProvider>
      <Title>
        Issue #{issueNumber()} techInJos Newsletter - www.techinjos.com.ng
      </Title>
      <Link rel="canonical" href="https://techinjos.com.ng/" />
      <Meta name="description" content={issueMeta()} />
      <div>
        <Header />
        <div class="pt-20 md:pt-24">
          <div class="w-full md:w-11/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 mx-auto space-y-5">
              <Show
                when={resource.loading}
                fallback={
                  <>
                  <For each={resource().issue}>
                    {(post, i) => (
                      <div class="bg-white p-2 md:p-6">
                        <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                          <span class={post.post_bg + " " + "p-1"}>
                            {post.post_highlight}
                          </span>
                        </h2>
                        <h1 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                          {post.post_topic}
                        </h1>
                        <div
                          class="space-y-6 text-base"
                          innerHTML={post.conversation_text}
                        ></div>
                      </div>
                    )}
                  </For>

              <div class="bg-white p-2 md:p-6">
                <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-orange-300 p-1">Support techINJos</span>
                </h2>
                <h1 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                  Don't keep us a secret
                </h1>
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
                <h1 class="my-2 text-xl md:text-2xl leading-tight font-semibold">
                  It is invaluable.
                </h1>
                <div class="space-y-6 text-base">
                  <p>
                    Whether you have news you'd like us to publish in our next
                    issue, a suggestion, a comment, or a concern, we want to
                    hear from you. Send a mail to:{" "}
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
                  </>
                }
              >
                <Loading />
              </Show>
              {/* fetched ends here */}
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

export default Issue;
