'use strict';
var FigmaRouter = require("./src/FigmaRouter");

function FigmaApiToolkit(token, fileId) {
    if (typeof token === 'undefined') {
        throw "token is required to connect to the Figma API";
    }
    if (typeof fileId === 'undefined') {
        throw "fileId is required to target the correct file via the Figma API";
    }
    if (!(this instanceof FigmaApiToolkit)) {
      return new FigmaApiToolkit(token, fileId);
    }
    this.token = token;
    this.fileId = fileId;
  };
  
  FigmaApiToolkit.prototype.getFile = async function() {
    let result = await FigmaRouter.getFile(this.token, this.fileId);
    return await result.json();
  };
  
  //FigmaApiToolkit(process.env.figmaApiKey, "06gofHh4ah2Hpd69FGccBXNO");
  //FigmaApiToolkit.prototype.getFile();

  module.exports = FigmaApiToolkit;