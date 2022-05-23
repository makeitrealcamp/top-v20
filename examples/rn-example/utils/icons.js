const iconsName = (routeName) => {
  const icons = {
    Characters: 'users',
    Episodes: 'tv',
    Locations: 'map-marker',
  };

  return icons[routeName] || 'users';
};

export default iconsName;
