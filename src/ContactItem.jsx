import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteThisContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="contact-item" key={id}>
      <div className="contact-icon">
      </div>
      <div className="contact-name">
        <p>{name}:</p>
      </div>
      <div className="contact-number">
        <p>{number}</p>
      </div>
      <div className="contact-buttons">
        <button className="delete-button" onClick={() => deleteThisContact(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};


