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
          {/* loading */}
          <div class="grid grid-cols-2 gap-2">
            <div
              class="skeleton skeleton-rect mx-auto !w-full"
              style="--rect-h: 150px; --lines: 20;"
            ></div>
            <div
              class="skeleton skeleton-rect"
              style="--rect-h: 150px; --lines: 20;"
            ></div>
          </div>
          {/* loading */}
        </div>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default App;
