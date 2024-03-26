import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";

interface GetEventAlliancesResponse {
  statusCode: 200;
  data: {
    Alliances: Array<{
      number: number;
      captain: number;
      round1: number;
      round2: number;
      round3: number | null;
      backup: number | null;
      backupReplaced: number | null;
      name: string;
    }>;
    count: number;
  };
}

/**
 * Get playoff alliances in an event
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
 * const playoffAlliances = await frc.api.alliance.getEventAlliances("vaash");
 * ```
 *
 * @param eventCode The event code
 * @param season The season year (e.g. 2024)
 * @returns The alliances that are in the playoffs for an event
 */
export async function getEventAlliances(
  eventCode: string,
  season: number = axios.defaults.season
): Promise<Response<GetEventAlliancesResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetEventAlliancesResponse["data"]>
  >(`/${season}/alliances/${eventCode}`);
  res.data;

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
