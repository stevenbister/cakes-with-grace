/**
 * Check if the value passed is greater than one and add n 's' to the end of the string if true.
 *
 * @param { number } val - Number of items the string is describing
 * @param { string } string - Verb
 * @returns { string }
 */
const isPlural = ( val, string ) => val > 1 ? `${string}s` : `${string}`;

/**
 * Function to convert minutes to hours.
 *
 * @param { number } mins - Time in minutes
 * @returns { string }
 */
const minutesToHours = ( mins ) => {
  // Check if mins are greather than 60
  if ( mins > 60 ) {
    // Get the number of hours within the minutes and round down to remove the remainder
    const hours = (mins / 60);
    const roundHours = Math.floor(hours);
    // Take the remainder hours and multiply them by 60 to get the minutes within the hour
    const minutes = (hours - roundHours) * 60;
    const roundMinutes = Math.floor(minutes);

    return `${roundHours} ${isPlural(roundHours, 'hour')}, ${roundMinutes} ${isPlural(roundMinutes, 'minute')}`
  }
  return `${mins} ${isPlural(mins, 'minute')}`
}

/**
 * Capitalise first letter of a string
 *
 * @param { string } string - Word to be capitalised
 * @returns { string }
 */
const capitalise = (string) => (string.charAt(0).toUpperCase() + string.slice(1))

export { isPlural, minutesToHours, capitalise }
