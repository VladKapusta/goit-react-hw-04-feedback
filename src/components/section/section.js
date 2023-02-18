import PropTypes from 'prop-types';
import { Chapter, Titel } from './section.styled';

const Section = ({ titel, children }) => {
  return (
    <Chapter>
      <Titel>{titel}</Titel>
      {children}
    </Chapter>
  );
};

export default Section;

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
