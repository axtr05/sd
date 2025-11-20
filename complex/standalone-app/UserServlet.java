import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.sql.*;

@WebServlet("/user")
public class UserServlet extends HttpServlet {

    private Connection getConn() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection("jdbc:mysql://localhost/UserDB","root","");
    }

    protected void doPost(HttpServletRequest r, HttpServletResponse s) {
        String a = r.getParameter("action");
        try {
            Connection c = getConn();

            if ("register".equals(a)) {
                PreparedStatement p = c.prepareStatement(
                    "INSERT INTO users(username,email,password) VALUES(?,?,?)"
                );
                p.setString(1, r.getParameter("u"));
                p.setString(2, r.getParameter("e"));
                p.setString(3, r.getParameter("p"));
                s.getWriter().println("Registered! <a href='login.html'>Login</a>");
            }

            if ("login".equals(a)) {
                PreparedStatement p = c.prepareStatement(
                    "SELECT * FROM users WHERE username=? AND password=?"
                );
                p.setString(1, r.getParameter("u"));
                p.setString(2, r.getParameter("p"));
                ResultSet rs = p.executeQuery();
                s.getWriter().println(rs.next() ?
                    "Welcome " + r.getParameter("u") :
                    "Invalid! <a href='login.html'>Try again</a>"
                );
            }

        } catch (Exception e) {
            try { s.getWriter().println(e); } catch (Exception ignored) {}
        }
    }
}
