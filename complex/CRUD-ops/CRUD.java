import java.sql.*;
import java.util.Scanner;

public class CRUD {
    static final String URL = "jdbc:mysql://localhost:3306/labdb";
    static final String USER = "root", PASS = "your_password";
    static Scanner sc = new Scanner(System.in);

    static Connection con() throws Exception {
        return DriverManager.getConnection(URL, USER, PASS);
    }

    static void show(String q) throws Exception {
        ResultSet rs = con().createStatement().executeQuery(q);
        while (rs.next())
            System.out.println(rs.getInt(1) + "  " + rs.getString(2) + "  " + rs.getInt(3));
    }

    static void exec(String q, Object... vals) throws Exception {
        PreparedStatement ps = con().prepareStatement(q);
        for (int i = 0; i < vals.length; i++) ps.setObject(i + 1, vals[i]);
        ps.executeUpdate();
    }

    public static void main(String[] a) throws Exception {
        System.out.println("\n1.Insert 2.View 3.Update 4.Delete 5.Exit");
        while (true) {
            System.out.print("Choice: ");
            switch (sc.nextInt()) {
                
                case 1 -> {
                    System.out.print("Name: "); sc.nextLine();
                    String n = sc.nextLine();
                    System.out.print("Age: "); int age = sc.nextInt();
                    exec("INSERT INTO students(name,age) VALUES(?,?)", n, age);
                    System.out.println("Inserted");
                }

                case 2 -> {
                    System.out.println("\nID  Name  Age");
                    show("SELECT * FROM students");
                }

                case 3 -> {
                    System.out.print("ID: "); int id = sc.nextInt(); sc.nextLine();
                    System.out.print("New Name: "); String n = sc.nextLine();
                    System.out.print("New Age: "); int age = sc.nextInt();
                    exec("UPDATE students SET name=?, age=? WHERE id=?", n, age, id);
                    System.out.println("Updated");
                }

                case 4 -> {
                    System.out.print("ID: ");
                    exec("DELETE FROM students WHERE id=?", sc.nextInt());
                    System.out.println("Deleted");
                }

                case 5 -> { return; }
                default -> System.out.println("Invalid!");
            }
        }
    }
}
