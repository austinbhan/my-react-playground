export async function getAll(setData) {
  const url = 'https://countryapi.herokuapp.com/countries';
  const res = await fetch(url);
  const realRes = await res.json();
  setData(realRes);
}
