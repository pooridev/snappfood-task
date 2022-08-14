const isBrowser = typeof window !== 'undefined';

/**
 * @description Retrieve user location from browser
 */
export const getUserLocation = () => {
  if (isBrowser) {
    return new Promise<{
      coords: {
        latitude: number;
        longitude: number;
      };
    }>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
      .then((position) => {
        return {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
      })
      .catch(() => {
        return {
          lat: 35.754,
          long: 51.328,
        };
      });
  }
};

// prettier-ignore
export const userLocation = (await (getUserLocation()))
