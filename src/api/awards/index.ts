export * from "./awardsListings";
export * from "./eventAwards";
export * from "./teamAwards";

export interface GetAwardsResponse {
  statusCode: 200;
  data: {
    awards: Array<{
      awardId: number;
      teamId: number;
      eventId: number;
      eventDivisionId?: number;
      eventCode: string;
      name: string;
      series: number;
      teamNumber: number;
      schoolName: string;
      fullTeamName: string;
      person?: string;
      cmpQualifying: boolean;
      cmpQualifyingReason?: string;
    }>;
  };
}
