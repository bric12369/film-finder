import formatDate from "./format-date";
import { describe, expect, test } from "vitest";

describe('formatDate', () => {
    test('returns empty string for empty input', () => {
        expect(formatDate()).toBe('')
    })
    test('reformats iso formatted date to British standard', () => {
        const isoDate = '2020-01-31'
        const expected = '31/01/2020'
        expect(formatDate(isoDate)).toBe(expected)
    })
    test('returns empty string if either year, month or day is missing', () => {
        const isoDate = '2020-01'
        expect(formatDate(isoDate)).toBe('')
    })
})