import uuidv4 from 'uuid/v4';

import {Capitalize} from '../utils/capitalize';

const mapContact = contact => {
  const {name, picture, phone, cell, email} = contact;
  const initObj = {
    id: uuidv4(),
    name: `${Capitalize(name.first)} ${Capitalize(name.last)}`,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() >= 0.5, // randomly generate favorite contacts
  };
  console.log('Log App ~ file: index.js ~ line 18 ~ initObj', initObj);
  return initObj;
};

export const fetchContacts = async () => {
  const response = await fetch(
    'https://randomuser.me/api/?results=100&seed=fullstackio',
  );
  const contactData = await response.json();
  const data = contactData.results.map(mapContact);
  console.log(
    'Log App ~ file: index.js ~ line 25 ~ fetchContacts ~ data',
    data,
  );
  return data;
};

export const fetchUserContact = async () => {
  const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
  const userData = await response.json();

  return mapContact(userData.results[0]);
};

export const fetchRandomContact = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const userData = await response.json();

  return mapContact(userData.results[0]);
};
