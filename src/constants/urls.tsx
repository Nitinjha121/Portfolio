// Base paths for image sources
const IMAGE_KIT_BASE_PATH = "https://ik.imagekit.io/kggne4pv7or";
const IMAGE_KIT_PROJECT_BASE_PATH = `${IMAGE_KIT_BASE_PATH}/Portfolio/Projects`;
export const CONTACT_FORM_URL = import.meta.env.VITE_CONTACT_FORM_URL;

const SANITY_BASE_PATH = "https://cdn.sanity.io/images/7d032iix/production";

// Utility function to generate ImageKit URLs
const generateImageKitUrl = (path: string) =>
  `${IMAGE_KIT_PROJECT_BASE_PATH}/${path}`;

// Utility function to generate Sanity image URLs
const generateSanityImageUrl = (path: string) => `${SANITY_BASE_PATH}/${path}`;

// ImageKit project image URLs
export const TeachEdison_Image_Url = generateImageKitUrl(
  "TeachEdison%20Home%20Page_eCHZwfnSO.png"
);
export const FleetShip_Image_Url = generateImageKitUrl(
  "Screenshot%202025-02-24%20at%209.38.29%E2%80%AFPM_uOJahUfGg.png"
);
export const BlueMarble_Image_Url = generateImageKitUrl(
  "Screenshot%202025-02-24%20at%209.45.25%E2%80%AFPM_sVNMQQrLU.png"
);
export const ForteFit_Image_Url = generateImageKitUrl(
  "Screenshot%202025-02-24%20at%209.45.54%E2%80%AFPM_NaZoVek5e.png"
);
export const EdisonOS_Image_Url = generateImageKitUrl(
  "Screenshot%202025-02-24%20at%2010.28.02%E2%80%AFPM_l82Xy7npeU.png"
);

// Sanity image URLs using the utility function
export const Unsplash_Image_Url = generateSanityImageUrl(
  "5ce31e49814cee1a6ec8adfa6e1655a224421669-1905x928.png"
);
export const IMDB_Image_Url = generateSanityImageUrl(
  "d0e02715084ce2c07925baa75999cedcc52dc7bc-1903x855.jpg"
);
export const Music_Player_Image_Url = generateSanityImageUrl(
  "030dac223e1eeb42e94a90399b770d9bfe4718c5-1903x855.jpg"
);
export const Ignite_Image_Url = generateSanityImageUrl(
  "d3528c7395ec218574d5eafce0404b9409d812fe-1903x899.jpg"
);
