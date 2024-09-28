const CardEquipments = ({
  AC,
  automatic,
  kitchen,
  TV,
  bathroom,
  microwave,
}) => {
  return (
    <div>
      <ul>
        {AC && <li>Air Conditioning</li>}
        {automatic && <li>Automatic Transmission</li>}
        {kitchen && <li>Kitchen</li>}
        {TV && <li>TV</li>}
        {bathroom && <li>Bathroom</li>}
        {microwave && <li>Microwave</li>}
      </ul>
    </div>
  );
};

export default CardEquipments;
