const setLocalStorage = (data) => {
  localStorage.setItem('Cart', JSON.stringify(data));
};
export default setLocalStorage;
