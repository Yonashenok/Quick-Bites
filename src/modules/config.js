import office from '../images/office.jpg';
import slimming from '../images/slimming.jpg';
import vegetarian from '../images/Vegetarian.jpg';

export const API_URL_COMMENT = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hqiz5X9EpndT4RnMoRZ6/comments/';
export const API_URL_MEALS = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken';
export const API_URL_GETLIKE = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hqiz5X9EpndT4RnMoRZ6/likes';
export const API_URL_SENDLIKE = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hqiz5X9EpndT4RnMoRZ6/likes';
export const selectedMeals = [
  'Tandoori chicken',
  'Rosół (Polish Chicken Soup)',
  'Piri-piri chicken and slaw',
  'Honey Balsamic Chicken with Crispy Broccoli & Potatoes',
  "General Tso's Chicken",
  'Crock Pot Chicken Baked Tacos',
  'Chicken Karaage',
  'Chicken Fajita Mac and Cheese',
  'Chicken Enchilada Casserole',
];

export const priceData = [
  '34.99',
  '19.99',
  '29.99',
  '49.99',
  '39.99',
  '25.99',
  '21.99',
  '49.99',
  '19.99',
];

export const menuData = [
  {
    img: vegetarian,
    ele: document.querySelector('.vegetarian'),
  },
  {
    img: slimming,
    ele: document.querySelector('.slimming'),
  },
  {
    img: office,
    ele: document.querySelector('.office'),
  },
];
