// pages/api/instagram.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// Simple in-memory cache
let cachedPosts: any[] = [];
let cacheTime = 0;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Return cached posts if not expired
  if (cachedPosts.length > 0 && Date.now() - cacheTime < CACHE_DURATION) {
    return res.status(200).json(cachedPosts);
  }

  try {
    const options = {
      method: "GET",
      url: "https://instagram120.p.rapidapi.com/user/media",
      params: { username: "yeshwanthc18" }, // replace with your username
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY, // store your key in .env
        "X-RapidAPI-Host": "instagram120.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);

    // Sometimes the API returns data inside `response.data.data`
    const posts = response.data?.data || [];

    // Cache posts
    cachedPosts = posts;
    cacheTime = Date.now();

    res.status(200).json(posts);
  } catch (error: any) {
    console.error("Instagram API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch Instagram posts" });
  }
}
