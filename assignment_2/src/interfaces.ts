export interface ITrip {
    id?: string,
    startTime: string,
    fromStation: string,
    price: number,
    seats: number,
    toStation: string,
    busHouseId: string,
    stationId: string,
    busHouses?: IBusHouse,
    station?: IStation,
}
export interface IBusHouse {
    id: string,
    name: string,
    address: string,
    phone: string
}
export interface IStation {
    id: string,
    name: string,
    province: string,
}