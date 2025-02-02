import React from "react";
import styled from "@emotion/styled";

const NavigationContainer = styled.nav`
  width: 100%;
  text-align: center;
`;

const NavButton = styled.a<{ active?: boolean }>`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0px 10px;
  opacity: ${(props) => (props.active ? "1" : "0.4")};
  filter: saturate(${(props) => (props.active ? "1" : "0.7")});
  transition: opacity 0.3s, filter 0.3s;

  &:nth-of-type(1) {
    background-color: #35e0f7;
    box-shadow: 5px 5px 10px rgba(74, 255, 255, 0.7);
  }
  &:nth-of-type(2) {
    background-color: #55f5cd;
    box-shadow: 5px 5px 10px rgba(85, 245, 178, 0.7);
  }
  &:nth-of-type(3) {
    background-color: #ff80df;
    box-shadow: 5px 5px 10px rgba(255, 128, 223, 0.7);
  }
  &:nth-of-type(4) {
    background-color: #a794fd;
    box-shadow: 5px 5px 10px rgba(167, 148, 253, 0.7);
  }
`;

const members = ["member1", "member2", "member3", "member4"];

interface MemberNavigationProps {
  current: string;
}

const MemberNavigation: React.FC<MemberNavigationProps> = ({ current }) => {
  return (
    <NavigationContainer>
      {members.map((member, index) => (
        <NavButton key={index} active={current === member} />
      ))}
    </NavigationContainer>
  );
};

export default MemberNavigation;