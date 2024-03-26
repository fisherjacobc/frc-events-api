// export * from "./season";
// export * from "./awards";
// export * from "./matches";
// export * from "./rankings";
export * from "./schedule";
export * as alliance from "./alliance";

export type Response<T> =
  | T
  | BadRequest
  | UnauthorizedResponse
  | InvalidEvent
  | InvalidSeasonOrPathResponse
  | InternalServerError;

export interface BadRequest {
  statusCode: 400;
  data: unknown;
}

export interface UnauthorizedResponse {
  statusCode: 401;
}

export interface InvalidEvent {
  statusCode: 404;
  data: "Invalid Event Requested : No event was found using the Season 2024 and Event Code";
}

export interface InvalidSeasonOrPathResponse {
  statusCode: 501;
  data: "Request Did Not Match Any Current API Pattern : Request Did Not Match Any Current API Pattern";
}

export interface InternalServerError {
  statusCode: 500;
  data: {
    code: 500;
    message: "Internal Server Error";
  };
}
