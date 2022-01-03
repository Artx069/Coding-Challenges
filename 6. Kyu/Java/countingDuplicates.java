/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;
public class countingDuplicates {
    public static int duplicateCount(String text) {

        text = text.toLowerCase();
        String[] split = text.split("");
        int count = 0;

        Map<String, Long> freq = Stream.of(split).collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));

        for (String k : freq.keySet()
            ) {
            if(freq.get(k) >= 2){
                count++;
            }
        }
        return count;
    }
}
