"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
// Please run `npx jest --clearCache` before running the tests
describe("Tanzanian Phone Number Validation", () => {
    it("should return true for a valid Tanzanian phone number", () => {
        const validNumbers = [
            "+255712345696",
            "+255703123456",
            "+25524737422",
            "0703123456",
            "0724737422",
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
            // Operator: MIC Tanzania Limited (tiGo / Mixx by Yas)
            "65",
            "66",
            "67",
            "70",
            "71",
            // Operator: Tanzania Telecommunications Company Ltd (TTCL)
            "73",
            // Operator: Vodacom Tanzania Limited (Vodacom)
            "24",
            "74",
            "75",
            "76",
            // Operator: MIC Tanzania Limited (tiGo)
            "77",
            // Operator: Airtel Tanzania Limited (airtel)
            "78",
        ];
        operationalPrefixes.forEach((prefix) => {
            const validNumber = prefix === "24" ? `+255${prefix}421699` : `+255 ${prefix}4216996`;
            expect((0, index_1.isValidPhoneNumber)(validNumber)).toBe(true);
            const details = (0, index_1.getPhoneNumberDetails)(validNumber);
            expect(details.isValid).toBe(true);
            expect(details.telecomCompanyDetails).toBeDefined();
        });
    });
    it("should identify prefix 24 as M-Pesa (Vodacom)", () => {
        var _a, _b;
        const mpesaNumber = "0724737422";
        expect((0, index_1.isValidPhoneNumber)(mpesaNumber)).toBe(true);
        const details = (0, index_1.getPhoneNumberDetails)(mpesaNumber);
        expect(details.isValid).toBe(true);
        expect((_a = details.telecomCompanyDetails) === null || _a === void 0 ? void 0 : _a.prefix).toBe(24);
        expect((_b = details.telecomCompanyDetails) === null || _b === void 0 ? void 0 : _b.brand).toBe("Vodacom");
    });
    it("should identify prefix 70 as Mixx by Yas (tiGo)", () => {
        var _a, _b;
        const mixxNumber = "255703123456";
        expect((0, index_1.isValidPhoneNumber)(mixxNumber)).toBe(true);
        const details = (0, index_1.getPhoneNumberDetails)(mixxNumber);
        expect(details.isValid).toBe(true);
        expect((_a = details.telecomCompanyDetails) === null || _a === void 0 ? void 0 : _a.prefix).toBe(70);
        expect((_b = details.telecomCompanyDetails) === null || _b === void 0 ? void 0 : _b.brand).toBe("tiGo");
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
