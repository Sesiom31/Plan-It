function hexToRgb(hex) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const bigint = parseInt(hex, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

function getLuminance({ r, g, b }) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

export function backgroundColorIsLight(hex) {
  const rgb = hexToRgb(hex);
  const luminance = getLuminance(rgb);

  return luminance > 186;
}
