/*
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]
*/
import java.util.ArrayList;
import java.util.Collections;
public class SplitAndAdd {
    public static int[] splitAndAdd(int[] numbers, int n) {
        for(int i = 0; i < n; i++){
            numbers = splitAndAdd(numbers);
        }
      return numbers;
    }
  
    public static int[] splitAndAdd(int[] numbers){
        ArrayList<Integer> sol = new ArrayList<>();
        ArrayList<Integer> firstPart = new ArrayList<>();
        ArrayList<Integer> secondPart = new ArrayList<>();

        for(int i = 0; i < numbers.length; i++){
            if(i < numbers.length/2){
                firstPart.add(numbers[i]);
            }else{
                secondPart.add(numbers[i]);
            }
        }
        Collections.reverse(firstPart);
        Collections.reverse(secondPart);


        for(int i = 0; i < secondPart.size(); i++){
            if(i >= firstPart.size()){
                sol.add(secondPart.get(i));
            }else{
                sol.add(firstPart.get(i) + secondPart.get(i));
            }
        }
        Collections.reverse(sol);
        return sol.stream().mapToInt(i -> i).toArray();
    }
}
