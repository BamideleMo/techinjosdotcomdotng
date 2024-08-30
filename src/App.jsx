import { A, useNavigate, useParams, useSearchParams } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal, createEffect, createResource } from "solid-js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "css-skeletons";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function App() {
  const navigate = useNavigate();
  const latestIssue = async () => {
    try {
      const response = await fetch(VITE_API_URL + "/open/latest-issue", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      });
      const result = await response.json();
      if (result.success) {
        navigate("/issue/" + result.response[0].issue_number, {
          replace: true,
        });
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
      <Title>techInJos Newsletter - www.techinjos.com.ng</Title>
      <Link rel="canonical" href="https://techinjos.com.ng/" />
      <Meta
        name="description"
        content="Your Weekly and Quick Brief of Jos' Tech Ecosystem!"
      />
      <div>
        <Header />
        <div class="pt-20 md:pt-24">
          <div class="w-full md:w-11/12 mx-auto backgound-color pt-4 md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-6/12 2xl:w-5/12 mx-auto space-y-5">
              {/* loading */}
              <div
                class="skeleton skeleton-rect mx-auto"
                style="--rect-h: 150px; --c-w: 100%; --lines: 20;"
              ></div>
              {/* loading */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default App;
