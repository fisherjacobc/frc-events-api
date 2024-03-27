import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";

interface GetTeamListingsResponse {
  statusCode: 200;
  data: {
    teams: Array<{
      teamNumber: number;
      nameFull: string;
      nameShort: string;
      city: string;
      stateProv: string;
      country: string;
      rookieYear: number;
      robotName: string;
      districtCode: string;
      schoolName: string;
      website: string;
      homeCMP: string;
    }>;
    teamCountTotal: number;
    teamCountPage: number;
    pageCurrent: number;
    pageTotal: number;
  };
}

/**
 * Get team listings
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
 * const chsVATeams = await frc.api.season.getTeamListings(undefined, undefined, "chs", "virginia");
 * ```
 *
 * @param team The team to filter by
 * @param eventCode The event code
 * @param districtCode The district code
 * @param state The state or province
 * @param page The page to show (defaults to 1)
 * @param season The season year (e.g. 2024)
 * @returns The team listings
 */
export async function getTeamListings(
  team?: number,
  eventCode?: string,
  districtCode?: string,
  state?: string,
  page?: number,
  season: number = axios.defaults.season
): Promise<Response<GetTeamListingsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetTeamListingsResponse["data"]>
  >(
    `/${season}/teams?teamNumber=${team ?? ""}&eventCode=${
      eventCode ?? ""
    }&districtCode=${districtCode ?? ""}&state=${state ?? ""}&page=${
      page ?? ""
    }`
  );

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
