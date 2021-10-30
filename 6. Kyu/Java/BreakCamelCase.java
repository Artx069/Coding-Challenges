/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

public class BreakCamelCase {
    public static void main(String[] args){
        System.out.println(camelCase("testThisExample"));
    }
    
    
    public static String camelCase(String string) {
            while(string.matches("^.*([a-z]+)([A-Z][a-z]+).*$")){
                string = string.replaceAll("([a-z]+)([A-Z][a-z]+)", "$1 $2");
            }
        return string;
    }
      
}
