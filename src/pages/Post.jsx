import { A, useParams, useSearchParams } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal, createEffect, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import whatsappShare from "../../src/assets/whatsapp.png";
import twitterShare from "../../src/assets/x.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skeleton from "../components/Skeleton";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Post() {
  const params = useParams();
  const [post, setPost] = createStore([]);
  const [topic, setTopic] = createSignal();

  const postDetails = async () => {
    const response = await fetch(VITE_API_URL + "/open/post/" + params.id, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    const result = await response.json();
    if (result.success) {
      setTopic(result.response.post_topic);
      setPost(result.response);
    }

    return {
      post,
    };
  };

  const [resource] = createResource(postDetails);
  return (
    <MetaProvider>
      <Title>{topic() ? topic() : "Loading"} - techINJos Newsletter</Title>
      <Meta name="description" content="Post on techINJos Newsletter" />
      <div>
        <Header />
        <div class="pt-20 md:pt-24">
          <div class="w-full md:w-11/12 mx-auto backgound-color pt-0 md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 2xl:w-5/12 mx-auto">
              <Show
                when={resource.loading}
                fallback={
                  <>
                    <div class=" bg-white p-2 md:p-6">
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
                    <div class="mb-12 border-t border-gray-200 bg-white px-2 md:px-6 py-4 text-xs flex justify-between">
                      <div></div>
                      <div class="flex space-x-4">
                        <a
                          target="_blank"
                          href={
                            "https://twitter.com/intent/tweet?text=" +
                            encodeURI(
                              post.shareable +
                                " 🤖 https://techinjos.com.ng/post/" +
                                post.id
                            )
                          }
                          class="flex space-x-1 bg-gray-100 border border-gray-200 hover:opacity-60 text-black p-1 rounded"
                        >
                          <div>
                            <img src={twitterShare} class="w-7" />
                          </div>
                          <div class="pt-1.5">Share on X</div>
                        </a>
                        <a
                          target="_blank"
                          href={
                            "https://wa.me/?text=" +
                            encodeURI(
                              post.shareable +
                                " 🤖 https://techinjos.com.ng/post/" +
                                post.id
                            )
                          }
                          class="flex space-x-1 bg-gray-100 border border-gray-200 hover:opacity-60 text-black p-1 rounded"
                        >
                          <div class="pt-0.5">
                            <img src={whatsappShare} class="w-6" />
                          </div>
                          <div class="pt-1.5">Share on WhatsApp</div>
                        </a>
                      </div>
                    </div>
                    <div class="p-2 lg:p-0">
                      <div class="bg-blue-100 border border-blue-200 p-6 rounded shadow-lg">
                        <p>
                          This post is a section of{" "}
                          <b>Issue #{post.issue_number}</b> of the techINJos
                          Weekly Newsletter. See the newsletter:{" "}
                          <A href={"/issue/" + post.issue_number}>Click here</A>
                        </p>
                      </div>
                    </div>
                  </>
                }
              >
                {/* loading */}
                <Skeleton />
                {/* loading */}
              </Show>
              {/* fetched ends here */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Post;
