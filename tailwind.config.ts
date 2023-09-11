/* eslint-disable prettier/prettier */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        profile: "max-content 1fr min-content",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },

      maxWidth: {
        app: "700px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
