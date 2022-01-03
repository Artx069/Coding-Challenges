/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
*/
import java.util.ArrayList;
import java.util.Comparator;

public class weightForWeight {
    public static String orderWeight(String strng) {

  
        String[] split = strng.split(" ");

        ArrayList<String> list = new ArrayList<>();

        for (String s : split
                ) {
            int sum = 0;

            for (int i = 0; i < s.length(); i++){
                sum += Integer.parseInt(String.valueOf(s.charAt(i)));
            }
            list.add(sum + "_" + s);
        }

        list.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                int o1IndexUnderscore = o1.indexOf("_");
                int o2IndexUnderscore = o2.indexOf("_");

                String o1Value = o1.substring(0, o1IndexUnderscore);
                String o2Value = o2.substring(0, o2IndexUnderscore);


                if(Integer.parseInt(o1Value) == Integer.parseInt(o2Value)){
                    String o1SameValue = o1.substring(o1IndexUnderscore + 1, o1.length() );
                    String o2SameValue = o2.substring(o2IndexUnderscore + 1,o2.length() );

                    return o1SameValue.compareTo(o2SameValue);
                }else {

                    return Integer.parseInt(o1Value) - Integer.parseInt(o2Value);
                }
            }
        });

        String sol = "";

        for (String s : list
                ) {
            int sIndexUnderscore = s.indexOf("_");


            String sValue = s.substring(sIndexUnderscore +1, s.length());

            sol += sValue +" ";

        }
        return sol.trim();
    }
}
