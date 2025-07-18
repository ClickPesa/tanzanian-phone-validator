"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTelecomCompany = exports.extractMobilePrefix = void 0;
const telecom_companies_1 = require("./telecom-companies");
const regex_1 = require("./regex");
function extractMobilePrefix(mobileNumber) {
    const match = mobileNumber.match(regex_1.tanzanianPhoneNumberRegex);
    if (!match) {
        return null;
    }
    return (match === null || match === void 0 ? void 0 : match[1]) || null;
}
exports.extractMobilePrefix = extractMobilePrefix;
function getTelecomCompany(phoneNumberPrefix) {
    if (!phoneNumberPrefix) {
        return null;
    }
    const matchingCompany = telecom_companies_1.telecomCompanies.find((company) => company.prefix.toString() === phoneNumberPrefix);
    return matchingCompany || null;
}
exports.getTelecomCompany = getTelecomCompany;
