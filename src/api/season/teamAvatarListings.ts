import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";

interface GetTeamAvatarListingsResponse {
  statusCode: 200;
  data: {
    teams: Array<{
      teamNumber: number;
      encodedAvatar: string;
    }>;
    teamCountTotal: number;
    teamCountPage: number;
    pageCurrent: number;
    pageTotal: number;
  };
}

/**
 * Get team avatar listings
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
 * const team339DCMPAvatar = await frc.api.season.getTeamAvatarListings("chcmp", 339);
 * ```
 *
 * @param eventCode The event code
 * @param team The team to filter by
 * @param page The page to show (defaults to 1)
 * @param season The season year (e.g. 2024)
 * @returns The team avatar listings
 */
export async function getTeamAvatarListings(
  eventCode?: string,
  team?: number,
  page?: number,
  season: number = axios.defaults.season
): Promise<Response<GetTeamAvatarListingsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetTeamAvatarListingsResponse["data"]>
  >(
    `/${season}/avatars?teamNumber=${team ?? ""}&eventCode=${
      eventCode ?? ""
    }&page=${page ?? ""}`
  );

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
