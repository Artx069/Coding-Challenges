/*
Create a method named "rotate" that returns a given array with the elements inside the array rotated n spaces.

If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.

Example:

Object[] data = new Object[]{1, 2, 3, 4, 5};

rotate(data, 1)    =>    {5, 1, 2, 3, 4}
rotate(data, 2)    =>    {4, 5, 1, 2, 3}
rotate(data, 3)    =>    {3, 4, 5, 1, 2}
rotate(data, 4)    =>    {2, 3, 4, 5, 1}
rotate(data, 5)    =>    {1, 2, 3, 4, 5}

rotate(data, 0)    =>    {1, 2, 3, 4, 5}

rotate(data, -1)    =>    {2, 3, 4, 5, 1}
rotate(data, -2)    =>    {3, 4, 5, 1, 2}
rotate(data, -3)    =>    {4, 5, 1, 2, 3}
rotate(data, -4)    =>    {5, 1, 2, 3, 4}
rotate(data, -5)    =>    {1, 2, 3, 4, 5}
Furthermore the method should take ANY array of objects and perform this operation on them:

rotate(new Object[]{'a', 'b', 'c'}, 1)        =>    {'c', 'a', 'b'}
rotate(new Object[]{1.0, 2.0, 3.0}, 1)        =>    {3.0, 1.0, 2.0}
rotate(new Object[]{true, true, false}, 1)    =>    {false, true, true}
Finally the rotation shouldn't be limited by the indices available in the array. Meaning that if we exceed the indices of the array it keeps rotating.

Example:

Object[] data = new Object[]{1, 2, 3, 4, 5}

rotate(data, 7)        =>    {4, 5, 1, 2, 3}
rotate(data, 11)       =>    {5, 1, 2, 3, 4}
rotate(data, 12478)    =>    {3, 4, 5, 1, 2}
*/
import java.util.ArrayList;

public class RotateArray {
    
  public Object[] rotate(Object[] data, int n) {

    if(n > 0){
        for(int i = 0; i < n; i++){
            data = rotateRight(data);
        }
    }else{
        for(int i = 0; i < Math.abs(n); i++){

            data = rotateLeft(data);
        }
    }
return data;
}
public static Object[] rotateRight(Object[] object){
ArrayList<Object> arrayList = new ArrayList();
for(Object e : object){
    arrayList.add(e);
}
Object temp = arrayList.get(arrayList.size()-1);
arrayList.remove(arrayList.size() -1);
arrayList.add(0, temp);
return arrayList.toArray();
}
public static Object[] rotateLeft(Object[] object){
    ArrayList<Object> arrayList = new ArrayList();
    for(Object e : object){
        arrayList.add(e);
    }
    Object temp = arrayList.get(0);
    arrayList.remove(0);
    arrayList.add(temp);
    return arrayList.toArray();
}
}
