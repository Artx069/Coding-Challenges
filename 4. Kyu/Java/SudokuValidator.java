/*
Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
*/
import java.util.*;
public class SudokuValidator {
    public static boolean check(int[][] sudoku) {
        ArrayList<HashSet<Integer>> groups = new ArrayList<>();
        ArrayList<HashSet<Integer>> diagonals = new ArrayList<>();

        for(int i = 0; i < 9; i++){
            groups.add(new HashSet<>());
            diagonals.add(new HashSet<>());
        }
        for(int i = 0; i < sudoku.length; i++){
            for(int j = 0; j < sudoku[i].length; j++){
                if(i < 3 && j < 3){
                    groups.get(0).add(sudoku[i][j]);
                }else if(i < 3 && j < 6){
                    groups.get(1).add(sudoku[i][j]);
                }else if(i < 3 && i < 9){
                    groups.get(2).add(sudoku[i][j]);
                }else if(i < 6 && j < 3){
                    groups.get(3).add(sudoku[i][j]);
                }else if(i < 6 && j < 6){
                    groups.get(4).add(sudoku[i][j]);
                }else if(i < 6 && i < 9){
                    groups.get(5).add(sudoku[i][j]);
                }else if(i < 9 && j < 3){
                    groups.get(6).add(sudoku[i][j]);
                }else if(i < 9 && j < 6){
                    groups.get(7).add(sudoku[i][j]);
                }else if(i < 9 && j < 9){
                    groups.get(8).add(sudoku[i][j]);
                }
            }
        }
        for (HashSet<Integer> hashSet : groups){
            if(!hashSet.toString().equals("[1, 2, 3, 4, 5, 6, 7, 8, 9]")){
                return false;
            }
        }

        for(int i = 0; i < sudoku[0].length; i++){
            for(int j = 0; j < sudoku.length; j++){
                if(diagonals.get(i).contains(sudoku[j][i])){
                    return false;
                }
                diagonals.get(i).add(sudoku[j][i]);
            }
        }

        for(int[] arr : sudoku){
            if(!Arrays.toString(Arrays.stream(arr).sorted().toArray()).equals("[1, 2, 3, 4, 5, 6, 7, 8, 9]")){
                return false;
            }
        }
      
      return true;
    }
}