/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/
import java.util.*;

public class Scramblies {
    public static boolean scramble(String str1, String str2) {
        HashMap<Character, Integer> map = new HashMap<>();
        for(int i = 0; i < str1.length(); i++){
            char temp = str1.charAt(i);
            if(map.containsKey(str1.charAt(i))){
                map.put(temp, map.get(temp) + 1);
            }else{
                map.put(temp, 1);
            }
        }
        
        for(int i = 0; i < str2.length(); i++){
            char temp = str2.charAt(i);
            if(map.containsKey(temp) && map.get(temp) > 0){
                map.put(temp, map.get(temp) -1);
            }else{
              return false;  

            }
        }
      return true;
    }
}