/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

Max.sequence(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4});
// should be 6: {4, -1, 2, 1}
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
import java.util.ArrayList;
import java.util.Arrays;
public class MaximumSubarraySum {
    public static int sequence(int[] arr) {
        ArrayList<int[]> subArrs = new ArrayList<>();
    
    
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j <= arr.length; j++) {
                subArrs.add(Arrays.copyOfRange(arr, i, j));
            }
        }
        int highest = 0;
        for (int[] sub : subArrs) {
            if (Arrays.stream(sub).reduce((a, b) -> a + b).getAsInt() > highest) {
                highest = Arrays.stream(sub).reduce((a, b) -> a + b).getAsInt();
            }
        }
        return highest;
      }
}
