const development = {
  apiUrl: 'http://localhost:4000',
};

const production = {
  apiUrl: '',
};

const stage = process.env.NODE_ENV === "production" ? production : development;

export default {
  ...stage
}