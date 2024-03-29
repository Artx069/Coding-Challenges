/*
Your function should return a valid regular expression. This is a pattern which is normally used to match parts of a string. In this case will be used to check if all the characters given in the input appear in a string.

Input
Non empty string of unique alphabet characters upper and lower case.

Output
Regular expression pattern string.

Examples
Your function should return a string.

public static String regexContainsAll(str) {
  return "abc";
}
That regex pattern will be tested like this.

String abc = "abc";
String pattern = regexContainsAll(abc);
String str = "zzzaaacccbbbzzz";
Pattern.compile(pattern).matcher(str).find();  // -> true
*/

import java.util.Arrays;
import java.util.stream.Collectors;
public class HasAllCharacters {
    public static String regexContainsAll(String str) {
        return Arrays.stream(str.split("")).map(x -> "(?=.*" + x + ")").collect(Collectors.joining());
      }
}
