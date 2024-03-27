import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";

interface GetEventRankingsResponse {
  statusCode: 200;
  data: {
    Rankings: Array<{
      rank: number;
      teamNumber: number;
      sortOrder1: number;
      sortOrder2: number;
      sortOrder3: number;
      sortOrder4: number;
      sortOrder5: number;
      sortOrder6: number;
      wins: number;
      losses: number;
      ties: number;
      qualAverage: number;
      dq: number;
      matchesPlayed: number;
    }>;
  };
}

/**
 * Get rankings in an event
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
 * const eventRankingsTop10 = await frc.api.rankings.getEventRankings("vaash", undefined, 10);
 * ```
 *
 * @param eventCode The event code
 * @param team The team to filter by (only show their ranking data)
 * @param top The top # of teams to show
 * @param season The season year (e.g. 2024)
 * @returns The team rankings for an event
 */
export async function getEventRankings(
  eventCode: string,
  team?: number,
  top?: number,
  season: number = axios.defaults.season
): Promise<Response<GetEventRankingsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetEventRankingsResponse["data"]>
  >(
    `/${season}/rankings/${eventCode}?teamNumber=${team ?? ""}&top=${top ?? ""}`
  );

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
