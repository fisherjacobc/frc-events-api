import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";
import { CalculatePointsResponse, TournamentType } from ".";

/**
 * Calculate Playoff Points
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
 * const pointsForRank17Of24 = await frc.api.rankings.district.calculatePlayoffPoints("DistrictEvent", 0, 3, 0);
 * ```
 *
 * @param tournamentType The type of tournament
 * @param qfWins # of Quarter Final wins
 * @param sfWins # of Semi Final wins
 * @param fWins # of Final wins
 * @param season The season year (e.g. 2024)
 * @returns The number of points the team will get based on # of teams at the event
 */
export async function calculatePlayoffPoints(
  tournamentType: TournamentType,
  qfWins: number,
  sfWins: number,
  fWins: number,
  season: number = axios.defaults.season
): Promise<Response<CalculatePointsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<CalculatePointsResponse["data"]>
  >(
    `/${season}/rankings/district/qualPerformanceCalculation?tournamentType=${tournamentType}&quarterFinalWins=${qfWins}&semiFinalWins=${sfWins}&finalWins=${fWins}`
  );
  res.data;

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
