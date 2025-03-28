// this is for accessing the files in the /assets

// we will return the absolute path. the input "path" will be relative path
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };

