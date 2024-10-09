import { A, useNavigate } from "@solidjs/router";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { createSignal } from "solid-js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import screen from "./assets/techINJos-mobile-screen.png";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function App() {
  const navigate = useNavigate();

  const [fetching, setFetching] = createSignal(false);
  const latestIssue = async () => {
    setFetching(true);
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
        navigate(
          "/newsletter/" +
            result.response[0].issue_number +
            "/" +
            result.response[0].slug,
          {
            replace: true,
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  // createEffect(() => {
  //   latestIssue();
  // });
  return (
    <MetaProvider>
      <Title>Tech in Jos Newsletter | www.techinjos.com.ng</Title>
      <Meta
        name="description"
        content="Tech newsletter focused on Jos, Plateau state!"
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <Header />
      <div class="pt-20 md:pt-24">
        <div class="w-full md:w-11/12 mx-auto bg-white pt-4 md:pt-12">
          <div
            class="w-10/12 md:w-8/12 lg:w-10/12 mx-auto grid grid-cols-1 
          lg:grid-cols-2 lg:py-10"
          >
            <div class="text-center lg:text-left lg:pt-10">
              <h1 class="uppercase">Weekly Newsletter</h1>
              <h1
                class="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 
               drop-shadow-lg font-bold"
              >
                Focused on the Tech Ecosystem in Jos, <br class="md:hidden" />
                Plateau State.
              </h1>
              <div class="my-6 md:px-8 lg:px-0 text-lg">
                The most impactful stories of the week, distilled to keep you
                informed of happenings in the tech scene in Jos-Plateau state.
              </div>
              <div class="mb-12 lg:my-4 space-x-3">
                <Show
                  when={fetching()}
                  fallback={
                    <span
                      onClick={() => {
                        latestIssue();
                      }}
                      class="mx-auto font-bold lg:mx-0 w-fit cursor-pointer bg-red-600 text-white h-12 border border-red-600 text-center items-center flex px-4 rounded hover:bg-white hover:text-red-600"
                    >
                      Read the Latest Newsletter
                    </span>
                  }
                >
                  <span class="mx-auto lg:mx-0 w-fit space-x-6 cursor-wait border border-red-600 bg-red-600 opacity-60 text-white h-12 items-center flex px-4 rounded">
                    <span>Fetching Newsletter..</span>
                    <span class="animate-spin mx-auto w-4 h-4 bg-transparent border-2 border-white rounded">
                      &nbsp;
                    </span>
                  </span>
                </Show>
              </div>
            </div>
            <div class="overflow-hidden h-72 md:h-96">
              <div class="bg-white overflow-hidden w-72 mx-auto md:w-96 h-72 md:h-96 border-b border-red-600 px-2 lg:float-right">
                <img
                  src={screen}
                  alt="tech in Jos mobile display"
                  class="w-fit mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default App;
