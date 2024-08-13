import { A } from "@solidjs/router";
import Logo from "./Logo";

function Footer() {
  return (
    <div class="bg-black p-10 mt-10 lg:p-20 text-white text-sm text-center space-y-6">
      <div class="space-x-4 text-center text-gray-400">
        <A href="/about">About us</A>
        <b>.</b>
        <A href="/advertise">Advertise with us</A>
      </div>
      <div>
        <Logo />
        <div class="text-gray-400 -mt-1">www.techinjos.com.ng</div>
      </div>
      <div>
        &copy; TechINJos, Media - 2024. <br class="md:hidden" />
        All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
