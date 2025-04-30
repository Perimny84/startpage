// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "home",
      background_url: `src/img/banners/cbg-4.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
            {
              name: "Pinterest",
              url: "https://br.pinterest.com/,
              icon: "brand-pinterest",
              icon_color: palette.red,
            },
            {
              name: "Cleanup-images",
              url: "https://cleanup.pictures/",
              icon: "layout-collage",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: palette.green,
            },
            {
              name: "deepl",
              url: "https://www.deepl.com/pt-BR/translator",
              icon: "transform",
              icon_color: palette.text,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "github",
              url: "https://github.com/ashish0kumar",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "remove-bg",
              url: "https://www.remove.bg/pt-br",
              icon: "file-type-png",
              icon_color: palette.yellow,
            },
            {
              name: "What the font?",
              url: "https://www.myfonts.com/pages/whatthefont",
              icon: "letter-case-toggle",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "Wall heaven",
              url: "https://wallhaven.cc/",
              icon: "photo",
              icon_color: palette.blue,
            },
            {
              name: "Monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: palette.red,
            },
            {
              name: "Cursou",
              url: "https://www.cursou.com.br/",
              icon: "book",
              icon_color: palette.lavender,
            },
          ]
        },
        {
          name: "",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.teal,
            },
            {
              name: "Referências",
              url: "https://same.energy/",
              icon: "north-star",
              icon_color: palette.peach,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com/app",
              icon: "flare",
              icon_color: palette.blue,
            },
          ]
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
