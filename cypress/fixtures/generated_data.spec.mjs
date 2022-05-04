import { readFileSync, writeFileSync } from "fs";
import pkg from "papaparse";

const { parse } = pkg;

    try {
        const csvFile = readFileSync("./generatedBy_react-csv.csv", "utf8");
        const csvResults = parse(csvFile, {
            header: true,
            complete: csvData => csvData.data
        }).data;
        writeFileSync(
        "./testDataFromCSV.json",
        JSON.stringify(csvResults, null, 4),
        "utf8"
        );
    } catch (e) {
        throw Error(e);
    }