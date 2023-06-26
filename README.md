# InstaMax Chrome Extension

This extension adds some new features to instagram desktop:
- Adds a new "Random Location" button that allows you to look at posts around the world.
- Allows you to expand/download an image post after clicking it.


## Increase the location Database

1. Go to the /explore/locations page.
2. Select a location.
3. Select an additional location.
4. If the "See More" option is available at the end of the page, click it until it doesn't appear anymore.
5. Run: 
```js 
const getLocationLinks = () => {
  const links = Array.from(document.getElementsByTagName("a"))
    .map(link => link.href)
    .filter(link => link.includes("explore/locations") && link.length > 44)
    .map(link => `"${link}"`)
    .join(",\n");
  console.log(links)
}

getLocationLinks();
```
6. Copy the results into the "locations.js" file.

Places currently added:
- United States
- Colombia
- France
- Russia
- Japan
- Iran