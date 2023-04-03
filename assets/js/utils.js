import songs from "../js/songs.js";

const cancionLove = songs.filter(({ ...title }) => title === 'Love');

export default cancionLove;