
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const NavLink = styled(Link)`
  margin-right: 20px; /* Adjust spacing between navigation links */
  font-size: 18px;
  color: #fff; /* Text color for navigation links */
  text-decoration: none;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;
export default NavLink;