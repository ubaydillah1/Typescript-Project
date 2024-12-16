import fs from "fs";
import { dateStringToDate } from "./Utils";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    fs.readFileSync(this.filename, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
        ];
      });
  }
}
