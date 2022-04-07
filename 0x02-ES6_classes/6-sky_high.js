import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return super.sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessag() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
