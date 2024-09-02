import { A } from "@solidjs/router";
import facebook from "../assets/techINJos-facebook.png";
import twitter from "../assets/techINJos-x.png";

function Menu() {
  return (
    <ul
      class="flex flex-col mx-6 py-6 text-xl text-center space-y-8 
    lg:py-0 lg:text-left lg:space-y-0 lg:mx-0 lg:flex-row lg:space-x-6 lg:text-sm mt-3"
    >
      <li>
        <A href="/about" class="hover:opacity-60">
          About
        </A>
      </li>
      <li>
        <A href="/advertise" class="hover:opacity-60">
          Advertise
        </A>
      </li>
      <li class="pt-3 lg:pt-0">
        <a
          target="_blank"
          href="https://whatsapp.com/channel/0029VaEVLBHBfxoG5GZxz72v"
          class="p-2 border border-black rounded-full hover:bg-black hover:text-white"
        >
          Join WhatsApp Channel
        </a>
      </li>
      <li class="flex lg:hidden justify-center space-x-6">
        <a
          href="https://www.facebook.com/techINJos"
          class="hover:opacity-60"
          target="_blank"
        >
          <img src={facebook} class="rounded-full h-10" />
        </a>
        <a
          href="https://www.x.com/techINJos"
          class="hover:opacity-60"
          target="_blank"
        >
          <img src={twitter} class="rounded-full h-10" />
        </a>
      </li>
    </ul>
  );
}

export default Menu;
