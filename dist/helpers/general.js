"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTelecomCompany = exports.extractMobilePrefix = void 0;
const telecom_companies_1 = require("./telecom-companies");
const regex_1 = require("./regex");
function extractMobilePrefix(mobileNumber) {
    const normalizedNumber = mobileNumber.replace(/[-.\s]/g, "");
    const match = normalizedNumber.match(regex_1.tanzanianPhoneNumberRegex);
    if (!match) {
        return null;
    }
    if (match[1]) {
        return match[1];
    }
    if (/^0724\d{6}$/.test(normalizedNumber)) {
        return "24";
    }
    return match[2] || null;
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
