const USER_KEY = 'user';
const USER_NULL = { email: '' };

export const setUserOnStorage = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUserOnStorage = () => JSON.parse(localStorage
  .getItem(USER_KEY)) || USER_NULL;

export const modifyUserOnStorage = (property, newValue) => {
  const user = getUserOnStorage();
  user[property] = newValue;
  setUserOnStorage(user);
};

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
