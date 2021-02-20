/* eslint-disable no-unused-vars */
const { SPANISH_TO_ENGLISH, TRACK_LIST } = require('./constants.js')

const newSingle = (single) => {
  return  "New single " + single + " is dropping soon!"  
};

const eresBadBunny = (name) => {
  return name.toLowerCase() == "bad bunny"
}

const areYouLil = (name) => {
  
  var Name = artistName.split(" ");
  
  var firstName = Name[0]
  
  if (firstName == "lil") {
    return true 
  }
  else {
    return false 
  }
};

const mostViewsThreeVideos = (videoOneViews, videoTwoViews, videoThreeViews) => {
  // insert code
};

const mostViews = (videoViews) => {
  // insert code
};

const validateEmail = (email) => {
  // insert code
};

const validateEmailWithMessage = (email) => {
  // insert code
};

const getInitials = (name) => {
  // insert code
};

const getInitialsOneName = (name) => {
  // insert code
};

const getInitialsLongName = (name) => {
  // insert code
};

const howRepetitiveAreYou = (lyrics, word) => {
  // insert code
};

const translateThis = (titles) => {
  const spanishToEnglish = SPANISH_TO_ENGLISH;
  // insert code
};

const getSingles = (trackList = TRACK_LIST) => {
  // insert code
};

const getUniqueArtists = (trackList = TRACK_LIST) => {
  // insert code
};

const getMostStreamedTrack = (trackList = TRACK_LIST) => {
  // insert code
};

module.exports = {
  newSingle,
  eresBadBunny,
  areYouLil,
  mostViewsThreeVideos,
  mostViews,
  validateEmail,
  validateEmailWithMessage,
  getInitials,
  getInitialsOneName,
  getInitialsLongName,
  howRepetitiveAreYou,
  translateThis,
  getSingles,
  getUniqueArtists,
  getMostStreamedTrack
};
