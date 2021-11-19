/*
In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

Solution.sortByFrequency(new int[]{2, 3, 5, 3, 7, 9, 5, 3, 7});
// Returns {3, 3, 3, 5, 5, 7, 7, 2, 9}
// We sort by highest frequency to lowest frequency.
// If two elements have same frequency, we sort by increasing value.
*/
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
public class SimpleFrequencySort {
    public static int[] sortByFrequency(int[] array) {
        for(int ii : array){
          System.out.print(ii + ", ");
        }
                  HashMap<Integer, Integer> map = new HashMap<>();
          ArrayList<String> arraylist = new ArrayList<>();
          ArrayList<Integer> solArray = new ArrayList<>();
  
          for(int i: array){
              if(!map.containsKey(i)){
                  map.put(i, 1);
              }else{
                  map.put(i, map.get(i) + 1);
              }
          }
  
          for(int k : map.keySet()){
              arraylist.add(map.get(k) + "_" + k);
          }
          arraylist.sort(new Comparator<String>() {
              @Override
              public int compare(String o1, String o2) {
                                  int indexUSo1 = o1.indexOf("_");
                  int indexUSo2 = o2.indexOf("_");
  
                  int o1Num = Integer.parseInt(o1.substring(indexUSo1 + 1, o1.length()));
                  int o2Num = Integer.parseInt(o2.substring(indexUSo2 + 1, o2.length()));
                  if(Integer.parseInt(o2.substring(0,indexUSo1)) == Integer.parseInt(o1.substring(0,indexUSo2))){
                      return -(o2Num - o1Num);
                  }
                  return Integer.parseInt(o2.substring(0,indexUSo1)) - Integer.parseInt(o1.substring(0,indexUSo2));}
          });
  
          for(String s : arraylist){
              int indexUS = s.indexOf("_");
              int number = Integer.parseInt(s.substring(indexUS + 1, s.length()));
              int count = Integer.parseInt(s.substring(0, indexUS));
              for(int i = 0; i < count; i++){
                  solArray.add(number);
              }
          }
        
        return solArray.stream().mapToInt(i -> i).toArray();
      }
}
