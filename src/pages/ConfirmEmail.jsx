import { useSearchParams } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeVerificationForm from "../components/CodeVerificationForm";
import { createSignal } from "solid-js";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function ConfirmEmail() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [emailSent, setEmailSent] = createSignal(false);
  const sendEmail = async () => {
    try {
      const response = await fetch(VITE_API_URL + "/auth/send-email", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: searchParams.e,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setEmailSent(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MetaProvider>
      <Title>
        Confirm your email on Tech in Jos Newsletter | www.techinjos.com.ng
      </Title>
      <Link rel="canonical" href="https://techinjos.com.ng/" />
      <Meta
        name="description"
        content="Confirm your email on Tech in Jos Newsletter"
      />
      <div>
        <Header />
        <Show when={emailSent()}>
          <div class="z-50 bg-black w-screen h-screen bg-opacity-95 fixed flex items-center top-0 bottom-0 left-0 right-0">
            <div class="rounded w-11/12 md:w-96 mx-auto text-sm bg-white p-4 border-b-8 border-yellow-400">
              <h2 class="text-lg text-center text-slate-800 font-bold">
                Email Resent Successfully
              </h2>
              <p class="py-3 border-y-2 my-3">
                The Verification Code has been resent to <b>{searchParams.e}</b>{" "}
                successfully. Check your Inbox or Spam folder please.
              </p>
              <div class="text-center">
                <button
                  onClick={() => {
                    setEmailSent(!emailSent());
                  }}
                  class="bg-blue-800 text-white text-xs p-3 rounded-md"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </Show>
        <div class="pt-24 md:pt-28">
          <div class="w-full md:w-11/12 2xl:w-9/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-7/12 2xl:w-6/12 mx-auto space-y-3">
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-fuchsia-400 p-1">Welcome!</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-bold">
                  Please confirm your email.
                </h2>
                <div class="space-y-6 text-base">
                  <p>Hi,</p>
                  <p>Thanks for your interest to read techINJos Newsletter.</p>
                  <p>
                    Because this is the first time you're using your email{" "}
                    <a href={"mailto:" + searchParams.e}>{searchParams.e}</a> on
                    this website, we need to confirm it is yours. Enter the
                    confirmation code sent to the email in the box below:
                  </p>
                  <CodeVerificationForm whichIssue={searchParams.i} />
                  <p>
                    <span class="text-xs block">
                      Didn't get the email with a confirmation code? Check your
                      SPAM folder or click link below to resend:
                    </span>
                    <span
                      onClick={() => {
                        sendEmail();
                      }}
                      class="font-semibold text-red-600 hover:opacity-60 cursor-pointer"
                    >
                      Resend Confirmation Code
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default ConfirmEmail;
