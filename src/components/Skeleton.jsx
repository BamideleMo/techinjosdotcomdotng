import "css-skeletons";

function Skeleton() {
  return (
    <>
      <div
        class="
    skeleton 
    skeleton-circle-multi-line
  "
        style="
    --c-s: 80px;
    --c-w: 100%;
    --c-pos: top;
    --lines: 3;
  "
      ></div>
      <div
        class="skeleton skeleton-rect mx-auto"
        style="--rect-h: 150px; --c-w: 100%; --lines: 20;"
      ></div>
    </>
  );
}

export default Skeleton;
