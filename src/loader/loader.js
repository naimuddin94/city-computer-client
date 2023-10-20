export const homeLoader = async () => {
  const [bannerDataList, companies] = await Promise.all([
    fetch(
      "https://city-compters-server-2na6x9urw-naimuddin94.vercel.app/banner"
    ).then((response) => response.json()),
    fetch(
      "https://city-compters-server-2na6x9urw-naimuddin94.vercel.app/companies"
    ).then((response) => response.json()),
  ]);

  return { bannerDataList, companies };
};

export const brandLoader = async (name) => {
  const [companies, products] = await Promise.all([
    fetch(
      "https://city-compters-server-2na6x9urw-naimuddin94.vercel.app/companies"
    ).then((response) => response.json()),
    fetch(
      `https://city-compters-server-2na6x9urw-naimuddin94.vercel.app/brands/${name}`
    ).then((response) => response.json()),
  ]);

  return { companies, products };
};
