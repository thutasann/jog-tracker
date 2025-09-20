// @ts-check

import { readFileSync, writeFileSync } from 'fs';

/**
 * Load JSON file safely
 * @template T
 * @param {string} filepath - Path to JSON file
 * @param {T} defaultValue - Default value if file doesn't exist
 * @returns {T} Parsed JSON or default value
 */
export function loadJSON(filepath, defaultValue) {
  try {
    const content = readFileSync(filepath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return defaultValue;
  }
}

/**
 * Save JSON file with pretty formatting
 * @param {string} filepath - Path to JSON file
 * @param {any} data - Data to save
 */
export function saveJSON(filepath, data) {
  writeFileSync(filepath, JSON.stringify(data, null, 2));
}

/**
 * Format date to YYYY-MM-DD string
 * @param {Date} date - Date object
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Parse date string to Date object
 * @param {string} dateStr - Date in YYYY-MM-DD format
 * @returns {Date} Date object
 */
export function parseDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Get today's date in YYYY-MM-DD format
 * @returns {string} Today's date
 */
export function getTodayDate() {
  return formatDate(new Date());
}