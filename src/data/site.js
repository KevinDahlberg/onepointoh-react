import fetch from 'isomorphic-fetch'

//there are no posts for this website, so no post stuff
export const REQUEST_SETTINGS = 'REQUEST_SETTINGS';
export const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS';
export const REQUEST_PAGES = 'REQUEST_PAGES';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const REQUEST_MEDIA = 'REQUEST_MEDIA';
export const RECEIVE_MEDIA = 'RECEIVE_MEDIA';

//sets initial state for the App
const initialState = {
  pages: [],
  settings: {
    title: '',
    description: '',
    header_image: '',
  },
  media: [],
  isFetchingSettings: true,
  isFetchingPages: true,
  isFetchingMedia: true,
}

/**
 * ACTIONS
 */

function requestSettings() {
  return {type: REQUEST_SETTINGS, isFetchingSettings: true}
}

function receiveSettings(json) {
  return {type: RECEIVE_SETTINGS, settings: json, isFetchingSettings: false}
}

function requestPages() {
  return {type: REQUEST_PAGES, isFetching: true }
}

function receivePages(json) {
  return {type: RECEIVE_PAGES, pages: json, isFetching: false}
}

function requestMedia() {
  return {type: REQUEST_MEDIA, isFetching: true}
}

function receiveMedia(json) {
  return {type: RECEIVE_MEDIA, media: json, isFetching: false}
}

/**
 * ACTION FUNCTIONS
 */

export function fetchSettingsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchSettings(getState())) {
      dispatch(requestSettings());
      return dispatch(fetchSettings());
    }
  }
}

function shouldFetchSettings(state) {
  const settings = state.siteReducer.settings;
  if (typeof settings.title === 'string') { 
    return true;
   } else {
    return false;
  }
}

function fetchSettings() {
  const init ={
      method: 'GET'
  }
  return dispatch => {
    fetch('http://wordpress.onepointoh.solutions/wp-json/wp-rest-routes/v2/settings/all', init)
    .then(response => response.json())
    .then(settings => dispatch(receiveSettings(settings)))
  }
}

export function fetchPagesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPages(getState())) {
      dispatch(requestPages());
      return dispatch(fetchPages());
    }
  }
}

function shouldFetchPages(state) {
  const pages = state.siteReducer.pages;
  
  if (pages.length === 0) {
    return true;
  } else {
    return false;
  }
}

function fetchPages() {
    const init = {
      method: 'GET'
  }
  return dispatch => {
    fetch('http://wordpress.onepointoh.solutions/wp-json/wp/v2/pages', init)
    .then(response => response.json())
    .then(pages => dispatch(receivePages(pages)))
  }
}

export function fetchMediaIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchMedia(getState())) {
      dispatch(requestMedia());
      return dispatch(fetchMedia());
    }
  }
}

function shouldFetchMedia(state) {
  const media = state.siteReducer.media;
  if (media.length === 0) {
    return true;
  } else {
    return false;
  }
}

function fetchMedia() {
  const init = {
    method: 'GET'
  };
  return dispatch => {
    fetch('http://wordpress.onepointoh.com/wp-json/wp/v2/media', init)
    .then(response => response.json())
    .then(media => dispatch(receiveMedia(media)))
  }
}

/**
 * REDUCER
 */

function siteReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case REQUEST_SETTINGS:
    return {
      ...state,
      isFetchingSettings: action.isFetching,
    };
    case RECEIVE_SETTINGS:
      return {
        ...state,
        settings: action.settings,
        isFetchingSettings: false,
    };
    case REQUEST_PAGES:
      return {
        ...state,
        isFetchingPages: action.isFetching,
      };
    case RECEIVE_PAGES:
      return {
        ...state,
        pages: action.pages,
        isFetchingPages: action.isFetching,
      };
    case REQUEST_MEDIA:
      return {
        ...state,
        isFetchingMedia: action.isFetching,
      };
    case RECEIVE_MEDIA:
      return {
        ...state,
        media: action.media,
        isFetchingMedia: action.isFetching,
      };
    default:
      return state
  }
}

export default siteReducer
