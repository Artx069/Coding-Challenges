/*
#Srot the inner ctnnoet in dsnnieedcg oredr

You have to sort the inner content of every word of a string in descending order.
The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me" -> "wiat for me"
"this kata is easy" -> "tihs ktaa is esay"
The string will never be null and will never be empty.
It will contain only lowercase-letters and whitespaces.

In C++ the string is always 0-terminated.
*/
import java.util.Arrays;
import java.util.Collections;
public class ConnectReverseInnerOrder {
    public static String sortTheInnerContent(String s)
    {
      String[] array = s.split(" ");
      StringBuilder solution = new StringBuilder("");
      for(String entry : array){
          if(entry.length() >= 4){
              int[] temp= Arrays.stream(entry.substring(1, entry.length()-1).split("")).map(x -> (int)x.charAt(0)).mapToInt(x -> x).sorted().toArray();
              Collections.reverse(Arrays.asList(temp));
              String[] strTemp = Arrays.stream(temp).mapToObj(x -> Character.toString((char)x)).toArray(String[]::new);
              solution.append(entry.charAt(0));
              for(int i = strTemp.length-1; i>= 0; i--){
                  solution.append(strTemp[i]);
              }
              solution.append(entry.charAt(entry.length()-1) + " ");
          }else{
            solution.append(entry + " ");
          }
      }
      return solution.toString().trim();
    }
}
