// @ts-check

/**
 * @typedef {Object} Exercise
 * @property {string} date - Date in YYYY-MM-DD format
 * @property {string} activity - Type of activity (e.g., "Jogging")
 */

/**
 * @typedef {Object} ExerciseData
 * @property {Exercise[]} exercises - Array of exercise entries
 */

/**
 * @typedef {Object} StreakData
 * @property {number} current_streak - Current consecutive days
 * @property {number} total_days - Total exercise days
 * @property {string} last_updated - Last exercise date or "Never"
 */

/**
 * @typedef {Object} Milestone
 * @property {number} days - Days required for milestone
 * @property {string} text - Milestone text with emoji
 */

// Export empty object to make this a module
export {};