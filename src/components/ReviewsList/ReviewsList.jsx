import css from "./ReviewsList.module.css";
import symbolDefs from "../../assets/symbol-defs.svg";

const ReviewsList = ({ reviews }) => {
  const star = 5;
  return (
    <div className={css.mainContainer}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewContainer}>
          <div className={css.reviewInfo}>
            <div className={css.initial}>{review.reviewer_name.charAt(0)}</div>
            <div className={css.nameRaiting}>
              <p className={css.reviewerName}>{review.reviewer_name}</p>
              <div className={css.stars}>
                {[...Array(star)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={
                      starIndex < review.reviewer_rating
                        ? css.filledStar
                        : css.emptyStar
                    }
                  >
                    <use
                      xlinkHref={`${symbolDefs}#${
                        starIndex < review.reviewer_rating
                          ? "icon-star-active"
                          : "icon-star"
                      }`}
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={css.reviewerComment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
