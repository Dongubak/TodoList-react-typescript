import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button<{ primary?: boolean }>`
  width: 180px;
  height: 32px;
  border: none;
  border-radius: 16px;
  font-weight: bold;
  font-size: 12px;
  color: white;
  text-align: center;
  cursor: pointer;
  background: ${(props) => (props.primary ? "linear-gradient(45deg, #4affff, #35e0f7)" : "#444")};
  box-shadow: ${(props) =>
    props.primary ? "5px 10px 20px rgba(0, 255, 255, 0.493)" : "2px 5px 10px rgba(0,0,0,0.2)"};
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

interface ButtonProps {
  text: string;
  primary?: boolean;
  type?: "button" | "submit" | "reset";
  
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, primary = false, onClick, type = 'button'}) => {
  return <StyledButton primary={primary} onClick={onClick} type={type}>{text}</StyledButton>;
};

export default Button;