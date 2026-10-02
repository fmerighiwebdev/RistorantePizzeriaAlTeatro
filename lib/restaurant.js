const address = "Via Angelo Anelli, 40A, Desenzano del Garda (BS)";

export const restaurantContact = {
  address,
  phone: "+39 030 4196425",
  phoneHref: "tel:+390304196425",
  directionsHref: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `Ristorante Pizzeria Al Teatro, ${address}`
  )}`,
};
