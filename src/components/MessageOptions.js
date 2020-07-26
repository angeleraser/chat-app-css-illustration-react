import React, { useState } from "react";

const MessageOptions = ({ isActive }) => {
  return (
    <ul
      className={`${isActive ? "menu-op-active" : ""}`}>
      <li>Reply</li>
      <li>Copy</li>
      <li>Forward</li>
      <li>Delete</li>
    </ul>
  );
};

export default MessageOptions;
