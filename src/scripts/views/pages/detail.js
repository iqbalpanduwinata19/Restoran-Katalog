import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate, createCustomerReviewItemTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const customerReviewContainer = document.querySelector('.customer_reviews');
    customerReviewContainer.innerHTML = restaurant.customerReviews.map((review) => createCustomerReviewItemTemplate(review)).join('');

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
