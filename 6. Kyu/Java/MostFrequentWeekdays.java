/*
What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.
Examples (input -> output):
* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday'] 
*/
import java.time.LocalDate;
import java.util.*;

public class MostFrequentWeekdays {
    public static String[] mostFrequentDays(int year) {

        LocalDate startDate =  LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year, 12, 31);
        
        LinkedHashMap<String, Integer> hashMap = new LinkedHashMap<>();
        hashMap.put("Monday", 0);
        hashMap.put("Tuesday", 0);
        hashMap.put("Wednesday", 0);
        hashMap.put("Thursday", 0);
        hashMap.put("Friday", 0);
        hashMap.put("Saturday", 0);
        hashMap.put("Sunday", 0);
        
        for (LocalDate date = startDate; date.isBefore(endDate.plusDays(1)); date = date.plusDays(1))
        {
          String day = date.getDayOfWeek().toString().substring(0,1) + date.getDayOfWeek().toString().substring(1).toLowerCase();
          hashMap.put(day, hashMap.get(day) +1);
        }
        ArrayList<String> solution = new ArrayList<>();
    
        for(String k : hashMap.keySet()){
            if(hashMap.get(k) == 53){
                solution.add(k);
            }
        }
    
        return solution.toArray(new String[0]);
      }
}
