/*
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
*/
public class AreWeAlternate {
    public static boolean isAlt(String s) {
        String[] regex = new String[]{"[aeiou]", "[^aeiou]"};
          int start = String.valueOf(s.charAt(0)).matches("[aeiou]") ? 0 : 1;
  
          for(int i = 0; i < s.length(); i++){
              if(!String.valueOf(s.charAt(i)).matches(regex[start])){
                  return false;
              }
              start = Math.abs(start -1);
          }
        return true;
      }
}
