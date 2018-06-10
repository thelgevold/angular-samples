const countries = {
  nodes: [
    {name: 'USA', key: 'usa', url: 'treeview-data/usa'},
    {name: 'Australia', key: 'aus'},
    {name: 'Germany', key: 'ger'},
    {name: 'Norway', key: 'nor'},
    {name: 'Canada', key: 'can'},
  ],
};

const newYork = {
  nodes: [
    {
      name: 'Brooklyn',
      key: 'brooklyn',
      url: 'treeview-data/brooklyn',
    },
    {name: 'Manhattan', key: 'manhattan'},
    {name: 'Bronx', key: 'bronx'},
    {name: 'Queens', key: 'queens'},
    {name: 'Staten Island', key: 'statenisland'},
  ],
};

const usa = {
  nodes: [
    {name: 'New York', key: 'nyc', url: 'treeview-data/new-york'},
    {name: 'Chicago', key: 'c'},
    {name: 'Los Angeles', key: 'la'},
    {name: 'Miami', key: 'm'},
    {name: 'Boston', key: 'b'},
  ],
};

const brooklyn = {
  nodes: [
    {name: 'Williamsburg', key: 'williamsburg'},
    {name: 'Park Slope', key: 'parkslope'},
    {name: 'Fort Green', key: 'fortgreen'},
    {name: 'Flatbush', key: 'flatbush'},
    {name: 'Red Hook', key: 'redhook'},
  ],
};

export const treeviewData = {
  usa: usa,
  countries: countries,
  brooklyn: brooklyn,
  'new-york': newYork,
};
