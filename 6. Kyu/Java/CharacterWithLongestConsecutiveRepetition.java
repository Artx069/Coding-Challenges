/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.


*/
public class CharacterWithLongestConsecutiveRepetition {
    public static Object[] longestRepetition(String s) {
        if(s.length() < 1){
          return new Object[]{"", 0};
        }
        String[] split = s.split("(?<=(.))(?!\\1)");
          int biggestInt = split[0].length();
          String biggestStr = String.valueOf(split[0].charAt(0));
  
          for(int i = 1; i < split.length; i++){
              if(split[i].length() > biggestInt){
                  biggestInt = split[i].length();
                  biggestStr = String.valueOf(split[i].charAt(0));
              }
          }
          return new Object[]{biggestStr, biggestInt};
      }
}
