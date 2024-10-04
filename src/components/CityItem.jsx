import style from "./CityItem.module.css";
import {Link} from  'react-router-dom'
import React from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { cityName, emoji, date, id , position} = city;
  return (
    <li>
      <Link className={style.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={style.emoji}>{emoji}</span>
        <h3 className={style.name}>{cityName}</h3>
        <time className={style.date}>{formatDate(date)}</time>
        <button className={style.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
