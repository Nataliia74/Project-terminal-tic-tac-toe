import { checkRow } from "../status-checker";
import { checkColumn } from "../status-checker";
import { checkDiagonal } from "../status-checker";
import { isGameOver } from "../status-checker";

test("checkRow should return true if there are the same player on all positions on the one row ", () => {
  const board = [
    ["x", "x", "x"],
    ["o", "x", "o"],
    ["o", "o", "x"],
  ];
  const player = "x";
  const rowNumber = 1;
  expect(checkRow(board, player, rowNumber)).toBe(true);
});

test("checkRow should return false if there are not the same player on all positions on the one row ", () => {
  const board = [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["o", "o", "x"],
  ];
  const player = "x";
  const rowNumber = 1;
  expect(checkRow(board, player, rowNumber)).toBe(false);
});

test("checkColumn should return false if there are not the same player on all positions on the one column ", () => {
  const board = [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["o", "o", "x"],
  ];
  const player = "o";
  const columnNumber = 1;
  expect(checkColumn(board, player, columnNumber)).toBe(false);
});

test("checkColumn should return true if there are the same player on all positions on the one column ", () => {
  const board = [
    ["o", "o", "x"],
    ["o", "x", "o"],
    ["o", "o", "x"],
  ];
  const player = "o";
  const columnNumber = 1;
  expect(checkColumn(board, player, columnNumber)).toBe(true);
});

test("checkDiagonal should return false if there are not the same player on all positions on the one diagonal ", () => {
  const board = [
    ["o", "o", "x"],
    ["o", "x", "o"],
    ["o", "o", "x"],
  ];
  const player = "x";
  expect(checkDiagonal(board, player)).toBe(false);
});

test("checkDiagonal should return true if there are the same player on all positions on the one diagonal ", () => {
  const board = [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["o", "o", "x"],
  ];
  const player = "x";
  expect(checkDiagonal(board, player)).toBe(true);
});

test("isGameOver should return true if one of the player won or if no more movements left ", () => {
  const board = [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["o", "o", "x"],
  ];
  expect(isGameOver(board)).toBe(true);
});

test("isGameOver should return false if no one of the player won or if there is more movements left ", () => {
  const board = [
    ["x", "o", "x"],
    ["x", "o", "_"],
    ["o", "x", "o"],
  ];
  expect(isGameOver(board)).toBe(false);
});
