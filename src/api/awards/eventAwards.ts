import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";
import { GetAwardsResponse } from ".";

/**
 * Get the list of awards for an event
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
 * const eventAwardsList = await frc.api.awards.getEventAwards();
 * ```
 *
 * @param eventCode The event code
 * @param season The season year (e.g. 2024)
 * @returns The list of awards
 */
export async function getEventAwards(
  eventCode: string,
  season: number = axios.defaults.season
): Promise<Response<GetAwardsResponse>> {
  const res = await axios.get<any, AxiosResponse<GetAwardsResponse["data"]>>(
    `/${season}/awards/event/${eventCode}`
  );
  res.data;

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
