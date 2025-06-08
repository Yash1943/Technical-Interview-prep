async function fetchData() {
  try {
    const response = await fetch("https://example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
