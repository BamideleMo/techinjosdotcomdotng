import { A, useNavigate, useParams, useSearchParams } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal, createEffect, createResource } from "solid-js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import screen from "./assets/techINJos-mobile-screen.png";
import Skeleton2 from "./components/Skeleton2";
import Logo from "./components/Logo";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function App() {
  const navigate = useNavigate();
  const [issue, setIssue] = createSignal();
  const latestIssue = async () => {
    try {
      const response = await fetch(VITE_API_URL + "/open/latest-post", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      });
      const result = await response.json();
      if (result.success) {
        setIssue(result.response[0].issue_number);
        // navigate("/issue/" + result.response[0].issue_number, {
        //   replace: true,
        // });
      }
    } catch (error) {
      console.error(error);
    }
  };

  createEffect(() => {
    latestIssue();
  });
  return (
    <MetaProvider>
      <Title>Tech in Jos Newsletter | www.techinjos.com.ng</Title>
      <Meta
        name="description"
        content="Tech newsletter focused on Jos, Plateau state!"
      ></Meta>
      <Show
        when={!issue()}
        fallback={
          <>
            <Header />
            <div class="pt-20 md:pt-24">
              <div class="w-full md:w-11/12 mx-auto bg-white pt-4 md:pt-12">
                <div class="w-10/12 md:w-8/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2">
                  <div class="text-center lg:text-left">
                    <h1 class="uppercase">Weekly Newsletter</h1>
                    <h1 class="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-normal drop-shadow-lg">
                      Focused on the Tech Ecosystem in Jos-Plateau state.
                    </h1>
                    <div class="my-6 text-lg">
                      The most impactful stories of the week, distilled to keep
                      you informed of happenings in the tech scene in
                      Jos-Plateau state.
                    </div>
                    <div class="my-12 lg:my-4 space-x-3">
                      <A
                        href={"/issue/" + issue()}
                        class="bg-red-600 text-white py-4 px-4 rounded hover:opacity-60"
                      >
                        Read Latest Issue
                      </A>
                    </div>
                  </div>
                  <div class="overflow-hidden -mb-10 h-96 bg-white">
                    <img
                      src={screen}
                      alt="tech in Jos mobile display"
                      class="lg:float-right"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        }
      >
        {/* loading */}
        <div class="text-3xl lg:text-4xl font-bold">
          <div class="w-fit mx-auto mt-60 animate-bounce">
            tech<span class="text-red-600">IN</span>Jos
          </div>
        </div>
        {/* loading */}
      </Show>
    </MetaProvider>
  );
}

export default App;
