import { A } from "@solidjs/router";
import facebook from "../../src/assets/facebook.png";
import whatsapp from "../../src/assets/whatsapp.png";

function ShareButtons(props) {
  const fbShare = () => {
    var fb_url = window.location.href;
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + fb_url,
      "_blank"
    );
  };
  const waShare = () => {
    var wa_url = window.location.href;
    window.open("https://wa.me/?text=" + wa_url, "_blank");
  };
  return (
    <div class="mt-4 text-center py-6 text-xs lg:text-sm flex space-x-3 md:space-x-6 font-semibold w-fit mx-auto">
      <span
        onClick={() => {
          fbShare();
        }}
        class="bg-gray-50 flex space-x-1 cursor-pointer md::space-x-2 w-fit border border-black p-1 lg:p-2 hover:opacity-60"
      >
        <span>
          <img src={facebook} class="w-7 md:w-7" />
        </span>
        <span class="mt-1.5 md:mt-2 lg:mt-1">Share to Facebook</span>
      </span>
      <span
        onClick={() => {
          waShare();
        }}
        class="bg-gray-50 flex space-x-1 cursor-pointer md:space-x-2 w-fit border border-black p-1 lg:p-2 hover:opacity-60"
      >
        <span>
          <img src={whatsapp} class="w-7 md:w-7" />
        </span>
        <span class="mt-1.5 md:mt-2 lg:mt-1">Share to WhatsApp</span>
      </span>
    </div>
  );
}

export default ShareButtons;
