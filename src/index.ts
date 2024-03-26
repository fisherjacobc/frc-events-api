import Axios from "axios";
import * as api from "./api";

declare module "axios" {
  interface AxiosDefaults {
    season: number;
  }
}

interface APIOptions {
  /**
   * Your FIRST Events API Username
   */
  username: string;
  /**
   * Your FIRST Events API Password/Auth Token
   */
  auth: string;
  /**
   * Default season for API Requests
   *
   * Must be a valid integer of a year between `1992` to the current year
   */
  season: number;
}

/**
 * @internal
 */
export const axios = Axios.create();

/**
 * @param options API Options & Defaults
 * @returns an interface for the FIRST Events API
 */
export default function FRC(options: APIOptions) {
  axios.defaults.baseURL = "https://frc-api.firstinspires.org/v3.0";
  axios.defaults.season = options.season;
  axios.defaults.auth = {
    username: options.username,
    password: options.auth,
  };

  return api;
}
