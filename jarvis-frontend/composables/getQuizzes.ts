export default async function () {
  const d = await useFetch("http://127.0.0.1:8000/api/question/1");
  return d;
}
