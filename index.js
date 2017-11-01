class Driver {
  constructor(name, dayJoined) {
    this.name = name;
    this.startDate = new Date(dayJoined);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear() - 1
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const hor = Math.abs(parseInt(this.beginningLocation["vertical"]) - parseInt(this.endingLocation["vertical"]));
    const vert = Math.abs(eastWest.indexOf(this.beginningLocation["horizontal"]) - eastWest.indexOf(this.endingLocation["horizontal"]));
    return hor + vert;
  }

  estimatedTime(peakHours) {
    // (peakHours) ? return this.blocksTravelled() / 2 : return this.blocksTravelled() / 3
    if (peakHours) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}
