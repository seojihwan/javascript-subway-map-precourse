export const isValidStationName = (stations, name) => {
  if (name.length < 2) {
    alert('지하철 역은 2글자 이상이어야 합니다.');
    return false;
  }

  if (stations.map(station => station.name).includes(name)) {
    alert('중복된 지하철 역 이름입니다.');
    return false;
  }

  return true;
};

export const isValidLineName = (lines, newLine) => {
  if (newLine.name.length < 1) {
    alert('노선은 1글자 이상이어야 합니다.');
    return false;
  }

  if (lines.map(line => line.name).includes(newLine.name)) {
    alert('중복된 노선 이름입니다.');
    return false;
  }

  return true;
};

export const isValidLine = newLine => {
  if (newLine.start === newLine.end) {
    alert('상행과 하행역은 달라야 합니다');
    return false;
  }

  return true;
};
