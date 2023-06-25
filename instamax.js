const InstaMax = () => ({
  getLocationsURL: () => {
    return "/explore/locations/";
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
    const leftPanel = Array.from(
      document.getElementsByClassName("x1iyjqo2")
    ).find((element) => element.tagName === "DIV");
    if (!leftPanel) return;

    const placesButton = document.createElement("div");
    placesButton.className = "places-button-instamax";
    placesButton.style = InstaMax().createStyle([
      "display: flex",
      "padding: 20px",
      "font-size: 20px",
      "font-weight: 800",
      "justify-content: center",
    ]);
    placesButton.innerHTML = "P";

    const placesLabel = document.createElement("div");
    placesLabel.innerText = "Places";
    placesLabel.className = "places-label-instamax";
    placesLabel.style = "font-size: 16px;";
    placesLabel.style = InstaMax().createStyle([
      "font-size: 16px;",
      "padding-top: 20px",
      "padding-right: 20px",
      "padding-bottom: 20px",
      "justify-content: center",
    ]);

    const placesButtonContainer = document.createElement("div");
    placesButtonContainer.style = InstaMax().createStyle([
      "top: 50%",
      "z-index: 1",
      "right: -32px",
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
      window.open(InstaMax().getLocationsURL(), "_blank");
    };
    document.body.appendChild(placesButtonContainer);

    console.log(":: (i) Added access to places ::");
    return InstaMax();
  },
});

InstaMax().enableImageDownload().addAccessToPlaces();
