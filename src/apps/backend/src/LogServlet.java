package backend.api;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import angular_samples.api.Log;
import angular_samples.api.Logs;

import com.googlecode.protobuf.format.JsonFormat;

import javax.servlet.annotation.WebServlet;
@WebServlet(value = "/logs")
public class LogServlet extends HttpServlet {

  JsonFormat jsonFormat = new JsonFormat();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    Log log1 = Log.newBuilder().setText("loading failed").setSeverity(1).build();
    Log log2 = Log.newBuilder().setText("system failure").setSeverity(2).build();
    Log log3 = Log.newBuilder().setText("slow response").setSeverity(2).build();
    Log log4 = Log.newBuilder().setText("login failed").setSeverity(4).build();
    Log log5 = Log.newBuilder().setText("null argument exception").setSeverity(10).build();
    
    Logs logs = Logs.newBuilder()
                    .addLogs(log1)
                    .addLogs(log2)
                    .addLogs(log3)
                    .addLogs(log4)
                    .addLogs(log5).build();

    response.setContentType("application/json");

    response.getWriter().print(jsonFormat.printToString(logs));
  }
}
