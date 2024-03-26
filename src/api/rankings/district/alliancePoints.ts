import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";
import { CalculatePointsResponse, TournamentType } from ".";

export type AllianceSizeType =
  | "TwoAlliance"
  | "FourAlliance"
  | "SixAlliance"
  | "EightAlliance"
  | "SixteenAlliance";

type AllianceRole =
  | "None"
  | "Captain"
  | "Round1"
  | "Round2"
  | "Round3"
  | "Backup";

/**
 * Calculate Alliance Points
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
 * const pointsFor2ndPick2ndAlliance = await frc.api.rankings.district.calculateAlliancePoints("DistrictEvent", "EightAlliance", 2, "Round2");
 * ```
 *
 * @param tournamentType The type of tournament
 * @param allianceSizeType The type of alliance sizes for playoffs
 * @param allianceNumber What # seed the alliance is
 * @param allianceRole What role the team is in the alliance (e.g. Captain)
 * @param season The season year (e.g. 2024)
 * @returns The number of points the team will get based on tournament & alliance information
 */
export async function calculateAlliancePoints(
  tournamentType: TournamentType,
  allianceSizeType: AllianceSizeType,
  allianceNumber: number,
  allianceRole: AllianceRole,
  season: number = axios.defaults.season
): Promise<Response<CalculatePointsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<CalculatePointsResponse["data"]>
  >(
    `/${season}/rankings/district/allianceSelectionCalculation?tournamentType=${tournamentType}&sizeType=${allianceSizeType}&allianceNumber=${allianceNumber}&allianceRole=${allianceRole}`
  );
  res.data;

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
