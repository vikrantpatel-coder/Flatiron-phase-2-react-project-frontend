
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const NavLink = styled(Link)`
  margin-right: 20px; 
  font-size: 18px;
  color: #fff; 
  text-decoration: none;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;
export default NavLink;