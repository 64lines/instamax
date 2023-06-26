/**
 * Algebraic Structure that contains all the InstaMax funcitions.
 * 
 * == Getting all the location Links ==
 * 1. Go to the /explore/locations page.
 * 2. Select a location.
 * 3. Select an additional location.
 * 4. Copy paste this algebraic structure to the browser console.
 * 5. Run: 
 *   InstaMax()._getLocationLinks()
 * 6. Copy the results into the "locations.js" file.
 */
const InstaMax = () => ({
  getRandomLocationURL: () => {
    const random = Math.floor(Math.random() * LOCATIONS.length);
    return LOCATIONS[random];
  },
  increaseImages: (pixels) => {
    const [, section] = document.getElementsByTagName("section");
    const [firstDiv] = section.children;
    const [, , secondDiv] = firstDiv.children;
    const [sizeDiv] = secondDiv.children;
    sizeDiv.style = `max-width: ${pixels}px;`;
    return InstaMax();
  },
  enableImageDownload: () => {
    Array.from(document.getElementsByTagName("img")).forEach((currentImage) => {
      currentImage.parentElement.parentElement.onclick = (event) => {
        const element = event.target.parentElement.children[0].children[0];
        const isImage = element && element.tagName === "IMG";
        if (!isImage) return;
        window.open(element.src, "_blank");
      };
    });

    console.log(":: (i) Image download enabled ::");
    return InstaMax();
  },
  createStyle: (styleList) => {
    return `${styleList.join(";")};`;
  },
  addAccessToPlaces: () => {
    /** Button */
    const placesButton = document.createElement("div");
    placesButton.className = "places-button-instamax";
    placesButton.style = InstaMax().createStyle([
      "display: flex",
      "padding: 20px",
      "font-size: 20px",
      "font-weight: 800",
      "justify-content: center",
    ]);
    placesButton.innerHTML = "R";

    /** Label */
    const placesLabel = document.createElement("div");
    placesLabel.innerText = "Random Location";
    placesLabel.className = "places-label-instamax";
    placesLabel.style = "font-size: 16px;";
    placesLabel.style = InstaMax().createStyle([
      "font-size: 16px;",
      "padding-top: 20px",
      "padding-right: 20px",
      "padding-bottom: 20px",
      "justify-content: center",
    ]);

    /** Button Container */
    const placesButtonContainer = document.createElement("div");
    placesButtonContainer.style = InstaMax().createStyle([
      "top: 50%",
      "z-index: 1",
      "right: -71px",
      "display: flex",
      "cursor: pointer",
      "position: fixed",
      "align-items: center",
      "transform: rotate(-90deg)",
      "background-color: darkcyan"
    ]);
    placesButtonContainer.appendChild(placesButton);
    placesButtonContainer.appendChild(placesLabel);
    placesButtonContainer.onclick = () => {
      window.location.href = InstaMax().getRandomLocationURL();
    };
    document.body.appendChild(placesButtonContainer);

    console.log(":: (i) Added access to places ::");
    return InstaMax();
  },
});
