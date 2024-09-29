import css from "./CamperPhoto.module.css";

const CamperPhoto = ({ gallery, showAll = false }) => {
  if (!gallery || gallery.length === 0) return null;

  if (!showAll) {
    const mainPhoto = gallery[0].thumb || "photo-of-vehicle";

    return (
      <div className={css.photoContainer}>
        <img
          className={css.photo}
          src={mainPhoto}
          alt="Vehicle"
          width={292}
          height={320}
        />
      </div>
    );
  }

  return (
    <ul className={css.camperDetailList}>
      {gallery.map((image, index) => (
        <li key={index} className={css.camperImgItem}>
          <div className={css.photoContainer}>
            <img
              className={css.photo}
              src={image.thumb}
              alt={`Vehicle ${index + 1}`}
              width={292}
              height={312}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperPhoto;
