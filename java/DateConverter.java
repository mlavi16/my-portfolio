import java.util.Scanner;
public class DateConverter{
	public static void main(String[] args){
		Scanner scnr = new Scanner(System.in);
		int dayNum;
		int monthNum;
		int dateNum;
		int yearNum;
		String dayName = "";
		String monthName = "";
		boolean leapYear;
		boolean print = true;
		
		System.out.println("Enter 4 integers representing dayNumber monthNumber date year:");
		dayNum = scnr.nextInt();
		monthNum = scnr.nextInt();
		dateNum = scnr.nextInt();
		yearNum = scnr.nextInt();
		
		switch (dayNum){
		   case 1:
		      dayName = "Sunday";
		      break;
		   case 2:
		      dayName = "Monday";
		      break;
		   case 3:
		      dayName = "Tuesday";
		      break;
		   case 4:
		      dayName = "Wednesday";
		      break;
		   case 5:
		      dayName = "Thursday";
		      break;
		   case 6:
		      dayName = "Friday";
		      break;
		   case 7:
		      dayName = "Saturday";
		      break;
		   default:
		      System.out.printf("Invalid day number: %d, please enter a number from 1..7.\n", dayNum);
		      print = false;
		      break;
		}
		switch (monthNum){
		   case 1:
		      monthName = "January";
		      break;
		   case 2:
		      monthName = "February";
		      break;
		   case 3:
		      monthName = "March";
		      break;
	      case 4:
	         monthName = "April";
		      break;
	      case 5:
	         monthName = "May";
		      break;
	      case 6:
	         monthName = "June";
		      break;
	      case 7:
	         monthName = "July";
		      break;
	      case 8:
	         monthName = "August";
		      break;
	      case 9:
	         monthName = "September";
		      break;
	      case 10:
	         monthName = "October";
		      break;
	      case 11:
	         monthName = "November";
		      break;
	      case 12:
	         monthName = "December";
		      break;
	      default:
	         System.out.printf("Invalid month number: %d, please enter a number from 1..12.\n", monthNum);
	         print = false;
	         break;
		}
		if ((dateNum < 1) || (dateNum > 31)){
		   System.out.printf("Invalid date number: %d, please enter a number from 1..31.\n", dateNum);
		   print = false;
		}
		if ((monthNum == 9 || monthNum == 4 || monthNum == 6 || monthNum == 11) && (dateNum > 30)){
		   System.out.printf("Invalid date: %s, does not have %d days, please enter a valid date.\n", monthName, dateNum);
		   print = false;
		}
		else if ((monthNum == 2) && (dateNum > 29)){
		   System.out.printf("Invalid date: %s, does not have %d days, please enter a valid date.\n", monthName, dateNum);
		   print = false;
		}
		if (monthNum == 2){
		   
         //leap year test
		   if ((yearNum % 4) != 0){
		      leapYear = false;
		   }
		   else if ((yearNum % 100) != 0){
		      leapYear = true;
		   }
		   else if ((yearNum % 400) != 0){
		      leapYear = false;
		   }
		   else{
		      leapYear = true;
		   }
		   
		   if (!leapYear && dateNum == 29){
		      System.out.printf("Invalid date: %d is not a leap year, February does not have %d days, please enter a valid date.\n", yearNum, dateNum);
		      print = false;
		   }
		}
		if (print){
	   	System.out.printf("%d %d %d %d is %s %s %d, %d\n", dayNum, monthNum, dateNum, yearNum, dayName, monthName, dateNum, yearNum);
	   }
	}
}


