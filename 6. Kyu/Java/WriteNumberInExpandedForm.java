/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

Kata.expandedForm(12); # Should return "10 + 2"
Kata.expandedForm(42); # Should return "40 + 2"
Kata.expandedForm(70304); # Should return "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
*/
public class WriteNumberInExpandedForm {
    public static String expandedForm(int n)
    {
      String s = String.valueOf(n);
      ArrayList<String> singleNums = new ArrayList<>();

      for(int i = 0; i < s.length(); i++){
          String temp = String.valueOf(s.charAt(i)) + "0".repeat(s.length() - i - 1);
          if(!temp.matches("^[0]+$")){
              singleNums.add(temp);
          }
      }
      String[] sol = new String[singleNums.size()];
      sol = singleNums.toArray(sol);
      return String.join(" + ",sol);
    }
}
