/* 
My react dev friend had to do this while building a feature at work.
*/

const object1 = {
    closedCreditMemos: [],
    closedDeliveryOrders: [],
    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],
    openCreditMemos: [],
    openDeliveryOrders: [
        {
            id: 123,
            type: "delivery",
            gateCode: "#2552",
        },
        {
            id: 153,
            type: "delivery",
            instructions: "Place in secure delivery box.",
        },
    ],
    openPickupOrders: [
        {
            id: 123,
            type: "pickup",
        },
    ],
    returnPickupOrders: [],
};

const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays() {
    const functionalFlattenObjectOfArrays = (o) => {
        // Get an array of the object's values. Since they are arrays it will be 2d.
        return Object.values(o)
            // Reduce the nested arrays into a single array.
            .reduce((mergedArr, arrOfObjects) => mergedArr.concat(arrOfObjects), [])
            // Transform the data to the structure we want (not all keys are wanted).
            .map(({ id, type }) => ({
                id,
                type,
            }));
    }

/*****************************************************************************/