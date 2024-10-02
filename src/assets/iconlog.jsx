// Dynamically import all icon files from the './icons' directory
const requireIcon = require.context("./icons", false, /\.jsx$/);

// Automatically generate the IconMap object
const IconMap = requireIcon.keys().reduce((icons, filePath) => {
  // Extract the icon name by removing './' and '.jsx' from the file path
  const iconName = filePath.replace("./", "").replace(".jsx", "");

  // Assign the default export of each icon file to the IconMap
  icons[iconName] = requireIcon(filePath).default;

  return icons;
}, {});

// Export the generated IconMap
export default IconMap;
