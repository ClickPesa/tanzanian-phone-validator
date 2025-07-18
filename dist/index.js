"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhoneNumberDetails = exports.isValidPhoneNumber = void 0;
const general_1 = require("./helpers/general");
const regex_1 = require("./helpers/regex");
/**
 * Checks if a phone number is valid according to Tanzanian phone number rules.
 * @param phoneNumber The phone number to validate.
 * @returns True if the phone number is valid, false otherwise.
 */
function isValidPhoneNumber(phoneNumber) {
    return regex_1.tanzanianPhoneNumberRegex.test(phoneNumber);
}
exports.isValidPhoneNumber = isValidPhoneNumber;
/**
 * Gets details of a Tanzanian phone number.
 * @param phoneNumber The phone number to get details for.
 * @returns An object with information about the phone number.
 */
function getPhoneNumberDetails(phoneNumber) {
    const isValid = isValidPhoneNumber(phoneNumber);
    const phoneNumberPrefix = isValid ? (0, general_1.extractMobilePrefix)(phoneNumber) : null;
    const telecomCompanyDetails = phoneNumberPrefix
        ? (0, general_1.getTelecomCompany)(phoneNumberPrefix)
        : null;
    return {
        isValid,
        telecomCompanyDetails,
    };
}
exports.getPhoneNumberDetails = getPhoneNumberDetails;
