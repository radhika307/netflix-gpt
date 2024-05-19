export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_small.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const gptResults = [
  {
    Retro: {
      message: {
        content:
          "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan",
      },
    },
    Comedy: {
      message: {
        content: "Munna Bhai MBBS, 3 Idiots, Dhamaal, Hera Pheri, Chachi 420",
      },
    },
    Horror: {
      message: {
        content: "Raaz, Raat, Pari, Bhoot, Stree",
      },
    },
  },
];
