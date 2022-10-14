## SnappFood Vendors List

In this project you can find a list of all the vendors that are currently using SnappFood.
The list will be updated every time a new vendor is added to the system or your location is changed.

<h1 align="center"> Project's view <h1/>
<p align="center">
<img src="https://user-images.githubusercontent.com/66781740/184869335-439a973e-c49c-49fd-893b-9e2c72e840b7.png" />
<p/>


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

# Features:

- ## Custom middleware to normalize server response.

  ```tsx
  import { Vendor } from './../../types/vendor';

  export const normalizeVendors = (vendors: { data: Vendor; type: string }[]) => {
    const vendorsWithCorrectData = vendors

      // Remove uncorrect data which is not object
      .filter((vendor) => {
        if (typeof vendor.data === 'object') {
          return vendor.data;
        }
      })
      // set default data for each vendor
      .map((vendor, index) => {
        const showhHardCodedEta = vendor.data.eta < 1 && index === 0 ? true : false;
        const showRealEta = vendor.data.eta >= 1 && index !== 0;

        return {
          ...vendor.data,
          title: vendor.data.title ?? 'بون سی',
          deliveryFee: vendor.data.deliveryFee ?? 2500,
          eta: showRealEta ? vendor.data.eta : showhHardCodedEta ? 25 : null,
        };
      })
      // remove falsy items
      .filter(Boolean);

    return vendorsWithCorrectData;
  };
  ```

- ## Dynamic theme color for rate section.
  <!-- <img src="https://user-images.githubusercontent.com/66781740/184870445-6ee04169-e9cb-4c05-95bb-0eadad20b1c4.png" /> -->
- ## Virtualized list for perfomance concerns.
    <!-- <img  src="https://user-images.githubusercontent.com/66781740/184871273-85c986b2-7e01-4d02-9a08-38f79f1bb829.png" /> -->
- ## Scroll based pagination.

## Project structure

```

├── assets # Contains images.
├── components # Contains Components used in each page.
├── constants # Contains constant data.
|-- hooks # Contains custom hooks.
├── services # Contains api calls.
|-- configs # Contains configs for project.
|   |-- api.ts # Axios instance.
|   |-- normalizers # Holds response normalizers.
|
├── layouts # Contains the main layout to render shared components around the application.
|-- store # Contains redux store.
└── pages # Contains pages that we're going to render using router.
└── types # Contains types and interfaces.
└── helpers # Holds helper and ustility functions.

```

```

```
