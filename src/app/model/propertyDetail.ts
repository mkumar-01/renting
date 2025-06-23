export default interface iPropertyDetail {
    id: number,
    picture: string,
    apartmentName: string,
    propertyLocation: {
        area: string,
        state: string,
    },
    propertyDetail: {
        area: string,
        leaseType: string
    },
    expectedRent: {
        expectedRent: number,
        isNegotiable: boolean,
        priceMode: string
    },
    otherDescription: {
        title: string,
        description: string
    }
}