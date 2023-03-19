import ReactGA from 'react-ga';

const gaEventsTracker = (category = 'External Links', label = 'label', action = 'action') => {
  ReactGA.event({ category, action, label });
};

export default gaEventsTracker;
