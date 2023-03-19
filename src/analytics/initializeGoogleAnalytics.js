function initializeReactGA(ReactGA) {
  if (!window.GA_INITIALIZED) {
    const trackingId = 'UA-207764805-1';
    ReactGA.initialize(trackingId);
    window.GA_INITIALIZED = true;
  }
}

export default initializeReactGA;
