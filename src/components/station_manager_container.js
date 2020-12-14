import { stationAddContainer, stationList } from '../templates/index.js';
import { isValidStationName, isAddedStation } from '../utils/index.js';
import { CONFIRM_MESSAGE } from '../constants/index.js';

export default function StationManagerContainer({
  addStation,
  deleteStation,
  getStations,
  getLines,
}) {
  this.mainContainer = document.querySelector('.main-container');
  this.stationAddButton = document.getElementById('station-add-button');

  this.handleClickMainConatiner = ({
    target: {
      id,
      className,
      dataset: { item },
    },
  }) => {
    if (id === 'station-add-button') {
      this.addStation();
    }

    if (className === 'station-delete-button') {
      this.deleteStation(Number(item));
    }
  };

  this.addStation = () => {
    const stations = getStations();
    const stationNameInput = document.getElementById('station-name-input');
    const stationName = stationNameInput.value.trim().replace(/\s{2,}/g, ' ');
    if (isValidStationName(stations, stationName)) {
      addStation(stationName);
      stationNameInput.value = '';
    }
  };

  this.deleteStation = index => {
    const lines = getLines();
    const stations = getStations();
    if (confirm(CONFIRM_MESSAGE) && isAddedStation(lines, stations[index])) {
      deleteStation(index);
    }
  };

  this.render = () => {
    const stations = getStations();
    this.mainContainer.innerHTML =
      stationAddContainer() + stationList(stations);
  };

  this.mainContainer.addEventListener('click', this.handleClickMainConatiner);
}
