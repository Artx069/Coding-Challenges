/*
Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

Gameboard:
https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/snakesandladdersboard.jpg

Task
Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.
The Board

Rules
1.  There are two players and both start off the board on square 0.

2.  Player 1 starts and alternates with player 2.

3.  You follow the numbers up the board in order 1=>100

4.  If the value of both die are the same then that player will have another go.

5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.
Returns
Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

Return Game over! if a player has won and another player tries to play.

Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.
*/
import java.util.HashMap;

public class SnakesLadders {
    int[] players = new int[2];
    int activeP = 0;
    boolean change = false;
    HashMap<Integer, Integer> laddersAndSnakes = new HashMap<>();
    public SnakesLadders() {
        laddersAndSnakes.put(2, 38);
        laddersAndSnakes.put(7, 14);
        laddersAndSnakes.put(8, 31);
        laddersAndSnakes.put(15, 26);
        laddersAndSnakes.put(16, 6);
        laddersAndSnakes.put(21, 42);
        laddersAndSnakes.put(28, 84);
        laddersAndSnakes.put(36, 44);
        laddersAndSnakes.put(46, 25);
        laddersAndSnakes.put(49, 11);
        laddersAndSnakes.put(51, 67);
        laddersAndSnakes.put(62, 19);
        laddersAndSnakes.put(64, 60);
        laddersAndSnakes.put(71, 91);
        laddersAndSnakes.put(74, 53);
        laddersAndSnakes.put(78, 98);
        laddersAndSnakes.put(87, 94);
        laddersAndSnakes.put(89, 68);
        laddersAndSnakes.put(92, 88);
        laddersAndSnakes.put(95, 75);
        laddersAndSnakes.put(99, 80);
    }
    public String play(int die1, int die2) {
        if(change == true){
            activeP = Math.abs(activeP - 1);
            change = false;
        }
        if(players[0] == 100 || players[1] == 100){
            return "Game over!";
        }
        if(players[activeP] + die1 + die2 > 100){
            players[activeP] = 100 - (players[activeP] + die1 + die2 -100);
        }else{
          players[activeP] += die1 + die2;
        }
        if(players[Math.abs(activeP -1)] == 100){
            return "Game over!";
        }
        
        if(players[activeP] == 100){
            return "Player " + (activeP +1) + " Wins!";
        }
        if(laddersAndSnakes.containsKey(players[activeP])){
            players[activeP] = laddersAndSnakes.get(players[activeP]);
        }
        if(die1 != die2){
            change = !change;
        }

        return "Player " + (activeP +1) + " is on square " + players[activeP];
    
    }
}