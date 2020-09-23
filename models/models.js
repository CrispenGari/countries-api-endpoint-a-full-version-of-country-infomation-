import mongoose from "mongoose";
const model_name = "countries_model";

// Schemas

const countryScheema = mongoose.Schema({
  name: {
    common: String,
    official: String,
    native: {
      nld: {
        official: String,
        common: String,
      },
      pap: {
        official: String,
        common: String,
      },
    },
  },
  tld: Array,
  cca2: String,
  ccn3: String,
  cca3: String,
  cioc: String,
  independent: Boolean,
  status: String,
  unMember: Boolean,
  currencies: {
    AWG: {
      name: String,
      symbol: String,
    },
  },
  idd: {
    root: String,
    suffixes: Array,
  },
  capital: Array,
  altSpellings: Array,
  region: String,
  subregion: String,
  languages: {
    nld: String,
    pap: String,
  },
  translations: {
    ces: {
      official: String,
      common: String,
    },
    deu: {
      official: String,
      common: String,
    },
    est: {
      official: String,
      common: String,
    },
    fin: {
      official: String,
      common: String,
    },
    fra: {
      official: String,
      common: String,
    },
    hrv: {
      official: String,
      common: String,
    },
    hun: {
      official: String,
      common: String,
    },
    ita: {
      official: String,
      common: String,
    },
    jpn: {
      official: String,
      common: String,
    },
    kor: {
      official: String,
      common: String,
    },
    nld: {
      official: String,
      common: String,
    },
    per: {
      official: String,
      common: String,
    },
    pol: {
      official: String,
      common: String,
    },
    por: {
      official: String,
      common: String,
    },
    rus: {
      official: String,
      common: String,
    },
    slk: {
      official: String,
      common: String,
    },
    spa: {
      official: String,
      common: String,
    },
    swe: {
      official: String,
      common: String,
    },
    urd: {
      official: String,
      common: String,
    },
    zho: {
      official: String,
      common: String,
    },
  },
  latlng: Array,
  landlocked: Boolean,
  borders: Array,
  area: Number,
  flag: String,
  demonyms: {
    eng: {
      f: String,
      m: String,
    },
    fra: {
      f: String,
      m: String,
    },
  },
});

const _ = mongoose.model(model_name, countryScheema);
export default _;

/*
 

*/
