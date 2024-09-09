const App = {
  express: null,
  isDev: false,
  config: {},
};

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import cookieParser from "cookie-parser";

process.env.TZ = "Asia/Seoul";

Array.express = express();
