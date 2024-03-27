import { AxiosResponse } from "axios";
import { axios } from "@";
import { Response } from "@/api";
import { AllianceSizeType, TournamentType } from "../rankings/district";

interface GetDistrictsListingsResponse {
  statusCode: 200;
  data: {
    Events: Array<{
      allianceCount: AllianceSizeType;
      weekNumber: number;
      // Unsure of type
      announcements: string[];
      code: string;
      divisionCode?: string;
      name: string;
      type: TournamentType;
      districtCode: string;
      venue: string;
      city: string;
      stateprov: string;
      country: string;
      dateStart: Date;
      dateEnd: Date;
      address: string;
      website: string;
      webcasts: string[];
      timezone: string;
    }>;
    eventCount: number;
  };
}

/**
 * Get the list of events for a season
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
 * const chsEvents = await frc.api.season.getEventListings(undefined, undefined, "chs");
 * ```
 *
 * @param eventCode The event code
 * @param team The team #
 * @param districtCode The district code
 * @param excludeDistrict Whether to exclude district events or not
 * @param week The week #
 * @param tournamentType The type of tournament
 * @param season The season year (e.g. 2024)
 * @returns The list of districts data
 */
export async function getEventListings(
  eventCode: string,
  team: number,
  districtCode: string,
  excludeDistrict: boolean,
  week: number,
  tournamentType: TournamentType,
  season: number = axios.defaults.season
): Promise<Response<GetDistrictsListingsResponse>> {
  const res = await axios.get<
    any,
    AxiosResponse<GetDistrictsListingsResponse["data"]>
  >(
    `/${season}/events?eventCode=${eventCode}&teamNumber=${team}&districtCode=${districtCode}&excludeDistrict=${excludeDistrict}&weekNumber=${week}&tournamentType=${tournamentType}`
  );

  return {
    //@ts-ignore
    statusCode: res.status,
    data: res.data,
  };
}
