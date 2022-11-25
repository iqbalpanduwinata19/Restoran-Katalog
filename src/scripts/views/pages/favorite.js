import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="wrapper_favorite">
        <h2 class="title_first">Your Favorite Restaurant</h2>
        <div id="restaurants" class="posts">
        </div>
      </div>
    `;
  },

  async afterRender() {
    // const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    // const restaurantsContainer = document.querySelector('#restaurants');
    // restaurants.forEach((restaurant) => {
    //   restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    // });

    new FavoriteRestaurantShowPresenter({ favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Like;
