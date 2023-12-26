let ui_predefined_package = null;

const packageArray = [
  { package_name: "Card", carrier: "USPS", readable: "My Card" },
  { package_name: "Letter", carrier: "USPS", readable: "My Letter" },
  { package_name: "Flat", carrier: "USPS", readable: "My Flat" },
  { package_name: "Parcel", carrier: "USPS", readable: "My Parcel" },
  {
    package_name: "SoftPack",
    carrier: "USPS",
    readable: "My SoftPack",
  },
  {
    package_name: "FlatRateEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Envelope",
  },
  {
    package_name: "FlatRateLegalEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Legal Envelope",
  },
  {
    package_name: "FlatRatePaddedEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Padded Envelope",
  },
  {
    package_name: "FlatRateWindowEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Window Envelope",
  },
  {
    package_name: "FlatRateCardboardEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Cardboard Envelope",
  },
  {
    package_name: "SmallFlatRateEnvelope",
    carrier: "USPS",
    readable: "USPS Small Flat Rate Envelope",
  },
  {
    package_name: "SmallFlatRateBox",
    carrier: "USPS",
    readable: "USPS Small Flat Rate Box",
  },
  {
    package_name: "MediumFlatRateBox",
    carrier: "USPS",
    readable: "USPS Medium Flat Rate Box",
  },
  {
    package_name: "LargeFlatRateBox",
    carrier: "USPS",
    readable: "USPS Large Flat Rate Box",
  },
  {
    package_name: "LargeFlatRateBoxAPOFPO",
    carrier: "USPS",
    readable: "USPS Large Flat Rate Box APOFPO",
  },
  // {
  //   package_name: "FlatTubTrayBox",
  //   carrier: "USPS",
  //   readable: "USPS Flat Tub Tray Box",
  // },
  // {
  //   package_name: "EMMTrayBox",
  //   carrier: "USPS",
  //   readable: "USPS EMM Tray Box",
  // },
  // {
  //   package_name: "FullTrayBox",
  //   carrier: "USPS",
  //   readable: "USPS Full Tray Box",
  // },
  // {
  //   package_name: "HalfTrayBox",
  //   carrier: "USPS",
  //   readable: "USPS Half Tray Box",
  // },
  // {
  //   package_name: "PMODSack",
  //   carrier: "USPS",
  //   readable: "USPS PMOD Sack",
  // },
  { package_name: "UPSLetter", carrier: "UPS", readable: "UPS Letter" },
  {
    package_name: "UPSExpressBox",
    carrier: "UPS",
    readable: "UPS Express Box",
  },
  {
    package_name: "UPS25kgBox",
    package_name: "UPS25kgBox",
    carrier: "UPS",
    readable: "UPS 25kg Box",
  },
  {
    package_name: "UPS10kgBox",
    carrier: "UPS",
    readable: "UPS 10kg Box",
  },
  { package_name: "Tube", carrier: "UPS", readable: "UPS Tube" },
  { package_name: "Pak", carrier: "UPS", readable: "UPS Pak" },
  {
    package_name: "SmallExpressBox",
    carrier: "UPS",
    readable: "UPS Small Express Box",
  },
  {
    package_name: "MediumExpressBox",
    carrier: "UPS",
    readable: "UPS Medium Express Box",
  },
  {
    package_name: "LargeExpressBox",
    carrier: "UPS",
    readable: "UPS Large Express Box",
  },
  { package_name: "FedExBox", carrier: "FedEx", readable: "FedEx Box" },
  {
    package_name: "FedExEnvelope",
    carrier: "FedEx",
    readable: "FedEx Envelope",
  },
  { package_name: "FedExPak", carrier: "FedEx", readable: "FedEx Pak" },
  { package_name: "FedExTube", carrier: "FedEx", readable: "FedEx Tube" },
  {
    package_name: "FedEx10kgBox",
    carrier: "FedEx",
    readable: "FedEx 10kg Box",
  },
  {
    package_name: "FedEx25kgBox",
    carrier: "FedEx",
    readable: "FedEx 25kg Box",
  },
  {
    package_name: "FedExSmallBox",
    carrier: "FedEx",
    readable: "FedEx Small Box",
  },
  {
    package_name: "FedExMediumBox",
    carrier: "FedEx",
    readable: "FedEx Medium Box",
  },
  {
    package_name: "FedExLargeBox",
    carrier: "FedEx",
    readable: "FedEx Large Box",
  },
  {
    package_name: "FedExExtraLargeBox",
    carrier: "FedEx",
    readable: "FedEx ExtraLarge Box",
  },
];

function populateDropdown() {
  const dropdown = document.getElementById("myDropdown");

  packageArray.forEach((item) => {
    const packageName = item.package_name;
    const readable = item.readable;
    const imageName = `${packageName}.jpg`;

    const aElement = document.createElement("a");
    aElement.textContent = readable;
    aElement.onclick = () => changePreview(imageName, readable);

    dropdown.appendChild(aElement);
  });
}

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function changePreview(imageName, readableName) {
  ui_predefined_package = imageName.split(".")[0];
  console.log(ui_predefined_package);
  document.getElementById(
    "previewContainer"
  ).innerHTML = `<img src="images/${imageName}" alt="Preview Image"><p>UI Readable: "${readableName}"</p><p>EasyPost <a href="https://www.easypost.com/docs/api#predefined-packages" rel="noreferrer nofollow">predefined_package</a> string: "${ui_predefined_package}"</p><p>For use with ${carrier}</p>`;
  document.getElementById("myDropdown").style.display = "none";
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

// Populate the dropdown on page load
populateDropdown();
