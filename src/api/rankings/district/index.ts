import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";

interface GetDistrictRankingsResponse {
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
 * Get rankings in a FIRST district
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
 * const districtRankingsTop50 = await frc.api.rankings.getDistrictRankings("chs", undefined, 50);
 * ```
 *
 * @param districtCode The district code
 * @param team The team to filter by (only show their ranking data)
 * @param top The top # of teams to show
 * @param page The page to show (defaults to 1)
 * @param season The season year (e.g. 2024)
 * @returns The team rankings for a district
 */
export async function getDistrictRankings(
  districtCode: string,
  team?: number,
  top?: number,
  page?: number,
  season: number = axios.defaults.season
): Promise<Response<GetDistrictRankingsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetDistrictRankingsResponse["data"]>
  >(
    `/${season}/rankings/district?districtCode=${districtCode}&teamNumber=${team}&top=${top}&page=${page}`
  );
  res.data;

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}

export type TournamentType =
  | "None"
  | "Regional"
  | "DistrictEvent"
  | "DistrictChampionship"
  | "DistrictChampionshipWithLevels"
  | "DistrictChampionshipDivision"
  | "ChampionshipSubdivision"
  | "ChampionshipDivision"
  | "Championship"
  | "OffSeason"
  | "OffSeasonWithAzureSync"
  | "Remote";

export interface CalculatePointsResponse {
  statusCode: 200;
  data: number;
}

export * from "./qualPoints";
export * from "./alliancePoints";
export * from "./playoffPoints";
