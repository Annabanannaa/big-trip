import {Months} from '../const';
import {createElement} from '../utils.js';

// функция шаблона
 const TripInfoTownTemplate = (days) => {
  const getFirstDestination = () => days[0].events[0].destination;
  const getLastDestination = () => {
    const daysLastIndex = days.length - 1;
    return days[daysLastIndex].events[days[daysLastIndex].events.length - 1].destination;
  };

  const getDatesString = () => {
    const firstDateMonth = Months[days[0].date.getMonth()];
    const firstDateDay = days[0].date.getDate();
    const lastDateMonth = Months[days[days.length - 1].date.getMonth()];
    const lastDateDay = days[days.length - 1].date.getDate();

    return `${firstDateMonth} ${firstDateDay}&nbsp;& d mdash;&nbsp;${lastDateMonth !== firstDateMonth ? lastDateMonth : ``} ${lastDateDay}`;
  };

  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">${getFirstDestination()} &mdash; ... &mdash; ${getLastDestination()}</h1>
      <p class="trip-info__dates">${getDatesString()}</p>
    </div>`
  );
};

export default class InfoTown {
  constructor(days) {
    this._days = days;
    this._element = null;
  }

  getTemplate() {
    return TripInfoTownTemplate(this._days);
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
