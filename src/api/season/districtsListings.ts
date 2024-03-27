import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";

interface GetDistrictsListingsResponse {
  statusCode: 200;
  data: {
    districts: Array<{
      code: string;
      name: string;
    }>;
  };
}

/**
 * Get the list of districts for a season
 *
 * @example
 * ```ts
 * import FRC from "first-events-api";
 *
 * const frc = FRC({
 *  username: "YOUR-USERNAME",
 *  auth: "YOUR-API-TOKEN",
 *  season: 2024
 * })
 *
 * const districts = await frc.api.season.getDistrictsListings();
 * ```
 *
 * @param season The season year (e.g. 2024)
 * @returns The list of districts data
 */
export async function getDistrictsListings(
  season: number = axios.defaults.season
): Promise<Response<GetDistrictsListingsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetDistrictsListingsResponse["data"]>
  >(`/${season}/districts`);

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
