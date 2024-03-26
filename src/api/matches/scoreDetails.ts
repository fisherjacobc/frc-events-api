import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";

interface GetScoreDetailsResponse {
  statusCode: 200;
  data: {
    Schedule: Array<{
      field: string;
      tournamentLevel: "Practice" | "Qualification" | "Playoff";
      description: string;
      startTime: Date;
      matchNumber: number;
      teams: Array<{
        teamNumber: number;
        station: `${"Red" | "Blue"}${1 | 2 | 3}`;
        surrogate: boolean;
      }>;
    }>;
  };
}

/**
 * Get event match score details
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
 * const final2ScoreDetails = await frc.api.schedule.getScoreDetails("vaash", "playoff", 14);
 * ```
 *
 * @param eventCode The event code
 * @param tournamentLevel The tournament level to filter by (practice, qual, or playoff)
 * @param match The specific match to get details for
 * @param startMatch The match number to start the filter with
 * @param endMatch The match number to end the filter with
 * @param season The season year (e.g. 2024)
 * @returns Event schedule data based on the inputs provided, including the teams in the match, the level of the match, and other information
 */
export async function getScoreDetails(
  eventCode: string,
  tournamentLevel: "practice" | "qual" | "playoff",
  match?: number,
  startMatch?: number,
  endMatch?: number,
  season: number = axios.defaults.season
): Promise<Response<GetScoreDetailsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetScoreDetailsResponse["data"]>
  >(
    `/${season}/schedule/${eventCode}?tournamentLevel=${tournamentLevel}&matchNumber=${
      match ?? ""
    }&start=${startMatch ?? ""}&end=${endMatch ?? ""}`
  );
  res.data;

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
