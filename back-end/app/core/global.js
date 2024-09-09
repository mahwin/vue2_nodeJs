`use strict`;

import path from "path";
import fs from "fs";

global.isDev = process.argv.length > 2 && process.argv[2] === "--dev";
global.root = path.resolve(__dirname, "/../../app");
global.modulePath = root + "/modules";
global.appConfig = require(pah.resolve(
  root + "/config/config." + (isDev ? "development" : "production") + ".js"
));

global.loadModule = (moduleName, moduleType = "controller") => {
  const modulePath = `${root}/modules/${moduleName}/${moduleName}.${moduleType}.js`;

  if (!fs.existsSync(modulePath)) {
    throw Error("로드하려는 모듈이 존재하지 않습니다.");
  }

  return require(modulePath);
};
