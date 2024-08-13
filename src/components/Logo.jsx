import { A } from "@solidjs/router";

function Logo() {
  return (
    <div class="text-3xl lg:text-4xl font-bold pt-1.5 lg:pt-0">
      <A href="/">
        tech<span class="text-red-600">IN</span>Jos
      </A>
    </div>
  );
}

export default Logo;
