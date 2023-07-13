const getLocalStorage = () => JSON.parse(localStorage.getItem('Cart')) || [];

export default getLocalStorage;
