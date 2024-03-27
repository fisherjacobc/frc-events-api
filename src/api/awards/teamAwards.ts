import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";
import { GetAwardsResponse } from ".";

/**
 * Get the list of awards for a season
 *
 * @example Team awards
 * ```ts
 * import FRC from "first-events-api";
 *
 * const frc = FRC({
 *  username: "YOUR-USERNAME",
 *  auth: "YOUR-API-TOKEN",
 *  season: 2024
 * })
 *
 * const team339Awards = await frc.api.awards.getTeamAwards(339);
 * ```
 *
 * @example Team awards for a specific event
 * ```ts
 * import FRC from "first-events-api";
 *
 * const frc = FRC({
 *  username: "YOUR-USERNAME",
 *  auth: "YOUR-API-TOKEN",
 *  season: 2024
 * })
 *
 * const team339Awards = await frc.api.awards.getTeamAwards(339, "vaash");
 * ```
 *
 * @param eventCode The event code
 * @param team The team #
 * @param season The season year (e.g. 2024)
 * @returns The list of awards
 */
export async function getTeamAwards(
  team: number,
  eventCode?: string,
  season: number = axios.defaults.season
): Promise<Response<GetAwardsResponse>> {
  const res = await axios.get<any, AxiosResponse<GetAwardsResponse["data"]>>(
    eventCode !== undefined
      ? `/${season}/awards/eventteam/${eventCode}/${team}`
      : `/${season}/awards/team/${team}`
  );

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
