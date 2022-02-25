import { formatDistanceToNowStrict } from "date-fns";

// find how many days till you birthday 1 exercise

const dateDistantece = formatDistanceToNowStrict(new Date(2022, 2, 29), {
  unit: "day",
});
console.log(dateDistantece);
