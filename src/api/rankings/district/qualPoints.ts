import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";
import { CalculatePointsResponse, TournamentType } from ".";

/**
 * Calculate Qualification Points
 *
 * @example
 * ```ts
 * import FRC from "frc-events-api";
 *
 * const frc = FRC({
 *  username: "YOUR-USERNAME",
 *  auth: "YOUR-API-TOKEN",
 *  season: 2024
 * })
 *
 * const pointsForRank17Of24 = await frc.api.rankings.district.calculateQualPoints("DistrictEvent", 17, 24);
 * ```
 *
 * @param tournamentType The type of tournament
 * @param desiredRank The desired rank to be
 * @param teamsAtEvent The number of teams at the event
 * @param season The season year (e.g. 2024)
 * @returns The number of points the team will get based on # of teams at the event
 */
export async function calculateQualPoints(
  tournamentType: TournamentType,
  desiredRank: number,
  teamsAtEvent: number,
  season: number = axios.defaults.season
): Promise<Response<CalculatePointsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<CalculatePointsResponse["data"]>
  >(
    `/${season}/rankings/district/qualPerformanceCalculation?tournamentType=${tournamentType}&qualificationRank=${desiredRank}&teamsAtEvent=${teamsAtEvent}`
  );
  res.data;

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
