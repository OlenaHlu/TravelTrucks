import css from "./CamperPhoto.module.css";

const CamperPhoto = ({ gallery }) => {
  const mainPhoto =
    gallery && gallery.length > 0 ? gallery[0].thumb : "photo-of-vehicle";

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
};

export default CamperPhoto;
