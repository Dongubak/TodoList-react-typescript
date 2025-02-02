import React from 'react';
import Profile from '../components/Todo';

interface ProfileContainerProps {
   name: string;
   job: string;
   imageUrl: string;
   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
   content: string;
   setContent: React.Dispatch<React.SetStateAction<string>>;
   onClick: () => void;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const ProfileContainer: React.FC<ProfileContainerProps> = ({ 
   name, 
   job, 
   imageUrl, 
   onSubmit,
   content,
   setContent,
   onClick,
   onChange
 }) => {
  return (
    <Profile name={name} job={job} imageUrl={imageUrl} onSubmit={onSubmit} 
      content={content} setContent={setContent} onClick={onClick} onChange={onChange}
    />
  );
}

export default ProfileContainer;