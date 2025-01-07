import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// Create object fit with interface

// const csvFileReader = new CsvFileReader("football.csv");
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// const summary = Summary.winsAnalysisWithHtmlReport("Man United");
const summary = Summary.winsAnalysisWithConsoleReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
