const CamperPhoto = ({ gallery }) => {
  const mainPhoto =
    gallery && gallery.length > 0 ? gallery[0].thumb : "photo-of-vehicle";

  return (
    <div>
      <img src={mainPhoto} alt="Vehicle" width={292} height={320} />
    </div>
  );
};

export default CamperPhoto;
