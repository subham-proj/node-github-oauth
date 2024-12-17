import axios from "axios";
import asyncHandler from "express-async-handler";

export const githubAuth = asyncHandler(async (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo` //scope is optional
  );
});

export const githubCallback = asyncHandler(async (req, res) => {
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: req.query.code,
  };
  const opts = { headers: { accept: "application/json" } };
  const response = await axios.post(
    `https://github.com/login/oauth/access_token`,
    body,
    opts
  );

  res.status(200).json({ data: response.data });
  //in response you'll get access_token that can be used to consume Github APIs
});

export const getUserProfile = asyncHandler(async (req, res) => {
  try {
    const response = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` }, // use the access token you get from the callback
    });

    res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    throw new Error(error);
  }
});
