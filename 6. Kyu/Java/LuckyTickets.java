/*
In one city, bus tickets use numbers from 100000 to 999999. Your task is to find the number of lucky tickets between two input tickets' values.

The ticket is considered to be lucky if the sum of first 3 digits equals to the sum of last 3 digits:
123321 is lucky, i.e. 1+2+3 equals to 3+2+1
123444 is not lucky, i.e. 1+2+3 doesn't equal to 4+4+4


*/
public class LuckyTickets {
    public int numberOfTickets(int from, int to) {
        int luckyTicketsCount = 0;



    for(int i = from; i <= to; i++){
        String fromString = String.valueOf(i);
        String[] fromSplit = new String[2];
        fromSplit[0] = fromString.substring(0,3);
        fromSplit[1] = fromString.substring(3,6);

        int sumFirstHalf = 0;
        int sumSecondHalf = 0;

        for(int j = 0; j < 3; j++){
            sumFirstHalf += fromSplit[0].charAt(j);
            sumSecondHalf += fromSplit[1].charAt(j);
        }

        if(sumFirstHalf == sumSecondHalf){
            luckyTicketsCount++;
        }
    }
return luckyTicketsCount;
}
}
