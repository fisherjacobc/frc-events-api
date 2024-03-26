import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";
import { TournamentType } from "../rankings/district";

interface GetAwardsListingsResponse {
  statusCode: 200;
  data: {
    awards: Array<{
      awardId: number;
      eventType: TournamentType;
      description: string;
      forPerson: boolean;
    }>;
  };
}

/**
 * Get the list of awards for a season
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
 * const awardsList = await frc.api.awards.getAwardsListing();
 * ```
 *
 * @param season The season year (e.g. 2024)
 * @returns The list of awards data
 */
export async function getAwardsListings(
  season: number = axios.defaults.season
): Promise<Response<GetAwardsListingsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetAwardsListingsResponse["data"]>
  >(`/${season}/awards/list`);
  res.data;

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
