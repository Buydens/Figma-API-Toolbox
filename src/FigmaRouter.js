"use strict";

export default {

    token,

    tokenCheck: function(){
        console.log("token is "+ token);
    }

/*
    getFile: async function(figmaId){
        return axios.get('https://api.figma.com/v1/files/' + figmaId, {
            headers: {
                'X-Figma-Token': token
              }
        }).then(response => {
            return response.data;
        });
    },

    getImageFills: async function(figmaId){
        return axios.get('https://api.figma.com/v1/files/' + figmaId + "/images", {
            headers: {
                'X-Figma-Token': token
              }
        }).then(response => {
            return response.data.meta.images;
        });
    },

    getImage: async function(figmaId){
        return axios.get('https://api.figma.com/v1/images/' + figmaId + "?scale=2&ids=0:1&format=svg", {
            headers: {
                'X-Figma-Token': token
            },

        }).then(response => {
            return response.data;
        });
    },

    getComponents: async function(figmaId){
        return axios.get('https://api.figma.com/v1/components/' + figmaId, {
            headers: {
                'X-Figma-Token': token
            },

        }).then(response => {
            return response.data;
        });
    }
*/
}