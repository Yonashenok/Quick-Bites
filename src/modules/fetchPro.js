const fetchPro = async (url, uploadData = undefined) => {
  const res = uploadData
    ? await fetch(url, {
      method: 'POST',
      body: JSON.stringify(uploadData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    : await fetch(url);

  const data = await res.json();
  return data;
};

export default fetchPro;
