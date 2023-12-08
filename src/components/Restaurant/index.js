import React from "react";
import './styles.css'

export default function Restaurant({ name, description, image, tags }) {
  return (
    <div className="rest-item">
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <p>{description}</p>

      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
