import React from "react";
import { FaBars, FaStickyNote } from "react-icons/fa";
import styled from "@emotion/styled";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    border-radius: 5px;
    
    transform: translateY(-10px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s;
  }

  .dropdown:hover .dropdown-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  p {
    margin: 0;
    padding-bottom: 12px;

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const StyledBars = styled(FaBars)`
  color: #666;
  font-size: 20px;
`

const StyledStickyNote = styled(FaStickyNote)`
  color: #666;
  font-size: 20px;
`;

const Navigation: React.FC = () => {
  return (
    <NavContainer>
      <div className="dropdown">
        <StyledBars />
        <div className="dropdown-content">
          <p>Hello World!</p>
          <p>HIHI</p>
        </div>
      </div>
      <StyledStickyNote />
    </NavContainer>
  );
};

export default Navigation;