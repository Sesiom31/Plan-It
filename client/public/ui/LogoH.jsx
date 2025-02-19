import PropTypes from "prop-types";

function LogoH({ fill = "orange", className = "", classNameText = "" }) {
  return (
    <svg
      viewBox=" 0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
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

      <text x="175" y="135" fill={fill} className={classNameText}>
        PlanIt
      </text>
    </svg>
  );
}

LogoH.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string.isRequired,
  classNameText: PropTypes.string.isRequired,
};

export default LogoH;
