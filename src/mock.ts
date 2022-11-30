import DeliInfo_Preview from "types/DeliInfo_Preview";
import Deli_ID from "types/Deli_ID";
import { AppCtx_State } from "./contexts/AppCtx";

/**
 * Mock deli preview data
 */
export const MOCK_DELIDATA_PREVIEW: DeliInfo_Preview = {
    name: "Terry's Market",
    distance: 10,
    address: "327 North End Avenue",
    rating: 9.8,
    sells: ["Medicine", "Snacks"],
    images: ["img1", "img2"],
    id: { deliID: '1' } // id is 0 for now, it gets changed later
}

/**
 * Mock AppCtx Context Data
 */
export const MOCK_APPCTX_STATE: AppCtx_State = {
    selectedDeli: { deliID: '1' }
}

/**
 * Mock nearby delis with ids
 */
export const MOCK_DELILIST: DeliInfo_Preview[] = [
    { ...MOCK_DELIDATA_PREVIEW },
    { ...MOCK_DELIDATA_PREVIEW, id: { deliID: '2' } },
    { ...MOCK_DELIDATA_PREVIEW, id: { deliID: '3' } },
    { ...MOCK_DELIDATA_PREVIEW, id: { deliID: '4' } },
    { ...MOCK_DELIDATA_PREVIEW, id: { deliID: '5' } },
    { ...MOCK_DELIDATA_PREVIEW, id: { deliID: '6' } }
]; 

/**
 * Find a mock deli by ID
 * @param {number} deliID - The DeliDash ID of the wanted deli
 */
export function findDeliById(deliID: string) {
    return MOCK_DELILIST.filter(
        (data) => data.id.deliID === deliID
    );
}
