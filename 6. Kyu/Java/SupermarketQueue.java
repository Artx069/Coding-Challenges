/*
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.
*/
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
public class SupermarketQueue {
    public static int solveSuperMarketQueue(int[] customers, int n) {
        List<Integer> customersList = IntStream.of(customers)
          .boxed()
          .collect(Collectors.toCollection(ArrayList::new));

        int[] tillsArr = new int[n];
        int time = 0;
        boolean check = true;
        while(check){
            for(int i = 0; i < tillsArr.length; i++){
                if(tillsArr[i] <= 1 && customersList.size() > 0){
                    tillsArr[i] = customersList.get(0);
                    customersList.remove(0);
                }else{
                    if(tillsArr[i] > 0) {
                        tillsArr[i] = tillsArr[i] - 1;
                    }
                }
            }
            if(customersList.size() == 0 && Arrays.stream(tillsArr).reduce((a,b) -> a + b).getAsInt() == 0){
                check = false;
                break;
            }
            time++;
        }
      return time;
    }
}
