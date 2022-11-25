import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail_restaurant" id="posts">
    <h1 class="restaurant__title" id="restaurant__title" tabindex="0">${restaurant.name}</h1>
    <div class="wrapper_restaurant">
      <div class="wrapper-restaurant_poster">
        <img class="lazyload restaurant__poster"
          data-src="${API_ENDPOINT.IMAGE(restaurant.pictureId, 'medium')}"
          alt="${restaurant.name}" />
      </div>
      <div class="wrapper-restaurant_info">
          <div class="restaurant__info">
              <h3>Information</h3>
              <h4 tabindex="0">Alamat</h4>
              <p tabindex="0">${restaurant.address}</p>
              <h4 tabindex="0">Kategori</h4>
              <p tabindex="0">${restaurant.categories.map((categorie) => categorie.name).join(', ')}</p>
              <h4 tabindex="0">Jumlah Menu Makanan</h4>
              <p tabindex="0">${restaurant.menus.foods.length}</p>
              <h4 tabindex="0">Jumlah Menu Minuman</h4>
              <p tabindex="0">${restaurant.menus.drinks.length}</p>
              <h4 tabindex="0">Rating</h4>
              <p tabindex="0">${restaurant.rating}</p>
          </div>
      </div>
  </div>
  <div class="restaurant__overview">
      <h3 tabindex="0">Deskripsi Restaurant</h3>
      <p tabindex="0">${restaurant.description}</p>
  </div>
  <div class="restaurant_menu">
      <ul class="food"> Menu Makanan
        ${restaurant.menus.foods.map((item) => `<li tabindex="0">${item.name}</li>`).join('')}
      </ul>
      <ul class="drink" tabindex="0"> Menu Minuman
      ${restaurant.menus.drinks.map((item) => `<li tabindex="0">${item.name}</li>`).join('')}
      </ul>
  </div>
  <div class="costumer_blank">Customer Review</div>
  <div class="customer_reviews"></div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item" id="posts">
    <img class="post-item__thumbnail lazyload" data-src="${API_ENDPOINT.IMAGE(restaurant.pictureId, 'medium')}" alt="${restaurant.name}">
    <div class="post-item__content">
      <p class="post-item__rate">Rating ${restaurant.rating} <a href="#" class="post-item_place">Lokasi Di ${restaurant.city}</a>
      </p>
      <h1 class="post-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <p class="post-item__description">${restaurant.description.slice(0, 300)}...
    </div>
  </article>
`;

const createAvatarID = (name) => window.btoa(name);

const createCustomerReviewItemTemplate = (review) => `
  <div class="costumer_review" id="costumer_review">
    <div class="wrapper-costumer_review">
      <img class="img-costumer_review" src="https://i.pravatar.cc/64?u=${createAvatarID(review.name)}" alt="Avatar ${review.name}">
    </div>
    <div class="costumer_comment">
      <h3>${review.name}</h3>
      <h4 tabindex="0">${review.date}</h4>
      <p tabindex="0">${review.review}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCustomerReviewItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
