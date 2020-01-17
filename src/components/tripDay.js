import {createElement} from '../utils.js';
import {Months} from "../const";

import TripEventComponent from './tripEvent';

const creatTripDay = (day, dayNum) => {

  const getItemsMarkup = day.events.map((event) => {
    const tripEventComponent = new TripEventComponent(event).getElement();
    return tripEventComponent.outerHTML;
  }).join('');

  const getFormattedDate = () =>
    `${Months[day.date.getMonth()]} ${day.date.getDate() < 10 ? `0${day.date.getDate()}` : day.date.getDate()}`;
  return (
    `<ul class="trip-days">
      <li class="trip-days__item  day">
            <div class="day__info">
              <span class="day__counter">${dayNum}</span>
              <time class="day__date" datetime="2019-03-18">${getFormattedDate()}</time>
            </div>
            
            <ul class="trip-events__list">
             ${getItemsMarkup}
             </ul>
           </li>
     </ul>`
  );
};

export default class TripDay {
  constructor(day, dayNum) {
    this._day = day;
    this._dayNum = dayNum;
    this._element = null;
  }

  getTemplate() {
    return creatTripDay(this._day, this._dayNum);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
