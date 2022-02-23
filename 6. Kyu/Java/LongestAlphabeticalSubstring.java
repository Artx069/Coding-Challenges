/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.
*/
public class LongestAlphabeticalSubstring {
    public static String longestAlpabeticalSubstring(String text) {
        if(text.length() < 2){
          return text;
        }else{
        String substr = "";
        int breakpoint = 0;
  
        for(int i = 1; i < text.length(); i++){
            if((int)text.charAt(i) < (int)text.charAt(i-1)){
                    if((i - breakpoint) > substr.length()) {
                        substr = text.substring(breakpoint, i);
                    }
                    breakpoint = i;
            }else if(i == text.length() -1){
                if((text.length() - breakpoint) > substr.length()) {
                    substr = text.substring(breakpoint, text.length());
                }
            }
        }
        return substr;
        }
    }
}