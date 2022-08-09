/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
import java.util.Arrays;

public class HighestScoringWord {

    public static String high(String s) {
        String ALPH = " abcdefghijklmnopqrstuvwxyz";
        
        String sol = "";
    
        for(String word : s.split(" ")){
    
          int countSol = Arrays.stream(sol.split("")).map(x -> ALPH.indexOf(x)).reduce((a, b) -> a + b).get().intValue();
          int countWord = Arrays.stream(word.split("")).map(x -> ALPH.indexOf(x)).reduce((a, b) -> a + b).get().intValue();
            
          if(countWord > countSol){
                sol = word;
          }
        }
          
        return sol;
      }
}