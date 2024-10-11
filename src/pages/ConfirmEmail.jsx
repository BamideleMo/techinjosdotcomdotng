import { useSearchParams } from "@solidjs/router";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeVerificationForm from "../components/CodeVerificationForm";

function ConfirmEmail() {
  const [searchParams, setSearchParams] = useSearchParams();

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
        <div class="pt-24 md:pt-28">
          <div class="w-full md:w-11/12 2xl:w-9/12 mx-auto backgound-color md:p-12 lg:p-12">
            <div class="content md:w-10/12 lg:w-9/12 2xl:w-6/12 mx-auto space-y-3">
              <div class="bg-white p-2 md:p-6">
                <h2 class="text-lg md:text-xl border-b-2 border-black pb-2">
                  <span class="bg-fuchsia-400 p-1">Glad to have you</span>
                </h2>
                <h2 class="my-2 text-xl md:text-2xl leading-tight font-bold">
                  Confirm your email.
                </h2>
                <div class="space-y-6 text-base">
                  <p>Hi,</p>
                  <p>Thanks for your interest to read techINJos Newsletter.</p>
                  <p>
                    I noticed this is the first time you're using your email{" "}
                    <a href={"mailto:" + searchParams.e}>{searchParams.e}</a> on
                    this website.
                  </p>
                  <p>
                    We need you to prove that you're human by entering the
                    confirmation code sent to the email in the box below:
                  </p>
                  <CodeVerificationForm />
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
