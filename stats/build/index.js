"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Create object fit with interface
// const csvFileReader = new CsvFileReader("football.csv");
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// const summary = Summary.winsAnalysisWithHtmlReport("Man United");
const summary = Summary_1.Summary.winsAnalysisWithConsoleReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
