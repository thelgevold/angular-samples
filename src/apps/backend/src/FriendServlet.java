package backend.api;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import angular_samples.api.Friend;
import angular_samples.api.Friends;

import com.googlecode.protobuf.format.JsonFormat;

import javax.servlet.annotation.WebServlet;
@WebServlet(value = "/friends")
public class FriendServlet extends HttpServlet {

  JsonFormat jsonFormat = new JsonFormat();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    Friend friend1 = Friend.newBuilder().setName("Joe").build();
    Friend friend2 = Friend.newBuilder().setName("Tim").build();
    Friend friend3 = Friend.newBuilder().setName("Jim").build();
    Friend friend4 = Friend.newBuilder().setName("Jane").build();
    Friend friend5 = Friend.newBuilder().setName("Anne").build();
    Friend friend6 = Friend.newBuilder().setName("Billy").build();
    Friend friend7 = Friend.newBuilder().setName("James").build();
    Friend friend8 = Friend.newBuilder().setName("Peter").build();
    
    Friends friends = Friends.newBuilder()
                    .addFriends(friend1)
                    .addFriends(friend2)
                    .addFriends(friend3)
                    .addFriends(friend4)
                    .addFriends(friend5)
                    .addFriends(friend6)
                    .addFriends(friend7)
                    .addFriends(friend8).build();

    response.setContentType("application/json");

    response.getWriter().print(jsonFormat.printToString(friends));
  }
}
