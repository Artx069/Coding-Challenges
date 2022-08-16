/*
In this Kata, we will calculate running pace. To do that, we have to know the distance and the time.

Create the following function:

Where: distance - A float with the number of kilometres

time - A string containing the time it took to travel the distance. It will always be minutes:seconds. For example "25:00" means 25 minutes. You don't have to deal with hours.

The function should return the pace, for example "4:20" means it took 4 minutes and 20 seconds to travel one kilometre.

Note: The pace should always return only the number of minutes and seconds. You don't have to convert these into hours. Floor the number of seconds.
*/
public class RunningPace {
    public static String calculate(double distance, String time) {
      int secs = Integer.parseInt(time.split(":")[0]) * 60 + Integer.parseInt(time.split(":")[1]);
      String pace = (int)((secs/distance)/60) + ":" + padEnd(2, "0",String.valueOf((int)((secs/distance)%60)));
      return pace;
    }
    
      public static String padEnd(int length, String charToPad,String s){
        while(s.length() < length){
            s = charToPad + s;
        }
        return s;
    }
}