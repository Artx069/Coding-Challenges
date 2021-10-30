/*
Tale University is a bit messy, and can't maintain an ordered list of their student. Tale's dean wants to print a sortet list of his students by the gpa, last name and age and post it on the walls so everybody can be impressed of his great students.

Given a list of students, sort them by (from most important to least important):

GPA (descending)
First letter of last name (ascending)
Age (ascending)
And the class Student:

class Student {
  constructor(age, gpa, fullName) {
    this.age = age;
    this.gpa = gpa;
    this.fullName = fullName;
  };
};
Return the sorted result as full names string, comma separated.

For Example, given the list (name, age, gpa):

David Goodman, 23, 88
Mark Rose, 25, 82
Jane Doe, 22, 90
Jane Dane, 25, 90
sort(students) should return "Jane Doe,Jane Dane,David Goodman,Mark Rose"
*/
import java.util.*;
public class TripleSorting {

    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student(23, 88, "David Goodman"));
        students.add(new Student(25, 82, "Mark Rose"));
        students.add(new Student(22, 90, "Jane Doe"));
        students.add(new Student(25, 90, "Jane Dane"));

        System.out.println(sort(students));
    }
    static class Student {
        
      int gpa;
      int age;
      String fullName;

      public Student(int age, int gpa, String fullName){
          this.gpa = gpa;
          this.age = age;
          this.fullName = fullName;
      }
    public int getAge() {
          return age;
      }
      public String getFullName() {
          return fullName;
      }
      public int getGpa() {
          return gpa;
      }

    }

    public static String sort(List<Student> students) {
        students.sort(new Comparator<Student>() {
        @Override
        public int compare(Student o1, Student o2) {

                if(o1.getGpa() == o2.getGpa()){
                    if(o1.getAge() == o2.getAge()){
                        return o1.getFullName().split(" ")[1].compareTo(o2.getFullName().split(" ")[1]);
                    }else{
                        return o1.getAge() - o2.getAge();
                    }
                }else{
                    return o2.getGpa() - o1.getGpa();
                }
            }
        });

        String sol = "";
        for(Student s : students){
            sol += s.getFullName() + ",";
        }
        sol = sol.substring(0, sol.length() -1);
        return sol;
    }
}
