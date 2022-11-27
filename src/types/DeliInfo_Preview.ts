import Deli_ID from "types/Deli_ID";

/**
 * Preview info for a deli
 */
export default interface DeliInfo_Preview {
    name: string;
    distance: number;
    address: string;
    rating: number;
    sells: string[];
    images: string[];
    id: Deli_ID;
}
