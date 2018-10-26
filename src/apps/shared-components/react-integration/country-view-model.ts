export class CountryViewModelFactory {
  createModel() {
    let countries = [];
    let america = new CountryModel('North America');
    america.visible = true;

    let usa = new CountryModel('USA');
    usa.children.push(new CountryModel('New York'));
    usa.children.push(new CountryModel('Texas'));
    usa.children.push(new CountryModel('Oregon'));
    usa.children.push(new CountryModel('South Dakota'));

    america.children.push(usa);
    america.children.push(new CountryModel('Canada'));
    america.children.push(new CountryModel('Mexico'));

    let europe = new CountryModel('Europe');
    europe.children.push(new CountryModel('Norway'));
    europe.children.push(new CountryModel('Sweden'));
    europe.children.push(new CountryModel('France'));
    europe.children.push(new CountryModel('Germany'));
    europe.visible = true;

    countries.push(america);
    countries.push(europe);

    return countries;
  }
}

class CountryModel {
  children: Array<CountryModel>;
  text: String;
  icon: String;
  visible: Boolean = true;

  constructor(text) {
    this.children = [];
    this.text = text;
    this.icon = this.getIcon();
  }

  getIcon() {
    if (this.children.length > 0) {
      if (this.children[0].visible === false) {
        return '+ ';
      }
      return '- ';
    }
    return null;
  }
}
