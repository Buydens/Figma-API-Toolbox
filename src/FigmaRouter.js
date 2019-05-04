'use strict';

module.exports = {

    getFile: async function(token, figmaId){
        return await fetch('https://api.figma.com/v1/files/' + figmaId, {
            method: 'GET',
            headers: {
              'X-Figma-Token': token
            }
        });
    }

};