import "css-skeletons";

function Skeleton2() {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div
          class="skeleton skeleton-line"
          style="
    --lines: 10;
    --c-w: 100%;
  "
        ></div>
      </div>
      <div class="overflow-hidden max-h-48 md:max-h-72 lg:max-h-96 -mb-10">
        <div
          class="skeleton skeleton-image mx-auto lg:float-right"
          style="
    --i-w: 250px;
    --c-bg: #f8f7fc;
  "
        ></div>
      </div>
    </div>
  );
}

export default Skeleton2;
