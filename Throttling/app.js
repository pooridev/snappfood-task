const debounce = (callBackFunction, delay = 300) => {
  let timeoutId;

  return (...args) => {
    const later = () => {
      clearTimeout(timeoutId);
      callBackFunction(...args);
    };

    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
  };
};

const searchInProducts = () => {
  // Expensive operation (e.g. API call)
  // ...
};

const input = document.querySelector('input');

input.addEventListener('input', debounce(searchInProducts));
