//an array that stores the different delivery options

export const deliveryOptions = [
  {
    id: "1",
    deliveryDay: 7,
    priceCents: 0,
  },
  {
    id: "2",
    deliveryDay: 3,
    priceCents: 599,
  },
  {
    id: "3",
    deliveryDay: 1,
    priceCents: 999,
  },
];


export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;
  //go through the array of options, then check if any of those match the optionID user clicks on
  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option; 
    }
  });

  //if so return either, that option, or return the 0th index incase user somehow clicks the wrong thing
  return deliveryOption || deliveryOptions[0];
}
