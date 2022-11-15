import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  return goods.filter(good => brand === good.brand);
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  return goods.filter(good => color === good.color);
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  return goods.filter(good => model === good.model);
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter(good => memory === good.memory);
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter(good => price === good.price);
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter(good => country === good.country);
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  return goods.filter(good => os === good.os);
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter((good) => from <= good.price && good.price <= to);
};

const minPriceReducer = () => {
  return goods.reduce((accum, good) => {
    if (good.price < accum) return good.price;
    return accum;
  }, Infinity)
};

const maxPriceReducer = () => {
  return goods.reduce((accum, good) => {
    if (good.price > accum) return good.price;
    return accum;
  }, 0)
};

const toMaxSorter = () => {
  return goods.sort((min, max) => {
    if (max.price > min.price) return 1;
    if (max.price < min.price) return -1;
    return 0;
  })
};
const toMinSorter = () => {
  return goods.sort((min, max) => {
    if (min.price > max.price) return 1;
    if (min.price < max.price) return -1;
    return 0;
  })
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
