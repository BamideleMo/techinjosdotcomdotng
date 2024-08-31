import { A, useParams } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal, createEffect, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import facebook from "../../src/assets/techINJos-facebook.png";
import twitter from "../../src/assets/techINJos-x.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShareButtons from "../components/ShareButtons";
import "css-skeletons";
import ShareButtons2 from "../components/ShareButtons2";
import clap from "../assets/clap.png";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Issue() {
  const params = useParams();
  const [issue, setIssue] = createStore([]);
  const [issueNumber, setIssueNumber] = createSignal();
  const [issueMeta, setIssueMeta] = createSignal();
  const [createdAt, setCreatedAt] = createSignal();
  const [updatedAt, setUpdatedAt] = createSignal();

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
      await getPrevIssue();
      await getNextIssue();
      await getThank();
      // console.log(result.response)
      setIssueNumber(result.response[0].issue_number);
      setIssueMeta(result.response[1].post_topic);
      setCreatedAt(result.response[0].created_at);
      setUpdatedAt(result.response[0].updated_at);
      setIssue(result.response);
    }

    return {
      issue,
    };
  };

  const [thankCompany, setThankCompany] = createSignal(false);
  const [thankURL, setThankURL] = createSignal(false);
  const getThank = async () => {
    const response = await fetch(
      VITE_API_URL + "/open/thank/" + params.issueNumber,
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
    setThankCompany(result.response.company);
    setThankURL(result.response.url);
  };

  const [nextIssue, setNextIssue] = createSignal(false);
  const getNextIssue = async () => {
    var v = parseInt(params.issueNumber) + 1;
    const response = await fetch(VITE_API_URL + "/open/issue/" + v, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    const result = await response.json();
    if (result.response.length > 0) {
      setNextIssue(true);
    }
  };

  const [prevIssue, setPrevIssue] = createSignal(false);
  const getPrevIssue = async () => {
    var v = parseInt(params.issueNumber) - 1;
    const response = await fetch(VITE_API_URL + "/open/issue/" + v, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    const result = await response.json();
    if (result.response.length > 0) {
      setPrevIssue(true);
    }
  };

  const [resource] = createResource(issueDetails);
  return (
    <MetaProvider>
      <Title>
        {issueNumber()
          ? "Issue #" + issueNumber() + " - techINJos Newsletter "
          : "techINJos Newsletter "}
        | www.techinjos.com.ng
      </Title>
      <Link rel="canonical" href="https://techinjos.com.ng/" />
      <Meta name="description" content={issueMeta()} />
      <Meta property="og:locale" content="en_US" />
      <Meta property="og:type" content="article" />
      <Meta
        property="og:title"
        content={"Issue #" + issueNumber() + " - techINJos Newsletter"}
      />
      <Meta property="og:description" content={issueMeta()} />
      <Meta property="og:url" content={window.location.href} />
      <Meta property="og:site_name" content="techINJos" />
      <Meta
        property="article:publisher"
        content="https://www.facebook.com/techINJos"
      />
      <Meta property="article:published_time" content={createdAt()} />
      <Meta property="article:modified_time" content={updatedAt()} />
      <Meta
        property="og:image"
        content="https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/08/Tap-to-view-Story-Template-66.jpg"
      />
      <Meta property="og:image:width" content="1920" />
      <Meta property="og:image:height" content="1080" />
      <Meta property="og:image:type" content="image/jpeg" />
      <Meta name="author" content="Bamidele Moses" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta
        name="twitter:image"
        content="https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/08/Tap-to-view-Story-Template-66-1.jpg"
      />
      <Meta name="twitter:creator" content="@techINJos" />
      <Meta name="twitter:site" content="@techINJos" />
      <Meta name="twitter:label1" content="Written by" />
      <Meta name="twitter:data1" content="Bamidele Moses" />
      <Meta name="twitter:label2" content="Est. reading time" />
      <Meta name="twitter:data2" content="10 minutes" />

      <div>
        <Header />
        <div class="pt-20 md:pt-24">
          <div class="w-full md:w-11/12 mx-auto backgound-color pt-4 md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 2xl:w-5/12 mx-auto">
              <Show
                when={resource.loading}
                fallback={
                  <>
                    <h2 class="text-center text-2xl md:text-4xl uppercase mb-4 font-bold">
                      <span class="block">Weekly Tech Newsletter</span>
                      <span class="block -mt-2 md:-mt-1.5">
                        For + About Jos<b class="text-red-600">.</b>
                      </span>
                    </h2>
                    <div
                      class="bg-white px-2 py-6 md:p-6 flex justify-between 
                    space-x-4 md:space-x-6"
                    >
                      <div class="text-base md:text-base flex space-x-1 w-80">
                        <div class="w-20 md:w-16">
                          <img src={clap} class="w-full" />
                        </div>
                        <div class="leading-tight pt-0.5 md:pt-0.5">
                          Big thanks to{" "}
                          <a
                            target="_blank"
                            href={thankURL()}
                            class="text-red-600 font-semibold hover:border-b border-dashed border-gray-300"
                          >
                            {thankCompany()}
                          </a>{" "}
                          for making this issue possible.
                        </div>
                      </div>
                      <div class="pt-2 md:pt-0">
                        <ShareButtons2 />
                      </div>
                    </div>
                    <For each={resource().issue}>
                      {(post, i) => (
                        <div class="mb-8 bg-white p-2 md:p-6">
                          <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                            <span class={post.post_bg + " " + "p-1"}>
                              {post.post_highlight}
                            </span>
                          </h2>
                          <h1 class="my-4 text-xl md:text-2xl !leading-tight font-bold">
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
                        <span class="bg-orange-300 p-1">Share this Issue</span>
                      </h2>
                      <h1 class="my-2 text-xl md:text-2xl leading-tight font-bold">
                        Like this issue?
                      </h1>
                      <div class="space-y-6 text-base">
                        <p>
                          Share it on Facebook and WhatsApp. Click on a share
                          button below:
                        </p>
                        <ShareButtons text={"ooo"} />
                      </div>
                    </div>

                    <div class="bg-white p-2 md:p-6">
                      <h2 class="text-base md:text-xl border-b-2 border-black pb-2">
                        <span class="bg-blue-300 p-1">
                          Send us your Feedback
                        </span>
                      </h2>
                      <h1 class="my-2 text-xl md:text-2xl leading-tight font-bold">
                        It is invaluable.
                      </h1>
                      <div class="space-y-6 text-base">
                        <p>
                          Whether you have news you'd like us to publish in the
                          next issue, a suggestion, a comment, or a concern, we
                          want to hear from you. Send email now to:{" "}
                          <a
                            href="mailto:techinjosnewsletter@gmail.com"
                            class="name"
                          >
                            techinjosnewsletter@gmail.com
                          </a>
                        </p>
                        <p>
                          <b>Remember:</b>
                          <br /> We'll publish another issue{" "}
                          <b>next Sunday afternoon</b>. See you then!
                        </p>
                      </div>
                    </div>
                  </>
                }
              >
                {/* loading */}
                <div
                  class="skeleton skeleton-rect mx-auto"
                  style="--rect-h: 150px; --c-w: 100%; --lines: 20;"
                ></div>
                {/* loading */}
              </Show>
              {/* fetched ends here */}
              <div
                class="py-16 md:py-20 md:px-14 lg:px-10 md:pb-10 text-center 
                text-sm md:text-base 
              space-y-4"
              >
                <div class="flex justify-center space-x-6">
                  <a
                    href="https://www.facebook.com/techINJos"
                    class="hover:opacity-60"
                    target="_blank"
                  >
                    <img src={facebook} class="rounded-full h-12" />
                  </a>
                  <a
                    href="https://www.x.com/techINJos"
                    class="hover:opacity-60"
                    target="_blank"
                  >
                    <img src={twitter} class="rounded-full h-12" />
                  </a>
                </div>
                <div class="p-4">
                  <A href="https://techinjos.com.ng" class="name">
                    techINJos
                  </A>{" "}
                  is an independent weekly online newsletter reporting tech,
                  digital transformation, and tech-driven entrepreneurship for,
                  from and about <b>Jos</b> - <b>Plateau state</b>.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-11/12 mx-auto my-10 py-4 flex justify-between border-t border-black">
          <Show
            when={prevIssue()}
            fallback={
              <span class="flex space-x-1 cursor-not-allowed text-gray-200">
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
              </span>
            }
          >
            <span
              onClick={() => {
                window.location.replace(
                  "/issue/" + (parseInt(params.issueNumber) - 1)
                );
              }}
              class="flex space-x-1 cursor-pointer hover:text-red-600"
            >
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
            </span>
          </Show>
          <Show
            when={nextIssue()}
            fallback={
              <span class="flex space-x-1 cursor-not-allowed text-gray-200">
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
              </span>
            }
          >
            <span
              onClick={() => {
                window.location.replace(
                  "/issue/" + (parseInt(params.issueNumber) + 1)
                );
              }}
              class="flex space-x-1 cursor-pointer hover:text-red-600"
            >
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
            </span>
          </Show>
        </div>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Issue;
