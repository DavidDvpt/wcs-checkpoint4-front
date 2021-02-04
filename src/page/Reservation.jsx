import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Label } from 'reactstrap';
import { postVisit } from '../apiBack';

const Reservation = () => {
  const { id, name } = useParams();
  // const history = useHistory();
  const [reservation, setReservation] = useState({});
  const [selectedDate, setselectedDate] = useState('');
  const [message, setMessage] = useState('');

  const handlePicker = (e) => {
    setselectedDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...reservation, date: selectedDate, realEstateId: id };
    console.log(data);
    postVisit(data).then(() => {
      setMessage('réservation enregistrée');
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center">Reserveation</h1>
      <h5 className="text-center mb-5">{name}</h5>
      {/* <p>Places Restantes : {visitLeft}</p> */}
      <div className="my-3">
        <Label htmlFor="firstname">Nom : </Label>
        <Input
          type="text"
          name="firstname"
          value={reservation.firstname}
          onChange={(e) =>
            setReservation({ ...reservation, firstname: e.target.value })
          }
        />
      </div>
      <div className="my-3">
        <Label htmlFor="selectedDate">Date : </Label>
        <Input
          type="date"
          className="w-50 rounded "
          value={selectedDate}
          onChange={handlePicker}
        />
      </div>
      <div className="my-3">
        <Label htmlFor="quantity">Quantité : </Label>
        <Input
          type="number"
          name="quantity"
          className="w-25"
          value={reservation.quantity}
          onChange={(e) =>
            setReservation({ ...reservation, quantity: e.target.value })
          }
        />
      </div>
      <div className="my-3">
        <Label htmlFor="hour">Heure : </Label>
        <select
          name="hour"
          className="w-25 rounded d-block ml-0"
          value={reservation.hour}
          onChange={(e) =>
            setReservation({ ...reservation, hour: e.target.value })
          }
          placeholder="choisir une heure..."
        >
          {['9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h'].map(
            (elmt) => (
              <option value={elmt}>{elmt}</option>
            )
          )}
        </select>
      </div>
      <p>{message}</p>
      <button className="btn btn-primary d-block m-auto w-50" type="submit">
        Réserver
      </button>
    </Form>
  );
};

export default Reservation;
