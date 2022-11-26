/**
 * Basic info for a deli
 */
export default interface DeliInfo {
    name: string;
    distance: number;
    address: string;
    rating: number;
    sells: string[];
    images: string[];
    id: number;
}
