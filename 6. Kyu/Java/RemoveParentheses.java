/*
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested. 
*/
public class RemoveParentheses {

    public static String removeParentheses(String s) {
        if(s.indexOf("(") != -1 && s.indexOf(")") != -1){
            String firstPart = s.substring(0, s.lastIndexOf("("));
            System.out.println(firstPart);
            String secPart = s.substring(s.lastIndexOf("("));
            secPart = secPart.substring(secPart.indexOf(")") + 1);
            s = firstPart + secPart;
            return removeParentheses(s);
        }else{
            return s;
        }
    }
}