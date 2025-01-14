import { setBaseUrl } from './url-utils.js';
import { loadHeader } from '../components/header.js';
import { loadFooter } from '../components/footer.js';
import { displayMovies } from '../components/card.js';

setBaseUrl();
loadHeader();
loadFooter();
displayMovies();