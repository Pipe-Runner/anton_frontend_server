const build = false;

const api = build
  ? 'http://ec2-35-165-95-161.us-west-2.compute.amazonaws.com:4000'
  : 'http://127.0.0.1:4000';

export default api;
