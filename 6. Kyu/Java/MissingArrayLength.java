/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges. 
*/
import java.util.Arrays;
import java.util.stream.IntStream;
public class MissingArrayLength {
    public static int getLengthOfMissingArray(Object[][] arrayOfArrays)
    {
        if(
           arrayOfArrays == null || 
           arrayOfArrays.length == 0 ||
           Arrays.stream(arrayOfArrays).filter(x -> x == null).toArray().length > 0
          ){
            return 0;
        }
        
        int[] lengths = Arrays.stream(arrayOfArrays).mapToInt(x -> x.length).toArray();
        if(Arrays.stream(lengths).filter(x -> x == 0).toArray().length == 1){
            return 0;
        }
        
        int min = IntStream.of(lengths).min().orElse(Integer.MIN_VALUE);
        int max = IntStream.of(lengths).max().orElse(Integer.MAX_VALUE);
  
        for(int i = min; i <= max; i++){
            int finalI = i;
            if(Arrays.stream(lengths).filter(x -> x == finalI).toArray().length == 0){
              return i;
            }
        }
      
        return max + 1;
    }
}
