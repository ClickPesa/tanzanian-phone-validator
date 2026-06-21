import { telecomCompanies } from "./telecom-companies";
import { tanzanianPhoneNumberRegex } from "./regex";
import { TelecomCompany } from "../types/general";

export function extractMobilePrefix(mobileNumber: string): string | null {
  const normalizedNumber = mobileNumber.replace(/[-.\s]/g, "");
  const match = normalizedNumber.match(tanzanianPhoneNumberRegex);

  if (!match) {
    return null;
  }

  if (/^(?:\+?255724|0724)\d{6}$/.test(normalizedNumber)) {
    return "24";
  }

  return match[1] || null;
}

export function getTelecomCompany(
  phoneNumberPrefix: string
): TelecomCompany | null {
  if (!phoneNumberPrefix) {
    return null;
  }

  const matchingCompany = telecomCompanies.find(
    (company) => company.prefix.toString() === phoneNumberPrefix
  );
  return matchingCompany || null;
}
