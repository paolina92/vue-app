import Home from './views/home.vue';
import Playlists from './views/playlists.vue';
import Settings from './views/settings.vue';

export default [
  { path: '/', component: Home },
  { path: '/playlists', component: Playlists },
  { path: '/settings', component: Settings }
];
