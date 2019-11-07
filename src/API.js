export const getRandomBeer = (apiKey, pageSize, query, offset) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://sandbox-api.brewerydb.com/v2/beer/random/?key=a5c1b917e7ba62dcd79f434ed73bc72d&withBreweries=y`, false);
    xhr.send();
    if(xhr.status === 200) {
      resolve(JSON.parse(xhr.response).data);
    } else {
      reject(xhr.error)
    }
  });
};
