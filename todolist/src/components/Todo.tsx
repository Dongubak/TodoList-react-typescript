import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";

const ProfileContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    background-color: rgba(249, 249, 249, 0.5);
    min-width: 180px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    border-radius: 5px;
    border-radius: 25px;
    
    transform: translateY(-10px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s;

    input {
      padding-left: 5px;
      font-size: 14px;
      line-height: 20px;
      color: #24292e;
      vertical-align: middle;
      background-color: rgba(255, 255, 255, 0.5);
      background-color: #ffffff;
      background-repeat: no-repeat;
      background-position: right 8px center;
      border: 1px solid #e1e4e8;
      border-radius: 10px;
      outline: none;
      box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
      :focus{
          /* border-color: #0366d6; */
          outline: none;
          box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
      }
      
    }
  }

  .dropdown:hover .dropdown-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 5px 15px 30px rgba(173, 216, 230, 0.8);
  object-fit: cover;
`;

const ProfileName = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #555;
`;

const ProfileJob = styled.h2`
  font-size: 12px;
  color: #bbb;
  margin-bottom: 30px;
`;

interface ProfileProps {
  name: string;
  job: string;
  imageUrl: string;
  content: string;

  setContent: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Todo: React.FC<ProfileProps> = ({ name, job, imageUrl, onSubmit,
  content, setContent, onClick, onChange
 }) => {
  return (
    <ProfileContainer>
      <ProfileImage src={imageUrl} alt="프로필 이미지" />
      <ProfileName>{name}</ProfileName>
      <ProfileJob>{job}</ProfileJob>
      <form className="dropdown" onSubmit={onSubmit}>
        <Button text="ADD" primary type="submit" onClick={onClick} />
        <div className="dropdown-content">
          <input onChange={onChange} value={content}></input>
        </div>
      </form>
    </ProfileContainer>
  );
};

export default Todo;