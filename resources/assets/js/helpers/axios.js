import loadProgressBar from './progress-bar';

export const getPureAxiosInstance = () => {
  let instance = window.axios.create();
  delete instance.defaults.headers.common['X-CSRF-TOKEN'];
  delete instance.defaults.headers.common['Authorization'];
  delete instance.defaults.headers.common['X-Requested-With'];
  loadProgressBar(instance);
  return instance;
};
