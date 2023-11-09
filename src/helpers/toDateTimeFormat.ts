import { DateTime } from "luxon";

const toDateTimeFormat = (dateTime: number) => DateTime.fromSeconds(dateTime).toFormat("LLL d, h:mma");

export default toDateTimeFormat;
