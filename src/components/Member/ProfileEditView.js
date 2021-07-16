import React, { useState } from 'react';
import { Input } from '../Input';

function ProfileEditView({ data }) {
  const [name, setName] = useState((data.user && data.user.user_name) || '');
  const [bio, setBio] = useState(data.bio || '');
  const [github, setGithub] = useState(data.github_username || '');
  const [codechef, setCodechef] = useState(data.codechef_username || '');
  const [expertise, setExpertise] = useState(data.expertise || '');

  const handleSave = () => {
    console.log('save');
  };

  return (
    <div className="profile-edit-view">
      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
        autoComplete="true"
        type="text"
        required={true}
      />
      <Input
        label="About"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        type="text"
        placeholder="Write about yourself"
      />
      <Input
        label="Github"
        onChange={(e) => setGithub(e.target.value)}
        placeholder="Enter your github id"
        required={true}
        type="text"
        value={github}
      />

      <Input
        label="Codechef"
        onChange={(e) => setCodechef(e.target.value)}
        placeholder="Enter codechef id"
        required={true}
        type="text"
        value={codechef}
      />
      <Input
        label="Expertise"
        onChange={(e) => setExpertise(e.target.value)}
        placeholder="Enter your skills"
        required={true}
        type="text"
        value={expertise}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default ProfileEditView;
