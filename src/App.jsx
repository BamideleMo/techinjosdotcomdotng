import { A, useNavigate } from "@solidjs/router";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { createSignal } from "solid-js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import screen from "./assets/techINJos-mobile-screen.png";
import Popup from "./components/Popup";
import TextInput from "./components/TextInput";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().email("*Invalid"),
  password: z.string().min(4, "*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function App() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const navigate = useNavigate();

  const [fetching, setFetching] = createSignal(false);
  const [showPopup, setShowPopup] = createSignal(false);

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    const now = new Date();
  };

  const latestIssue = async () => {
    setFetching(true);
    if (localStorage.getItem("TIJUser")) {
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
    } else {
      setShowPopup(true);
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
      {/* <Show when={!showPopup()}>
        <Popup />
      </Show> */}
      <Header />
      <div class="pt-20 md:pt-24">
        <div class="w-full md:w-11/12 mx-auto bg-white pt-4 md:pt-12">
          <div class="w-11/12 md:w-full mx-auto grid grid-cols-1 lg:grid-cols-3">
            <div class="lg:w-9/12 col-span-2 text-center lg:text-left lg:pt-10">
              <h1 class="uppercase">Weekly Newsletter</h1>
              <h1 class="text-3xl md:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg font-bold">
                Focused on the Tech Ecosystem in Jos, <br class="md:hidden" />
                Plateau State.
              </h1>
              <div class="my-6 md:px-8 lg:px-0 text-lg lg:text-2xl">
                The Tech Ecosystem in Jos-Plateau State is Growing. Don't be
                left behind!
              </div>
              <div class="mb-12 lg:my-4">
                <Show
                  when={fetching()}
                  fallback={
                    <span
                      onClick={() => {
                        latestIssue();
                      }}
                      class="mx-auto font-bold lg:mx-0 w-fit cursor-pointer bg-red-600 text-white h-12 border border-red-600 text-center items-center flex px-4 rounded hover:bg-white hover:text-red-600"
                    >
                      Read Latest Newsletter
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
            <div class="overflow-hidden mx-auto w-72 md:w-96">
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
    </MetaProvider>
  );
}

export default App;
