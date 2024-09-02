import { A, useParams, useSearchParams } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal, createEffect, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import facebook from "../../src/assets/techINJos-facebook.png";
import twitter from "../../src/assets/techINJos-x.png";
import whatsapp from "../../src/assets/whatsapp.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skeleton from "../components/Skeleton";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Post() {
  const params = useParams();
  const [post, setPost] = createStore([]);

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
      console.log(result.response);
    }

    return {
      post,
    };
  };

  const [resource] = createResource(postDetails);
  return (
    <MetaProvider>
      <Title>
        {params.issueNumber ? "Issue #" + params.issueNumber + " -" : "Read "}{" "}
        techINJos Newsletter
      </Title>
      <div>
        <Header />
        <div class="pt-20 md:pt-24">
          <div class="w-full md:w-11/12 mx-auto backgound-color pt-4 md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 2xl:w-5/12 mx-auto">
              <Show when={resource.loading} fallback={<>x</>}>
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
