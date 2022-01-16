/*
You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.

Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.

Your job is to decide who wins.

Example:

  robot1.getName() => "Rocky"
  robot1.getHealth() => 100
  robot1.getSpeed() => 20
  robot1.getTactics() => ["punch", "punch", "laser", "missile"]
    
  robot2.getName() => "Missile Bob"
  robot2.getHealth() => 100
  robot2.getSpeed() => 21
  robot2.getTactics() => ["missile", "missile", "missile", "missile"]
 
  tactics = {
    "punch" => 20,
    "laser" => 30,
    "missile" => 35
  }
 
 fight(Robot robot1, Robot robot2, Map<String, Integer> tactics) -> "Missile Bob has won the fight."
robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.

Rules

A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
Robots alternate turns attacking. Tactics are used in order.
A fight is over when a robot has 0 or less health or both robots have run out of tactics.
A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
If both robots run out of tactics, whoever has the most health wins. Return the message "{Name} has won the fight."
If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."
To Java warriors

Robot class is immutable.
*/
import java.util.*;
public class RockEmSockEmRobot {
    public static String fight(Robot robot1, Robot robot2, Map<String, Integer> tactics) {
        Robot[] robotArr = new Robot[]{robot1, robot2};
        int startsFight = robot1.getSpeed() >= robot2.getSpeed() ? 0 : 1;
        int rounds = robot1.getTactics().length >= robot2.getTactics().length ? robot1.getTactics().length : robot2.getTactics().length;
        int[] health = new int[]{robot1.getHealth(), robot2.getHealth()};
        for(int i = 0 ; i < rounds; i++){
          for(int j = 0; j < 2; j++){
              if(i >= robotArr[startsFight].getTactics().length){
                startsFight = Math.abs(startsFight -1);
                continue;
              }else{
                  health[Math.abs(startsFight -1)] -= tactics.get(robotArr[startsFight].getTactics()[i]);
                  if(health[Math.abs(startsFight -1)] <= 0){
                      return robotArr[startsFight].getName()   + " has won the fight.";
                  }
                  startsFight = Math.abs(startsFight -1);
              }
            }
        }

        if(health[0] > health[1]){
          return robotArr[0].getName() + " has won the fight.";
        }else if(health[0] == health[1]){
          return "The fight was a draw.";
        }else{
          return robotArr[1].getName() + " has won the fight.";
        }

  }
}

class Robot{
    String name;
    int health;
    int speed;
    String[] tactics;

    public Robot(String name, int health, int speed, String[] tactics) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.tactics = tactics;
    }

    public String getName() {
        return name;
    }

    public int getHealth() {
        return health;
    }

    public int getSpeed() {
        return speed;
    }

    public String[] getTactics() {
        return tactics;
    }
}
