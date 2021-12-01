/*
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
*/
import java.util.*;

public class WhereIsMyParent {
    static String findChildren(final String text) {
        TreeMap<String, Integer> map = new TreeMap<>();

        for(String s : text.split("")){
            if (!map.containsKey(s.toUpperCase())) {
                map.put(s.toUpperCase(), 0);
            } else {
                map.put(s.toUpperCase(), map.get(s.toUpperCase()) + 1);
            }
        }

        String sol = "";
        for(String key : map.keySet()){
            sol += key + key.toLowerCase().repeat(map.get(key));
        }
        return sol;
        }
}
