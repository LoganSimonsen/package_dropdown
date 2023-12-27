let ui_predefined_package = null;

const packageArray = [
  {
    package_name: "Card",
    carrier: "USPS",
    readable: "My Card",
    carrier_packaging: false,
    dimensions: "",
  },
  {
    package_name: "Letter",
    carrier: "USPS",
    readable: "My Letter",
    carrier_packaging: false,
    dimensions: "",
  },
  {
    package_name: "Flat",
    carrier: "USPS",
    readable: "My Flat",
    carrier_packaging: false,
    dimensions: "",
  },
  {
    package_name: "Parcel",
    carrier: "USPS",
    readable: "My Parcel",
    carrier_packaging: false,
    dimensions: "",
  },
  {
    package_name: "SoftPack",
    carrier: "USPS",
    readable: "My SoftPack",
    carrier_packaging: false,
    dimensions: "",
  },
  {
    package_name: "FlatRateEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Envelope",
    carrier_packaging: true,
    dimensions: "12.5x9.5",
  },
  {
    package_name: "FlatRateLegalEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Legal Envelope",
    carrier_packaging: true,
    dimensions: "15x9.5",
  },
  {
    package_name: "FlatRatePaddedEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Padded Envelope",
    carrier_packaging: true,
    dimensions: "12.5x9.5",
  },
  {
    package_name: "FlatRateWindowEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Window Envelope",
    carrier_packaging: true,
    dimensions: "10x5",
  },
  {
    package_name: "FlatRateCardboardEnvelope",
    carrier: "USPS",
    readable: "USPS Flat Rate Cardboard Envelope",
    carrier_packaging: true,
    dimensions: "",
  },
  {
    package_name: "SmallFlatRateEnvelope",
    carrier: "USPS",
    readable: "USPS Small Flat Rate Envelope",
    carrier_packaging: true,
    dimensions: "10x6",
  },
  {
    package_name: "SmallFlatRateBox",
    carrier: "USPS",
    readable: "USPS Small Flat Rate Box",
    carrier_packaging: true,
    dimensions: "8.6875x5.4375x1.75",
  },
  {
    package_name: "MediumFlatRateBox",
    carrier: "USPS",
    readable: "USPS Medium Flat Rate Box",
    carrier_packaging: true,
    dimensions: "11.25x8.75x6",
  },
  {
    package_name: "LargeFlatRateBox",
    carrier: "USPS",
    readable: "USPS Large Flat Rate Box",
    carrier_packaging: true,
    dimensions: "12.25x12x6",
  },
  {
    package_name: "LargeFlatRateBoxAPOFPO",
    carrier: "USPS",
    readable: "USPS Large Flat Rate Box APOFPO",
    carrier_packaging: true,
    dimensions: "12.25x12x6",
  },
  {
    package_name: "UPSLetter",
    carrier: "UPS",
    readable: "UPS Letter",
    carrier_packaging: true,
    dimensions: "12.5x9.5",
  },
  {
    package_name: "UPSExpressBox",
    carrier: "UPS",
    readable: "UPS Express Box",
    carrier_packaging: true,
    dimensions: "13x11x2",
  },
  {
    package_name: "UPS25kgBox",
    carrier: "UPS",
    readable: "UPS 25kg Box",
    carrier_packaging: true,
    dimensions: "19x17x14",
  },
  {
    package_name: "UPS10kgBox",
    carrier: "UPS",
    readable: "UPS 10kg Box",
    carrier_packaging: true,
    dimensions: "17x13x11",
  },
  {
    package_name: "Tube",
    carrier: "UPS",
    readable: "UPS Tube",
    carrier_packaging: true,
    dimensions: "38x6x6",
  },
  {
    package_name: "Pak",
    carrier: "UPS",
    readable: "UPS Pak",
    carrier_packaging: true,
    dimensions: "16x13x1",
  },
  {
    package_name: "SmallExpressBox",
    carrier: "UPS",
    readable: "UPS Small Express Box",
    carrier_packaging: true,
    dimensions: "13x11x2",
  },
  {
    package_name: "MediumExpressBox",
    carrier: "UPS",
    readable: "UPS Medium Express Box",
    carrier_packaging: true,
    dimensions: "15x11x3",
  },
  {
    package_name: "LargeExpressBox",
    carrier: "UPS",
    readable: "UPS Large Express Box",
    carrier_packaging: true,
    dimensions: "18x13x3",
  },
  {
    package_name: "FedExBox",
    carrier: "FedEx",
    readable: "FedEx Box",
    carrier_packaging: true,
    dimensions: "",
  },
  {
    package_name: "FedExEnvelope",
    carrier: "FedEx",
    readable: "FedEx Envelope",
    carrier_packaging: true,
    dimensions: "9.5x12.5",
  },
  {
    package_name: "FedExPak",
    carrier: "FedEx",
    readable: "FedEx Pak",
    carrier_packaging: true,
    dimensions: "10.25x12.75, 12x15.5, Padded:11.75x14.75",
  },
  {
    package_name: "FedExTube",
    carrier: "FedEx",
    readable: "FedEx Tube",
    carrier_packaging: true,
    dimensions: "6x6x38",
  },
  {
    package_name: "FedEx10kgBox",
    carrier: "FedEx",
    readable: "FedEx 10kg Box",
    carrier_packaging: true,
    dimensions: "",
  },
  {
    package_name: "FedEx25kgBox",
    carrier: "FedEx",
    readable: "FedEx 25kg Box",
    carrier_packaging: true,
    dimensions: "",
  },
  {
    package_name: "FedExSmallBox",
    carrier: "FedEx",
    readable: "FedEx Small Box",
    carrier_packaging: true,
    dimensions: "10.625x1.5x12.375, 8.75x2.625x11.25",
  },
  {
    package_name: "FedExMediumBox",
    carrier: "FedEx",
    readable: "FedEx Medium Box",
    carrier_packaging: true,
    dimensions: "11.5x2.375x13.25, 8.75x4.375x11.25",
  },
  {
    package_name: "FedExLargeBox",
    carrier: "FedEx",
    readable: "FedEx Large Box",
    carrier_packaging: true,
    dimensions: "12.375x3x17.5, 8.75x7.75x11.25",
  },
  {
    package_name: "FedExExtraLargeBox",
    carrier: "FedEx",
    readable: "FedEx Extra Large Box",
    carrier_packaging: true,
    dimensions: "11.875x10.75x11, 15.75x14.125x6",
  },
];

function populateDropdown() {
  const dropdown = document.getElementById("myDropdown");

  packageArray.forEach((item) => {
    const packageName = item.package_name;
    const readable = item.readable;
    const imageName = `${packageName}.jpg`;
    const carrier = item.carrier;

    const aElement = document.createElement("a");
    aElement.textContent = readable;
    aElement.onclick = () =>
      changePreview(
        imageName,
        readable,
        carrier,
        item.carrier_packaging,
        item.dimensions
      );

    dropdown.appendChild(aElement);
  });
}

function toggleDropdown(e) {
  e.preventDefault();
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
    setTimeout(display, 20);
  } else {
    dropdown.style.display = "none";
  }
}

function display() {
  document.getElementById("myDropdown").style.display = "block";
}

function changePreview(
  imageName,
  readableName,
  carrier,
  carrier_packaging,
  dims
) {
  ui_predefined_package = imageName.split(".")[0];

  const tableHeader = `
  <thead>
    <tr>
      <th>UI Readable</th>
      <th>Predefined Package String</th>
      <th>Carrier</th>
      <th>Carrier Packaging${carrier_packaging ? "*" : ""}</th>
      <th>Dimensions</th>
    </tr>
  </thead>
`;

  let notice = "";

  if (carrier_packaging) {
    notice = `*Carrier package availabe, but some carriers may allow customers to use their own packaging if it matches the same dimensions. When a shipper wants to use their own packaging but still receive the same "flat rate" pricing, they should still declare the corresponding "predefined_package" when interacting with EasyPost.`;
  } else {
    notice = "";
  }
  const tableRows = `<img src="images/${imageName}" alt="Preview Image"><tr><td>${readableName}</td><td>${ui_predefined_package}</td><td>${carrier}</td><td>${carrier_packaging}</td><td>${dims}</td></tr>`;

  const tableHTML = `<table>${tableHeader}<tbody>${tableRows}</tbody></table><p class="notice">${notice}</p>`;

  document.getElementById("previewContainer").innerHTML = tableHTML;
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
