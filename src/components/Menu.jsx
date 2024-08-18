import { A } from "@solidjs/router";

function Menu() {
  return (
    <ul
      class="flex flex-col mx-12 py-6 text-xl text-center space-y-8 
    lg:py-0 lg:text-left lg:space-y-0 lg:mx-0 lg:flex-row lg:space-x-6 lg:text-sm mt-3"
    >
      <li>
        <A href="/advertise" class="hover:opacity-60">
          Advertise
        </A>
      </li>
      <li>
        <A href="/about" class="hover:opacity-60">
          About
        </A>
      </li>
      <li class="pt-3 lg:pt-0">
        <a
          target="_blank"
          href="https://whatsapp.com/channel/0029VaEVLBHBfxoG5GZxz72v"
          class="p-2 border border-black rounded-full hover:bg-black hover:text-white"
        >
          WhatsApp Channel
        </a>
      </li>
      <li>
        <A href="/a/login" class="hover:opacity-60">
          Login
        </A>
      </li>
    </ul>
  );
}

export default Menu;
