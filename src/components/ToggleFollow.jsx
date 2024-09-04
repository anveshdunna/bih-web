"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

const ToggleFollowButton = ({ initial }) => {
  const [isFollowing, setIsFollowing] = useState(initial === 1);

  const handleToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Button
      variant={isFollowing ? "secondary" : "primary"}
      onClick={handleToggle}
    >
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
};

export default ToggleFollowButton;
