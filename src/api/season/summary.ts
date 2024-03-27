import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";

interface GetSeasonSummaryResponse {
  statusCode: 200;
  data: {
    frcChampionship?: string;
    eventCount: number;
    gameName: string;
    kickoff: Date;
    rookieStart: number;
    teamCount: number;
    frcChampionships: Array<{
      name: string;
      startDate: Date;
      location: string;
    }>;
  };
}

/**
 * Get the season summary
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
 * const seasonSummary = await frc.api.season.getSummary();
 * ```
 *
 * @param season The season year (e.g. 2024)
 * @returns The season summary
 */
export async function getSummary(
  season: number = axios.defaults.season
): Promise<Response<GetSeasonSummaryResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetSeasonSummaryResponse["data"]>
  >(`/${season} `);

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
