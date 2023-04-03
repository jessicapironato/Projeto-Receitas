const USER_KEY = 'user';

export const setUserOnStorage = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUserOnStorage = () => {
  const user = localStorage.getItem(USER_KEY);
  return JSON.parse(user);
};

export const modifyUserOnStorage = (property, newValue) => {
  const user = getUserOnStorage();
  user[property] = newValue;
  setUserOnStorage(user);
};

// Requisito 2-6: group Programming André Porto,Gregório Bezerra,Jéssica Pironato, Josiane Oliveira, Patrick Fonseca;
