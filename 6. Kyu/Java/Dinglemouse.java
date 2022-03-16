/*
There are 3 attributes

name
age
sex ('M' or 'F')
When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.

Examples
Hello.
Hello. My name is Bob. I am 27. I am male.
Hello. I am 27. I am male. My name is Bob.
Hello. My name is Alice. I am female.
Hello. My name is Batman.
Task
Fix the code so we can all go home early.
*/
import java.util.*;

public class Dinglemouse {

    String name;
    int age;
    char sex;
    TreeMap<Integer, String> mapOrder = new TreeMap();
    HashSet<String> setEntries = new HashSet();
    int count = 0;
    public Dinglemouse() {
    }
    
    public Dinglemouse setAge(int age) {
      if(!setEntries.contains("age")){
        this.count += 1;
        setEntries.add("age");
        mapOrder.put(count, "age");
      }
      this.age = age;
      return this;
    }
    
    public Dinglemouse setSex(char sex) {
      if(!setEntries.contains("sex")){
        this.count += 1;
        setEntries.add("sex");
        mapOrder.put(count, "sex");
      }
      this.sex = sex;
    
      return this;
    }
    
    public Dinglemouse setName(String name) {
      if(!setEntries.contains("name")){
        this.count += 1;
        setEntries.add("name");
        mapOrder.put(count, "name");
      }
      this.name = name;
      return this;
    }
    
    public String hello() {
      String text = "Hello.";
      for(Integer key : mapOrder.keySet()){
        if(mapOrder.get(key).equals("name")){
          text += " My name is " + name + ".";
        }else if(mapOrder.get(key).equals("age")){
          text += " I am " + String.valueOf(age) + ".";
        }else if(mapOrder.get(key).equals("sex")){
          String sexString = sex=='M' ? "male" : "female";
            text += " I am " + sexString + ".";
        }
      }
      return text;
    }