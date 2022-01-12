/*
Your task is to find the next higher number (int) with same '1'- Bits.

I.e. as much 1 bits as before and output next higher than input. Input is always an int in between 1 and 1<<30 (inclusive). No bad cases or special tricks...

Some easy examples:
Input: 129  => Output: 130 (10000001 => 10000010)
Input: 127 => Output: 191 (01111111 => 10111111)
Input: 1 => Output: 2 (01 => 10)
Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111)
*/
import java.util.*;

public class nextHigherNumberWithSameBits{
    public static int nextHigher(int n) {
        int m = n+1;
        while(Arrays.stream(Integer.toBinaryString(n).split("")).filter(a -> a.equals("1")).toArray().length != Arrays.stream(Integer.toBinaryString(m).split("")).filter(a -> a.equals("1")).toArray().length){
            m++;
        }
    return m;
  }
}