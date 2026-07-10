const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "../src/tokens/figma-tokens.json");
const outputPath = path.join(__dirname, "../src/styles/tokens.css");

const tokens = JSON.parse(fs.readFileSync(inputPath, "utf8"));

function px(value) {
  return `${value}px`;
}

const css = `:root {
  /* Colors */
  --color-sand: ${tokens.Primitive.Sand.$value.hex};
  --color-stone: ${tokens.Primitive.Stone.$value.hex};
  --color-gold: ${tokens.Primitive.Gold.$value.hex};
  --color-charcoal: ${tokens.Primitive.Charcoal.$value.hex};
  --color-white: ${tokens.Primitive.White.$value.hex};

  --color-forest-500: ${tokens.Primitive.Forest["500"].$value.hex};
  --color-forest-700: ${tokens.Primitive.Forest["700"].$value.hex};
  --color-forest-900: ${tokens.Primitive.Forest["900"].$value.hex};

  /* Spacing */
  --space-0: ${px(tokens.Number.Space["0"].$value)};
  --space-1: ${px(tokens.Number.Space["1"].$value)};
  --space-2: ${px(tokens.Number.Space["2"].$value)};
  --space-3: ${px(tokens.Number.Space["3"].$value)};
  --space-4: ${px(tokens.Number.Space["4"].$value)};
  --space-5: ${px(tokens.Number.Space["5"].$value)};
  --space-6: ${px(tokens.Number.Space["6"].$value)};
  --space-7: ${px(tokens.Number.Space["7"].$value)};
  --space-8: ${px(tokens.Number.Space["8"].$value)};
  --space-9: ${px(tokens.Number.Space["9"].$value)};
  --space-10: ${px(tokens.Number.Space["10"].$value)};
  --space-11: ${px(tokens.Number.Space["11"].$value)};

  /* Radius */
  --radius-none: ${px(tokens.Radius.None.$value)};
  --radius-small: ${px(tokens.Radius.Small.$value)};
  --radius-medium: ${px(tokens.Radius.Medium.$value)};
  --radius-large: ${px(tokens.Radius.Large.$value)};
  --radius-xl: ${px(tokens.Radius.XL.$value)};
  --radius-xxl: ${px(tokens.Radius.XXL.$value)};
  --radius-full: ${px(tokens.Radius.Full.$value)};
}
`;

fs.writeFileSync(outputPath, css);

console.log("✅ tokens.css generated!");
