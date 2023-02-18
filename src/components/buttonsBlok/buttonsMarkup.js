import PropTypes from 'prop-types';
import { ButtonWrapper,
  Button } from './buttons.staled';

const ButtonsMurkup = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonWrapper>
      {options.map(option => (
        <Button type="button" bgColor={option} onClick={onLeaveFeedback} key={option}>
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  );
};

export default ButtonsMurkup;

ButtonsMurkup.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
