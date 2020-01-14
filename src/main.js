import TripInfoTownComponent from './components/tripInfo';
import TripCostComponent from "./components/tripCost";
import TripControlsComponent from './components/tripControls';
import TripFiltersComponent from './components/tripFilters';
import TripDayComponent from './components/tripDay';
import TripSortComponent from './components/tripSort';

import {generateDays} from './mock/point';
import {Filters} from "./const";

// вставляем разметку в блок
import {render, RenderPosition} from './utils';
const days = generateDays(4);

// находим классы куда вставлять разметку
const siteMenuElement = document.querySelector(`.trip-main__trip-info`);
const siteTripControls = document.querySelector(`.trip-controls`);


// вставляем разметку из функций render в нужные места
render(siteMenuElement, new TripInfoTownComponent(days).getElement(), RenderPosition.AFTERBEGIN);
render(siteMenuElement, new TripCostComponent(days).getElement(), RenderPosition.BEFOREEND);
render(siteTripControls, new TripControlsComponent().getElement(),  RenderPosition.BEFOREEND);
render(siteTripControls, new TripFiltersComponent(Filters).getElement(), RenderPosition.BEFOREEND);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, new TripSortComponent().getElement(), RenderPosition.BEFOREEND);

days.map((day, index) => {
  render(tripEvents,  new TripDayComponent(day, index + 1).getElement(), RenderPosition.BEFOREEND);
});
