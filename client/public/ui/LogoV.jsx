import PropTypes from "prop-types";

function LogoV({
  fill = "orange",
  width = "auto",
  height = "100%",
  className = "",
}) {
  return (
    <svg
      viewBox=" 0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={width}
      height={height}
      className={className}
    >
      <title>Logo PlanIt</title>

      <path
        d="
        M 65.585 149.149
        A 60,60 0 1 1 149.149,65.585
        A 93,93 0 0 0 65.585,149.149
    "
        fill={fill}
      />

      <path
        d="
        M 79.479 156.382
        A 78,78 0 0 1 156.382,79.479
        A 60,60 0 0 1 159.553,92.688
        A 65,65 0 0 0 92.688,159.553
        A 60,60 0 0 1 79.479,156.382
        "
        fill={fill}
      />

      <path
        d="
        M 108.350 159.416
        A 50,50 0 0 1 159.416,108.350
        A 60,60 0 0 1 151.962,130.00
        A 15,15 0 0 0 130.00,151.962
        A 60,60 0 0 1 108.350,159.416
        "
        fill={fill}
      />
    </svg>
  );
}

LogoV.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};

export default LogoV;
