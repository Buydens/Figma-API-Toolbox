console.log("test");

import FigmaRouter from 'FigmaRouter';

const token = process.env.VUE_APP_figmaApiKey;
var r = new FigmaRouter;
r.token = token;
r.tokenCheck();