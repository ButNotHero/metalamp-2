const documentReady = (callback: any) => {
  if (document.readyState === 'complete') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

export default documentReady;
