import { A } from "@solidjs/router";
import facebook from "../../src/assets/facebook.png";
import whatsapp from "../../src/assets/whatsapp.png";

function ShareButtons2(props) {
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
    <div class="flex space-x-3 md:space-x-4">
      <span
        onClick={() => {
          fbShare();
        }}
        class="opacity-60 cursor-pointer"
      >
        <img src={facebook} class="w-8 md:w-8" />
      </span>
      <span
        onClick={() => {
          waShare();
        }}
        class="opacity-60 cursor-pointer"
      >
        <img src={whatsapp} class="w-8 md:w-8" />
      </span>
    </div>
  );
}

export default ShareButtons2;
