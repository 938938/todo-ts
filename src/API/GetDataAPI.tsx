export const getDataAPI = async () => {
  try {
    const data = await fetch('http://localhost:3001/data')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
      });
    return data;
  } catch (e) {
    return e;
  }
};
