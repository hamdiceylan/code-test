
const createPaginatedUrl = (keyword,page) => {
  var pageSize = 20;
  return `http://api.giphy.com/v1/gifs/search?api_key=smFg8BlXGx3Fv1uibDi6kK0MiFnLr1xx&q=${keyword}&offset=${(page-1)*pageSize}&limit=${pageSize}`;
}

export const getGifs = async ({keyword,page}) => {
  return fetch(createPaginatedUrl(keyword,page));
}








