import axios from "axios";
import { Source } from ".";
import { MediaTabs } from "../../types";

const api_key = process.env.GIPHY_API;
export const Giphy: Source = {
  name: "Giphy",
  logo: "https://giphy.com/static/img/giphy_logo_square_social.png",
  url: "https://giphy.com",
  types: ["gif"],
  search: async (type: MediaTabs, limit: number, q?: string) => {
    try {
      if (type === "gif") {
        const res = await axios.get(
          q
            ? `https://api.giphy.com/v1/gifs/search`
            : `https://api.giphy.com/v1/gifs/trending`,
          {
            params: { q, limit, api_key },
          }
        );
        const data = await res.data;
        if (data.data)
          return data.data.map((p: any) => ({
            icon: p.images.fixed_height_small.url,
            src: p.images.original.url,
          }));
      }
    } catch (e) {
      console.log(e);
    }

    return [];
  },
};