"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
// Please run `npx jest --clearCache` before running the tests
describe("Tanzanian Phone Number Validation", () => {
    it("should return true for a valid Tanzanian phone number", () => {
        const validNumbers = [
            "+255712345696",
            "0712349878",
            "0612345988",
            "0745687901",
        ];
        validNumbers.forEach((number) => {
            expect((0, index_1.isValidPhoneNumber)(number)).toBe(true);
            const details = (0, index_1.getPhoneNumberDetails)(number);
            expect(details.isValid).toBe(true);
            expect(details.telecomCompanyDetails).toBeDefined();
        });
    });
    it('should return true for phone numbers with "Operational" prefixes', () => {
        const operationalPrefixes = [
            // Operator: Viettel Tanzania Limited (halotel)
            "61",
            "62",
            // Operator: MIC Tanzania Limited (tiGo)
            "65",
            "66",
            "67",
            "71",
            // Operator: Tanzania Telecommunications Company Ltd (TTCL)
            "73",
            // Operator: Vodacom Tanzania Limited (Vodacom)
            "74",
            "75",
            "76",
            // Operator: MIC Tanzania Limited (tiGo)
            "77",
            // Operator: Airtel Tanzania Limited (airtel)
            "78",
        ];
        operationalPrefixes.forEach((prefix) => {
            const validNumber = `+255 ${prefix}4216996`;
            expect((0, index_1.isValidPhoneNumber)(validNumber)).toBe(true);
            const details = (0, index_1.getPhoneNumberDetails)(validNumber);
            expect(details.isValid).toBe(true);
            expect(details.telecomCompanyDetails).toBeDefined();
        });
    });
    it("should return false for an invalid Tanzanian phone number", () => {
        const invalidNumbers = [
            "12345678",
            "07123456789",
            "+255812345678",
            "07512345678",
            "071234567A",
            "071234567", // Missing the last digit
        ];
        invalidNumbers.forEach((number) => {
            expect((0, index_1.isValidPhoneNumber)(number)).toBe(false);
            const details = (0, index_1.getPhoneNumberDetails)(number);
            expect(details.isValid).toBe(false);
            expect(details.telecomCompanyDetails).toBe(null);
        });
    });
});
