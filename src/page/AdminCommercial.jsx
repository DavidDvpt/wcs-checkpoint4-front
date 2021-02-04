import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { Form, Input, Label } from 'reactstrap';
import { getRealEstates, putRealEstateMaxVisite } from '../apiBack';

const AdminCommercial = () => {
  const [maxVisite, setMaxVisite] = useState(30);
  const [realEstates, setRealEstates] = useState([]);
  const [selectedRealEstate, setSelectedRealEstate] = useState(1);
  // const realEstateList = useSelector(
  //   (state) => state.realEstate.realEstateList
  // );

  // const dispatch = useDispatch();

  useEffect(() => {
    getRealEstates().then((results) => {
      setRealEstates(results.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const castle = realEstates.filter(
      (f) => f.id === parseInt(selectedRealEstate, 10)
    )[0];
    const data = { ...castle, maxVisite };
    putRealEstateMaxVisite(selectedRealEstate, data);
    console.log(selectedRealEstate, realEstates, castle, data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="realEstate">Chateau :</Label>
        <select
          name="realEstate"
          className="rounded w-50 d-block"
          value="selectedRealEstate"
          onChange={(e) => setSelectedRealEstate(e.target.value)}
        >
          {realEstates ? (
            realEstates.map((re) => <option value={re.id}>{re.name}</option>)
          ) : (
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          )}
        </select>
      </div>
      <div className="mb-5 mt-3">
        <Label htmlFor="maxVisite">Visites maximum</Label>
        <Input
          type="number"
          value={maxVisite}
          onChange={(e) => setMaxVisite(e.target.value)}
          className="w-25"
        />
      </div>
      <button className="btn btn-primary d-block m-auto w-50" type="submit">
        Modifier
      </button>
    </Form>
  );
};

export default AdminCommercial;
