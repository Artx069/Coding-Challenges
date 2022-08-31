/*
Given a balanced string with brackets like: "AA(XX((YY))(U))" find the substrings that are enclosed in the greatest depth.
Example:
String:  A   A   (   X   X   (   (   Y   Y   )   )   (   U   )   )
Level:        1        2  3       3  2  2    2  1

Therefore, answer: { "YY" } since the substring "YY" is locked at the deepest level.
If several substring are at the deepest level, return them all in a list in order of appearance.

The string includes only uppercase letters, parenthesis '(' and ')'.
If the input is empty or doesn't contain brackets, an array containing only the original string must be returned. 
*/
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
public class MaxiumumDepthNestedBrackets {
    public static List<String> stringsInMaxDepth(String s) {
        if(s == null || s.equals("") || (s.indexOf('(') == -1 && s.indexOf(')') == -1)) return Arrays.asList(s);
        List<String> list = new ArrayList<>();
        int level = 0;
        int highestLevel = 0;
        HashMap<Integer, ArrayList<Integer>> map = new HashMap<>();


        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == '('){
                level++;
            }
            if(!map.containsKey(level)){
                ArrayList<Integer> copy = new ArrayList<>();
                copy.add(i);
                map.put(level,  copy);
            }else{
                ArrayList<Integer> copy =  map.get(level);
                copy.add(i);
                map.put(level, copy);
            }
            if(s.charAt(i) == ')'){
                level--;
            }
            if(level > highestLevel){
                highestLevel = level;
            }
        }
        String toAppend = "";
        for(Integer i : map.get(highestLevel)){
            if(s.charAt(i) != '('){
                if(s.charAt(i) == ')'){
                    list.add(toAppend);
                    toAppend = "";
                }else {
                    toAppend += String.valueOf(s.charAt(i));
                }
            }
        }
        return list;
    }
}
