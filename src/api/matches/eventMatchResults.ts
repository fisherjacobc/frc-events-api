import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";

interface GetEventMatchResultsResponse {
  statusCode: 200;
  data: {
    Matches: Array<{
      isReplay: boolean;
      matchVideoLink?: string;
      description: string;
      matchNumber: number;
      scoreRedFinal?: number;
      scoreRedFoul?: number;
      scoreRedAuto?: number;
      scoreBlueFinal?: number;
      scoreBlueFoul?: number;
      scoreBlueAuto?: number;
      autoStartTime: Date;
      actualStartTime?: Date;
      tournamentLevel: "Practice" | "Qualification" | "Playoff";
      postResultTime?: Date;
      teams: Array<{
        teamNumber: number;
        station: `${"Red" | "Blue"}${1 | 2 | 3}`;
        dq: boolean;
      }>;
    }>;
  };
}

/**
 * Get event match results
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
 * const playoffMatcheResultsTeam339 = await frc.api.matches.getEventMatchResults("vaash", "playoff", 339);
 * ```
 *
 * @param eventCode The event code
 * @param tournamentLevel The tournament level to filter by (practice, qual, or playoff)
 * @param team The team to filter by
 * @param startMatch The match number to start the filter with
 * @param endMatch The match number to end the filter with
 * @param season The season year (e.g. 2024)
 * @returns Event results data based on the inputs provided, including the teams in the match, the level of the match, and other information
 */
export async function getEventMatchResults(
  eventCode: string,
  tournamentLevel?: "practice" | "qual" | "playoff",
  team?: number,
  startMatch?: number,
  endMatch?: number,
  season: number = axios.defaults.season
): Promise<Response<GetEventMatchResultsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetEventMatchResultsResponse["data"]>
  >(
    `/${season}/matches/${eventCode}?tournamentLevel=${tournamentLevel}&teamNumber=${team}&start=${startMatch}&end=${endMatch}`
  );
  res.data;

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
