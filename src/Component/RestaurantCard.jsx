// import styles from "./RestaurantCard.module.css"

import styles from "./RestaurantCard.css";
function RestaurantCard(props) {
  const { name, id, type, image, rating, number_of_votes, price_starts_from } =
    props;

  return (
    <div data-testid="restaurant-card" className={styles.container} key={id}>
      {/* display the props */}
      <img data-testid="restaurant-card-image" src={image} alt="" />
      <div>
        <p>
          Name:<h4 data-testid="restaurant-card-name">{name}</h4>
        </p>
        <p>
          Type:<h4 data-testid="restaurant-card-type">{type}</h4>
        </p>
        <p>
          Price:<h4 data-testid="restaurant-card-price">{price_starts_from}</h4>
        </p>
        <p>
          Rating:<h4 data-testid="restaurant-card-rating">{rating}</h4>
        </p>
        <p>
          Votes:<h4 data-testid="restaurant-card-votes">{number_of_votes}</h4>
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
