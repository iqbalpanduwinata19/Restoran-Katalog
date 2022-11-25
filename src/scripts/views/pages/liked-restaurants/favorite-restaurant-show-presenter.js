import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantShowPresenter {
    constructor({ favoriteRestaurants }) {
        this._favoriteRestaurants = favoriteRestaurants;

        this._showFavoriteRestaurants();
    }

    async _showFavoriteRestaurants() {
        const restaurants = await this._favoriteRestaurants.getAllRestaurants();
        this._displayRestaurants(restaurants);
    }

    _getEmptyRestaurantTemplate() {
        return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }

    _displayRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('restaurants').innerHTML = html;
        document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }
}

export default FavoriteRestaurantShowPresenter;

