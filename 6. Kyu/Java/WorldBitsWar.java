/*
Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

The side with the largest cumulated strength wins.

Again, three possible outcomes: odds win, evens win and tie.

Examples:

bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2
*/
import java.util.Arrays;

public class WorldBitsWar {
    public static String bitsWar(int[] numbers) {

    
        if(numbers.length < 1){
          return "tie";
        }
            Object[] evens = Arrays.stream(numbers).filter(a -> Math.abs(a) % 2 == 0).mapToObj(a -> a < 0 ? "-" + Integer.toBinaryString(Math.abs(a)).replaceAll("0","") : Integer.toBinaryString(a).replaceAll("0","")).toArray();
            Object[] odds = Arrays.stream(numbers).filter(a -> Math.abs(a) % 2 == 1).mapToObj(a -> a < 0 ? "-" + Integer.toBinaryString(Math.abs(a)).replaceAll("0","") : Integer.toBinaryString(a).replaceAll("0","") ).toArray();
    
    
            int sumEvens = 0;
            int sumOdds = 0;
        
            for(Object e : evens){
                if(e.equals("")){
                    continue;
                }else{            
                    if(String.valueOf(e.toString().charAt(0)).equals("-")){
                    sumEvens -= String.valueOf(e).length() -1;
                    }else{
                        sumEvens += String.valueOf(e).length();
                    }
                }
    
            }
            for(Object e : odds){
                if(e.equals("")){
                    continue;
                }else{
                    if(String.valueOf(e.toString().charAt(0)).equals("-")){
                        sumOdds -= String.valueOf(e).length() -1;
                    }else{
                        sumOdds += String.valueOf(e).length();
                    }
                }
            }
    
        if(sumEvens == sumOdds){
          return "tie";
        }else if(sumEvens > sumOdds){
          return "evens win";
        }else{
          return "odds win";
        }
      }
}
